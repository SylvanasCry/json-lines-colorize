#!/usr/bin/env node

import { Command } from 'commander';
import colorize from 'json-colorizer';
import readline from 'readline';
import { JSON_COLORIZER_COLORS } from './jlc.constants';
import { getOverrides } from './jlc.functions';
import { JlcOptions } from './jlc.types';
import * as jlcOptions from './options';

const { override: overrideRules, pretty, comma } = new Command()
  .addOption(jlcOptions.commaOption)
  .addOption(jlcOptions.noPrettyOption)
  .addOption(jlcOptions.overrideOption)
  .parse()
  .opts<JlcOptions>();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.once('close', () => {});
rl.on('line', (plain) => {
  let source: Record<string, any>;
  try {
    source = JSON.parse(plain);
  } catch (_) {
    return;
  }

  const overrides = getOverrides(source, overrideRules);
  const colorized = colorize(plain, {
    pretty,
    colors: {
      ...JSON_COLORIZER_COLORS,
      ...(overrides === null ? {} : overrides),
    },
  });
  process.stdout.write(colorized + (comma ? ',' : '') + '\n');
});
