import classes from './ThemeSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import Logo from 'shared/assets/icons/theme.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface IThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({className}: IThemeSwitcherProps) => {
  const { toggleTheme} = useTheme();
  return (
    <Button
      onClick={toggleTheme}
      className={classNames(classes.themeSwitcher, className)}
      theme={ButtonTheme.CLEAR}
    >
      <Logo width={24} height={24} fill={"currentColor"} />
    </Button>
  );
};
