import dayjs from 'dayjs';
import pino from 'pino';

const log = pino({
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}`,
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
    },
  },
});

export default log;
