import { useTranslation } from 'react-i18next';

const Page404 = () => {
  const { t} = useTranslation('page404');
  return (
    <div>
      {t('Страница не найдена (404)')}
    </div>
  );
};

export default Page404;
