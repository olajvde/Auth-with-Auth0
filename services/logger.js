const logger = require("pino");
const dayjs = require("dayjs");
const colorette = require("colorette");

module.exports.log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: colorette.isColorSupported,
    },
  },
  base: {
    pid: false,
  },
  timestamp: () => `"time": "${dayjs().format()}"`,
});
