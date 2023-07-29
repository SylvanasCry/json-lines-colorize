import { Option } from 'commander';
import { BadFormedOptionException } from '../exceptions/bad-formed-option.exception';
import { OverrideRules } from '../jlc.types';

function parser(value: string, previous: OverrideRules): OverrideRules {
  if (!/^.+,.+,#?[0-9a-f]{6}$/i.test(value)) {
    throw new BadFormedOptionException('-o, --override', value);
  }
  const [sourceKey, sourceValue, hexColor] = value.split(',');
  return previous.set(sourceKey, {
    sourceValue,
    hexColor: hexColor.charAt(0) === '#'
      ? hexColor
      : '#' + hexColor,
  });
}

export const overrideOption = new Option(
  '-o, --override <property>,<value>,<hex_color>',
  'replaces property name and string literal ' +
  'colors with given `hex_color` if object has `property` with `value`',
)
  .argParser(parser)
  .default(new Map());

// eslint-disable-next-line no-underscore-dangle
export const _parser = parser; // for test suit only
