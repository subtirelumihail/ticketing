import chalk from "chalk";
import logger from "nano-logger";

export const log = logger("webpack");

export function buildValidLogger(s) {
  log(chalk.green(`✓ build is now valid`));
  log(`${chalk.yellow('∞')} build time: ${chalk.green(s)}`);
}

export function buildInvalidLogger() {
  log(chalk.red("✗ build is now invalid"));
}

function Logger() {}
Logger.prototype.apply = (compiler) => {
  compiler.plugin("invalid", buildInvalidLogger);
};

export default Logger;
