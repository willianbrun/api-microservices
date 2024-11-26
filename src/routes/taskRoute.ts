import express from 'express'
import { TaskController } from '../controllers/taskController'
import authentication from '../middleware/authentication';

const taskController = new TaskController();
const router = express.Router()

router.post('/tarefa', authentication.hasAuthorization, taskController.create)
router.get('/tarefas', authentication.hasAuthorization, taskController.getAll)
router.get('/tarefa/:id', authentication.hasAuthorization, taskController.getById)
router.put('/tarefa/:id', authentication.hasAuthorization, taskController.update)
router.delete('/tarefa/:id', authentication.hasAuthorization, taskController.delete)

export default router
