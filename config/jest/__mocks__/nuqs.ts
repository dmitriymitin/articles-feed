export const parseAsString = {
  withDefault(defaultValue: string) {
    return {
      parse(value: string) {
        return value || defaultValue
      },
    }
  },
}
export function parseAsStringEnum<T extends string>(values: T[]) {
  return {
    withDefault(defaultValue: T) {
      return {
        parse(value: string) {
          return values.includes(value as T)
            ? (value as T)
            : defaultValue
        },
      }
    },
  }
}
