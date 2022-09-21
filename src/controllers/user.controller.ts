import { Request, Response } from 'express';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../service/user.service';
import sendMail from '../utils/mailer';
export async function createUserHandler(req: Request<{}, {}, CreateUserInput>, res: Response) {
    const payload = req.body;
    console.log(payload);
    try {
        console.log('masuk?');
        const user = await createUser(payload);
        console.log('LEWAT?');
        console.log(user);
        await sendMail({
            from: 'test@example.com',
            to: user.email,
            subject: 'please verify your account',
            text: `verification code ${user.verificationCode}. Id: ${user._id}`
        });
        return res.send('User successfully created');
    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(409).send('account already exists');
        }
        console.log(error);
        return res.sendStatus(500);
    }
}
