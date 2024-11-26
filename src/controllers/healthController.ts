import { Request, Response } from "express"
import logger from "../middleware/logger";

export class HealthController {
    healthCheck = async (req: Request, res: Response): Promise<void> => {
      const healthcheck = {
        uptime: process.uptime(),
        message: 'OK',
        timestamp: Date.now()
      };

      logger.info(`Healthcheck id: ${req.params.id}`);
      try {
        res.status(200).send(healthcheck);
      } catch (error: any) {
        healthcheck.message = error;
        res.status(503).send();
      }
    }
  }