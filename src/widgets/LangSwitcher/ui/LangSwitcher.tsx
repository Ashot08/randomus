import classes from './LangSwitcher.module.scss';
import { classNames } from 'shared/lib/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface ILangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({className} : ILangSwitcherProps) => {
  const { t, i18n} = useTranslation();
  const handleSwitchLang = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  }
  return (
    <div className={classNames(classes.langSwitcher, className)}>
      <div>{t('Текущий язык')}: {i18n.language}</div>
      <Button onClick={handleSwitchLang}>{t('Переключить')}</Button>
    </div>
  );
};

