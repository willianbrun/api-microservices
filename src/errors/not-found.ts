import { Request, Response, NextFunction } from 'express';
import HttpError from './http-error';

const notFound = (req: Request, res: Response, next: NextFunction) => {
    const error = new HttpError(404, 'Not Found');
    next(error)
}

export default notFound;