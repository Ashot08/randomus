import classes from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames';
import { AppRoutes, RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface INavbarProps {
  className?: string;
}

export const Navbar = ({className} : INavbarProps) => {
  return (
    <div className={classNames(classes.navbar, className)}>
      <AppLink to={RoutePath[AppRoutes.MAIN]}>HOME</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath[AppRoutes.PAGE_ONE]}>ONE</AppLink>
      <AppLink to={RoutePath[AppRoutes.PAGE_TWO]}>TWO</AppLink>
      <AppLink to={RoutePath[AppRoutes.PAGE_RANDOM_GENERATOR]}>Random</AppLink>
    </div>
  );
};

