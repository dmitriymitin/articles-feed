import {cn} from "./classNames";

const className = 'className';
const className2 = 'className2';
const className3 = 'className3';
const className4 = 'className4';
const className5 = 'className5';
const className6 = 'className6';


describe('classNames', () => {
  test('with only first param', () => {
    const actual = cn(className)
    const expected = className

    expect(actual).toBe(expected)
  })

  test('with additional class', () => {
    const actual = cn(className, className2, className3)
    const expected = [className, className2, className3].join(' ')

    expect(actual).toBe(expected)
  })

  test('with mods true', () => {
    const actual = cn(className, { [className2]: true } )
    const expected = [className, className2].join(' ')

    expect(actual).toBe(expected)
  })

  test('with mods false', () => {
    const actual = cn(className, { [className2]: false } )
    const expected = [className].join(' ')

    expect(actual).toBe(expected)
  })

  test('with mods undefined', () => {
    const actual = cn(className, { [className2]: undefined  } )
    const expected = [className].join(' ')

    expect(actual).toBe(expected)
  })

  test('with mods not boolean', () => {
    const actual = cn(className, { [className2]: 0 as any, [className3]: 'true' as any } )
    const expected = [className, className3].join(' ')

    expect(actual).toBe(expected)
  })

  test('with big classNames', () => {
    const actual = cn(
      className,
      className2,
      className3,
      {
        [className4]: false,
        [className5]: true,
        [className6]: undefined,
      },
    )
    const expected = [className, className2, className3, className5].join(' ')

    expect(actual).toBe(expected)
  })
})
