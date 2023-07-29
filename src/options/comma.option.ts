import { Option } from 'commander';

export const commaOption = new Option(
  '-c, --comma',
  'add comma to the end of every JSON object',
)
  .default(false);
