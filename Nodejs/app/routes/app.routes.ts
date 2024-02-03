import { Request, Response, Router } from 'express';
import { profiles } from '../../fixtures/profiles';

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

    this.router.get('/test', (req: Request, res: Response) => {
      res.send(
        `Second API endpoint`
      );
    });

    this.router.get('/newcomer/:id', (req: Request, res: Response) => {
      const newcomerId = parseInt(req.params.id, 10);
      const newcomers = profiles.filter(p => p.type === 'newcomer');
      res.send(JSON.stringify(newcomers[newcomerId-1]));
    });
    this.router.get('/host/:id', (req: Request, res: Response) => {
      const hostId = parseInt(req.params.id, 10);
      const hosts = profiles.filter(p => p.type === 'host');
      res.send(JSON.stringify(hosts[hostId-1]));
    });

  }
}

export const appRoutes = new AppRoutes();
