import colorize from 'json-colorizer';

export type SourceKey = string;
export type SourceValue = string;
export type HexColor = string;
export type OverrideRuleKey = SourceKey;

export interface OverrideRuleValue {
  sourceValue: SourceValue;
  hexColor: HexColor;
}

export type OverrideRules = Map<OverrideRuleKey, OverrideRuleValue>;

export interface JlcOptions {
  override: OverrideRules;
  pretty: boolean;
  comma: boolean;
}

export type JsonColorizerColorToken = keyof NonNullable<
  NonNullable<
    Parameters<typeof colorize>[1]
  >['colors']
>;

export type JsonColorizerColor = {
  readonly [token in JsonColorizerColorToken]: string;
};

export type ColorOverrides = Pick<
  JsonColorizerColor, 'STRING_KEY' | 'STRING_LITERAL'
>;
