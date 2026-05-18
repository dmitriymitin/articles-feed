import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";

import { cn } from "@/shared/lib/classNames/classNames";

import { getProfileReadonly } from "../../model/selectors/getProfileReadonly/getProfileReadonly";

import s from './EditableProfileCardViewWrapper.module.scss';

interface EditableProfileCardViewWrapperProps extends PropsWithChildren {

}

export const EditableProfileCardViewWrapper = (props: EditableProfileCardViewWrapperProps) => {
  const { children } = props

  const readonly = useSelector(getProfileReadonly)

  return (
    <div className={cn(s.Wrapper, { [s.editing]: !readonly })}>
      {children}
    </div>
  );
};
