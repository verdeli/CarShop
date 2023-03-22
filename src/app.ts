import express from 'express';
import CarController from './Controllers/CarController';
import ErrorHandler from './middlewares/ErrorHandler';

class App {
  app: express.Express;
  
  constructor() {
    this.app = express();
    this.initAuthHeader();
    this.initRoutes();
    this.initMiddleware();
  }
  
  private initAuthHeader(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private initMiddleware(): void {
    this.app.use(ErrorHandler.handle);
  }

  private initRoutes(): void {
    this.app.use(new CarController().initRoutes());
  }
}

export default new App().app;
