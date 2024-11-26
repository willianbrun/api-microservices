import express from 'express'   
import { LoginController } from '../controllers/loginController';
import { HealthController } from '../controllers/healthController';

const loginController = new LoginController();
const healthController = new HealthController();
const router = express.Router()

router.post('/login', loginController.doLogin)
router.get('/healthcheck', healthController.healthCheck)

export default router
