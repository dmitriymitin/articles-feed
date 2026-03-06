export type Mods = Record<string, boolean | string | undefined>;
type className = string | Record<string, boolean | undefined> | null | undefined;

export const cn = (...classes: className[]): string => {
  let result: string[] = []

  classes.forEach(value => {
    if (!value) {
      return
    }

    if (typeof value === 'string') {
      result.push(value)
    }

    if (typeof value === 'object') {
      Object.entries(value).forEach(([key, value]) => {
        if (value) {
          result.push(key);
        }
      });
    }
  })

  return result.join(' ')
}
