import Router from 'express';
import usersController from '../controllers/users.controller';
import { catchAsync } from '../middlewares/errors';
import getFilters from '../middlewares/filters/users.filters';

export default () => {
  const api = Router();

  // GET /users
  api.get("/users", getFilters, catchAsync(usersController.findAllUsers));

  // GET /users/:id
  api.get("/users/:id", catchAsync(usersController.findOneUser));
  
  // POST /users
  api.post("/users", catchAsync(usersController.createUser));

  // PUT /users/:id
  api.put("/users/:id", catchAsync(usersController.updateUser));

  // DELETE /users/:id
  api.delete("/users/:id", catchAsync(usersController.deleteUser));

  // DELETE /users
  api.delete("/users", catchAsync(usersController.deleteAllUsers));
  
  return api;
}