import classes from './Button.module.scss';
import { classNames } from 'shared/lib/classNames';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINED = 'outlined',
  PRIMARY_BUTTON = 'primary',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
  theme?: ButtonTheme;
  [key: string]: any;
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY_BUTTON,
    ...otherProps
  } = props;
  return (
    <button
      className={classNames(classes.button, className, classes[theme])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

