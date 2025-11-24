import classes from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LogoIcon from 'shared/assets/icons/logo.svg';


interface INavbarProps {
  className?: string;
}

export const Navbar = ({className} : INavbarProps) => {
  return (
    <div className={classNames(classes.navbar, className)}>
      <div className={classNames('container')}>
        <div className={classNames(classes.navbarInner, className)}>
          <LogoIcon width={250} height={50} viewBox={"0 0 29700 6000"} />
          <ThemeSwitcher/>
        </div>
      </div>
    </div>
  );
};

