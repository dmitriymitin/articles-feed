import { ComponentType, FC, PropsWithChildren, ReactNode } from "react";
import { GetProps } from "@/shared/types/getProps";
import { Trans, TransProps } from "@/shared/ui/Translate";

type Props = Pick<TransProps, "ns"> & PropsWithChildren;

export const withChildrenTranslation = <T extends ComponentType<any> | object>(
  WrappedComponent: T
): FC<GetProps<T> & Props> => {
  return (props: Props) => {
    const { children, ns, ...restProps } = props;

    const translatedChildren: ReactNode =
      typeof children === "string" ? (
        // @ts-ignore
        <Trans ns={ns}>{children}</Trans>
      ) : (
        children
      );

    return (
      // @ts-ignore
      <WrappedComponent {...restProps}>{translatedChildren}</WrappedComponent>
    );
  };
};
