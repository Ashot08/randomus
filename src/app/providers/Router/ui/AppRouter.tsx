import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  return (
    <Routes>
      {routeConfig.map(({element, path}) => (<Route path={path} element={element} key={path} /> ))}
    </Routes>
  );
};

export default AppRouter;
