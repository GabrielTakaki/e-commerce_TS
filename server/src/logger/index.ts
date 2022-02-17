import pino from 'pino';

const transport = pino.transport({
  target: 'pino-pretty',
  options: { colorize: true },
});

const log = pino({
  level: 'info',
}, transport);

export default log;
