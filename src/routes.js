import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import FormPage from './components/pages/FormPage';
import NotFound from './components/pages/NotFound';
import PanelLeft from './components/pages/PanelLeft';
import PanelRight from './components/pages/PanelRight';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeft,
  },
  {
    path: '/panel-right/',
    component: PanelRight,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '(.*)',
    component: NotFound,
  },
];
