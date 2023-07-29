import { ColorOverrides, OverrideRules } from './jlc.types';

export function getOverrides(
  source: Record<string, any>,
  rules: OverrideRules,
): ColorOverrides | null {
  for (const [sourceKey, sourceValue] of Object.entries(source)) {
    const rule = rules.get(sourceKey);
    if (rule !== undefined && sourceValue === rule.sourceValue) {
      return {
        STRING_KEY: rule.hexColor,
        STRING_LITERAL: rule.hexColor,
      };
    }
  }
  return null;
}
