import { Router } from 'express';
import { taskController } from './task.controller';
import {
  createValidator,
  updateValidator,
} from './tasks.validator';

export const taskRouter: Router = Router();

taskRouter.get('/tasks', taskController.getAll);

taskRouter.post(
  '/tasks',
  createValidator,
  taskController.create,
);

taskRouter.put(
  '/tasks',
  updateValidator,
  taskController.update,
);
