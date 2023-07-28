#!/usr/bin/env node

import colorize from 'json-colorizer';
import readline from 'readline';
import { program } from 'commander';

interface Override {
  value: string;
  hexColor: string;
}

program.option(
  '-o, --override <property>,<value>,<hex-color>',
  undefined,
  (option, acc) => {
    const [key, value, hexColor] = option.split(',');
    if (value === undefined || hexColor === undefined) {
      return acc;
    }
    return acc.set(
      key,
      {
        value,
        hexColor: hexColor.charAt(0) === '#' ? hexColor : '#' + hexColor,
      },
    );
  },
  new Map<string, Override>(),
)
  .parse();

const { override: overrides }: { override: Map<string, Override> } = program.opts();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', (plain) => {
  let nested: Record<string, any>;
  try {
    nested = JSON.parse(plain);
  } catch (_) {
    return;
  }

  let stringKey = '#7aa2f7';
  let stringLiteral = '#9dcc65';

  for (const [key, value] of Object.entries(nested)) {
    const override = overrides.get(key);
    if (override !== undefined && value === override.value) {
      stringKey = override.hexColor;
      stringLiteral = override.hexColor;
      break;
    }
  }

  const colorized = colorize(plain, {
    pretty: true,
    colors: {
      STRING_KEY: stringKey,
      STRING_LITERAL: stringLiteral,
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
