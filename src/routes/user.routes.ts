import express from "express";

const router = express.Router();

router.post('/users', (req, res) => res.sendStatus(200));

export default router;
