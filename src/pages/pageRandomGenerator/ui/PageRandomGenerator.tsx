import classes from './PageRandomGenerator.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { RandomNumberGenerator } from 'widgets/RandomNumberGenerator';

interface IPageTwoProps {
  className?: string;
}

const PageRandomGenerator = ({className} : IPageTwoProps) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(classes.pageRandomGenerator, className)}>
      <div className={classNames('container')}>
        <RandomNumberGenerator />
      </div>
    </div>
  );
};
export default PageRandomGenerator;
