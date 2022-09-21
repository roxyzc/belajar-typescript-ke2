import express from 'express';
import { createUserHandler } from '../controllers/user.controller';
import validateResource from '../middlewares/validateResource';
import { createUserSchema } from '../schema/user.schema';

const router = express.Router();

router.post('/register', validateResource(createUserSchema), createUserHandler);

export default router;
