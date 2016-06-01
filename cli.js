import chalk      from "chalk";
import readline   from 'readline';
import {log}      from './logger';

import config  from './config';
const {port, hostname} =  config;

export const resetTerminal = (url) => {
  process.stdout.write('\u001B[2J\u001B[0;0f');
  console.log(`Listening at: [ ${url} ]\n`);
};

const rl = readline.createInterface(process.stdin, process.stdout);

const commands = [
  {
    name: 'url',
    description: 'Show the full url of the application'
  },
  {
    name: 'port',
    description: 'Show on which port the server listens'
  },
  {
    name: 'clear',
    description: 'Clear the terminal window'
  },
  {
    name: 'help',
    description: 'Show the help'
  }
];

export default {

  init(customPort) {
    const appPort = customPort || port
    const url  = chalk.yellow.bold(`${hostname}:${appPort}`);

    // Reset the terminal window
    resetTerminal(url);

    //Listen to stdin input and handle action
    rl.on('line', function(line){
        switch(line.trim()) {
          case 'port':
            log(appPort);
            break;
          case 'url':
            log(url);
            break;
          case 'clear':
            resetTerminal();
            break;
          case 'help':
            console.log('\nThe following commands are available: \n');
            for(let i = 0; i < commands.length; i++) {
              console.log(` ${chalk.bold(commands[i].name)}: ${commands[i].description}`);
            }
        }
    });

  }
};
