import {createLogger, format, transports} from 'winston'

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ), 
    transports: [
        new transports.Console(),
        new transports.File({filename: 'logs/info.log', level: 'info'}),
        new transports.File({filename: 'logs/combined.log'}),
        new transports.File({filename: 'logs/error.log', level: 'error'}),
        new transports.File({filename: 'logs/warning.log', level: 'warning'}),
    ]
})

export default logger