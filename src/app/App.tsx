import "./styles/index.scss";
import { classNames } from 'shared/lib/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/Router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Navbar/>
      <div className={'page'}>
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <div className="page-content">
          <AppRouter/>
        </div>
      </div>
    </div>
  );
};

export default App;
