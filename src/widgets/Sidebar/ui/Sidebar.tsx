import {cn} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {Button} from "shared/ui/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher";
import s from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

const _Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const cls = cn(
    s.Sidebar,
    {
      [s.collapsed]: collapsed
    },
    className
  )

  return (
    <aside data-testid="sidebar" className={cls}>
      <Button
        onClick={onToggle}
        className={s.collapseBtn}
        theme="backgroundInverted"
        size="l"
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};

export const Sidebar = _Sidebar
