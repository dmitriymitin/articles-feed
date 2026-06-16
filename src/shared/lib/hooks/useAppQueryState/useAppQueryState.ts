import {
  inferParserType,
  useQueryState,
} from 'nuqs'

export function useAppQueryState<
  Parsers extends Record<string, any>,
  Key extends keyof Parsers & string,
>(
  parsers: Parsers,
  key: Key,
) {
  type Params = inferParserType<Parsers>
  return useQueryState(
    key,
    parsers[key],
  ) as ReturnType<typeof useQueryState<Params[Key]>>
}
