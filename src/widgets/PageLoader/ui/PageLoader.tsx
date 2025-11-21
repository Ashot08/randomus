import classes from './PageLoader.module.scss';
import { classNames } from 'shared/lib/classNames';
import { Spinner } from 'shared/ui/Spinner/Spinner';

interface IPageLoaderProps {
  className?: string;
}

export const PageLoader = ({className} : IPageLoaderProps) => {
  return (
    <div className={classNames(classes.pageLoader, className)}>
      <Spinner/>
    </div>
  );
};
