import { inferParserType, useQueryState } from "nuqs";

/**
 * Обертка над useQueryState из nuqs.
 * Берет parser по ключу и возвращает типизированное состояние query-параметра.
 */
export function useAppQueryState<
  Parsers extends Record<string, any>,
  Key extends keyof Parsers & string
>(parsers: Parsers, key: Key) {
  type Params = inferParserType<Parsers>;
  return useQueryState(key, parsers[key]) as ReturnType<
    typeof useQueryState<Params[Key]>
  >;
}
