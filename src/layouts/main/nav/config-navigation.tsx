// routes
import { PATH_DOCS, PATH_PAGE } from '../../../routes/paths';
// components
import { NavItemProps } from './types';

// ----------------------------------------------------------------------

const navConfig: NavItemProps[] = [
  {
    title: 'Home',
    path: PATH_PAGE.home,
  },
  {
    title: 'Registration',
    path: PATH_PAGE.registration,
    tooltipText: 'Coming Soon!',
    disable: true,
  },
  {
    title: 'Dashboard',
    path: PATH_PAGE.dashboard,
  },
  {
    title: 'Documentation',
    path: PATH_DOCS.root,
  },
];

export default navConfig;
