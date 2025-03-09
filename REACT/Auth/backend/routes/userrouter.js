import express from 'express';
import { initial, login, register } from '../controller/authcontroller.js';

const router = express.Router();

router.route('/initial').get(initial);
router.route('/register').post(register);
router.route('/login').post(login);



export default router;
