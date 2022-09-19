import express, {Request, Response} from "express";
import auth from "./auth.routes";
import user from "./user.routes";

const router = express.Router();

router.get('/check', (_: Request, res: Response) => res.sendStatus(200));
router.use('/api', auth);
router.use('/api', user);

export default router;