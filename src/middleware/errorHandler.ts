import { NextFunction, Request, Response } from 'express';
import logger from './logger';
import HttpError from '../errors/http-error';

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    if (err instanceof HttpError) {
        logger.error(`Status: ${err.status} Erro: ${err.message}`);
        res.status(err.status).json({ error: err.message });
    } else {
        logger.error(`Erro: ${err.message}`);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default errorHandler;