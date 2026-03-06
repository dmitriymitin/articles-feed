import {ComponentType} from "react";

/**
 * Получить пропсы компонента
 * @example
 * ```ts
 * import { Checkbox } from ''
 * import type { GetProps } from '';
 *
 * type CheckboxGroupProps = GetProps<typeof Checkbox.Group>
 * ```
 */
export type GetProps<T extends ComponentType<any> | object> =
  T extends ComponentType<infer P> ? P : T extends object ? T : never

/**
 * Получить пропс компонента по имени компонента
 * @example
 * ```ts
 * import { Select } from '';
 * import type { GetProp, SelectProps } from '';
 *
 * type SelectOption1 = GetProp<SelectProps, 'options'>[number];
 * // or
 * type SelectOption2 = GetProp<typeof Select, 'options'>[number];
 *
 * const onChange: GetProp<typeof Select, 'onChange'> = (value, option) => {
 *  // Do something
 * };
 * ```
 */
export type GetProp<T extends ComponentType<any> | object, PropName extends keyof GetProps<T>> = NonNullable<
  GetProps<T>[PropName]
>
