#!/usr/bin/env node

import colorize from 'json-colorizer';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (line) => {
  try {
    JSON.parse(line);
  } catch (_) {
    return;
  }
  const colorized = colorize(line, {
    pretty: true,
    colors: {
      STRING_KEY: '#7aa2f7',
      STRING_LITERAL: '#9dcc65',
      NUMBER_LITERAL: '#fd914e',
      BRACE: '#9abdf5',
      BRACKET: '#9abdf5',
      COLON: '#9abdf5',
      COMMA: '#9abdf5',
      BOOLEAN_LITERAL: '#9d7cd8',
      NULL_LITERAL: '#9d7cd8',
    },
  });
  process.stdout.write(colorized + '\n');
});

rl.once('close', () => {});
