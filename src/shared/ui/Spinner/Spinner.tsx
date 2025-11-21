import classes from './Spinner.module.scss';
import { classNames } from 'shared/lib/classNames';
import { FC, useEffect } from 'react';

export enum SpinnerTheme {
  DEFAULT = 'default',
}

interface ISpinnerProps {
  className?: string;
  theme?: SpinnerTheme;
  [key: string]: any;
}

export const Spinner: FC<ISpinnerProps> = (props) => {
  const {
    className,
    children,
    theme = SpinnerTheme.DEFAULT,
    ...otherProps
  } = props;
  return (
    <span
      className={classNames(classes.spinner, className, classes[theme])}
      {...otherProps}
    >
      {children}
    </span>
  );
};

