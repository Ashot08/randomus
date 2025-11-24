import "./styles/index.scss";
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Navbar/>
      <div className={'page'}>
        <div className="page-content">
          <AppRouter/>
        </div>
      </div>
    </div>
  );
};

export default App;
