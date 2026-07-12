import type { inferParserType } from "nuqs";

type NuqsParser = {
  parse: (value: string) => unknown;
};
export function parseSearchParams<Parsers extends Record<string, NuqsParser>>(
  parsers: Parsers,
  search = window.location.search
): inferParserType<Parsers> {
  const searchParams = new URLSearchParams(search);

  return Object.fromEntries(
    Object.entries(parsers).map(([key, parser]) => [
      key,
      parser.parse(searchParams.get(key) ?? ""),
    ])
  ) as inferParserType<Parsers>;
}

// parseSearchParams(articlesPageSearchParams) при пагинации попробовать
