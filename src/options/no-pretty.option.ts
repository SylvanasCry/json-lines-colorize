import { Option } from 'commander';

export const noPrettyOption = new Option(
  '-n, --no-pretty',
  'disable pretty-print JSON objects',
);
