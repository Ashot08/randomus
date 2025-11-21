import classes from './AppLink.module.scss';
import { classNames } from 'shared/lib/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

interface IAppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  [key: string]: any;
}
export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link to={to} className={classNames(classes.appLink, className, classes[theme])} {...otherProps}>
      {children}
    </Link>
  );
};

