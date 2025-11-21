import classes from './PageTwo.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';

interface IPageTwoProps {
  className?: string;
}

const PageTwo = ({className} : IPageTwoProps) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(classes.pageTwo, className)}>
      {t('PageTwo')}
    </div>
  );
};
export default PageTwo;
