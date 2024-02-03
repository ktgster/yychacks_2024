import { Request, Response, Router } from 'express';

class AppRoutes {
  public router = Router();

  constructor() {
    this.config();
  }

  private config() {
    this.router.get('/', (req: Request, res: Response) => {
      res.send(
        `Hi, this is YYC 24 Micu Api !!`
      );
    });

    // no auth routes
    this.router.get('/test', (req: Request, res: Response) => {
      res.send(
        `Second API endpoint`
      );

    });
  }
}

export const appRoutes = new AppRoutes();
