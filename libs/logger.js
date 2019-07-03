const winston = require('winston')
const root = require('app-root-path')

const { createLogger, format, transports } = require('winston')

const {
  combine, timestamp, printf,
} = format

const logFormat = printf(({
  level, message, timestamp: time,
}) => `[${level}] : ${message} -- ${time}`)

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    logFormat,
  ),
  transports: [
    new transports.File({
      filename: root.resolve('/logs/error.log'), level: 'error',
    }),
    new transports.File({
      filename: root.resolve('/logs/app.log'),
    }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }))
}

module.exports = logger
