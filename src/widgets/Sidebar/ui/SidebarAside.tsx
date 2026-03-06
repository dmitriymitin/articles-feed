import {cn} from "shared/lib/classNames/classNames";
import s from './Sidebar.module.scss';
import {Dispatch, HTMLAttributes, ReactNode, SetStateAction, useState} from "react";

interface SidebarAsideProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  children(options: { collapsed: boolean, setCollapsed: Dispatch<SetStateAction<boolean>> } ): ReactNode;
}

const _SidebarAside = (props: SidebarAsideProps) => {
  const { children, className, ...restProps } = props;
  const [collapsed, setCollapsed] = useState(false);

  const cls = cn(
    className,
    {
      [s.collapsed]: collapsed
    }
  )

  return (
    <aside {...restProps} className={cls}>
      {children({  collapsed, setCollapsed })}
    </aside>
  );
};

export const SidebarAside = _SidebarAside
