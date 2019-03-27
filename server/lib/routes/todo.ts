import { NextFunction, Request, Response, Router } from 'express';
import todoBackend from '../backend/todoBackend';

export class TodosRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  public getTodos(req: Request, res: Response, next: NextFunction) {
    todoBackend.getTodos().then(r => res.json(r)).catch(next);
  }

  public createTodo(req: Request, res: Response, next: NextFunction) {
    todoBackend.createTodo(req.body).then(r => res.json(r)).catch(next);
  }

  public updateTodo(req: Request, res: Response, next: NextFunction) {
    todoBackend.updateTodo(req.body).then(r => res.json(r)).catch(next);
  }

  public deleteTodo(req: Request, res: Response, next: NextFunction) {
    todoBackend.deleteTodo(req.body).then(r => res.json(r)).catch(next);
  }

  public init(){
    this.router.get('/', this.getTodos);
    this.router.post('/', this.createTodo);
    this.router.put('/', this.updateTodo);
    this.router.delete('/', this.deleteTodo);
  }
}

const todosRoutes = new TodosRouter();

export default todosRoutes.router;
