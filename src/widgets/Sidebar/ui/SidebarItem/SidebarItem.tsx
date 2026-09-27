import { useSelector } from 'react-redux';

import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Trans } from '@/shared/ui/redesigned/Translate';

import { cn } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';

import { getUserAuthData } from '@/entities/user';

import { SidebarItemType } from '../../model/types/sidebar';

import s from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { item, collapsed } = props;

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  const textNode = (
    <span className={s.link}>
      <Trans>{item.text}</Trans>
    </span>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <AppLink
          to={item.path}
          className={cn(s.itemRedesigned, {
            [s.collapsedRedesigned]: collapsed,
          })}
          activeClassName={s.active}
        >
          <Icon Svg={item.Icon} />
          {textNode}
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          theme="secondary"
          to={item.path}
          className={cn(s.item, {
            [s.collapsed]: collapsed,
          })}
        >
          <item.Icon className={s.icon} />
          {textNode}
        </AppLinkDeprecated>
      }
    />
  );
};
