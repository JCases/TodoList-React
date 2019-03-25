import { NextFunction, Request, Response, Router } from 'express';

export class TodosRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    //this.init();
  }

  public getTodos(req: Request, res: Response, next: NextFunction) {
    const todoID = req.body;
    //todoBackend.
  }

}

const todosRoutes = new TodosRouter();

export default todosRoutes.router;

// TODO: COMPLETE TODOS ROUTER  