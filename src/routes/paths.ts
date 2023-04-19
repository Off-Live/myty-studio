// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  register: path(ROOTS_AUTH, '/register'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
  login: path(ROOTS_AUTH, '/login'),
};

export const PATH_PAGE = {
  page403: '/403',
  page404: '/404',
  page500: '/500',
  faqs: '/',
  home: '/',
  registration: '/registration',
  dashboard: '/dashboard',
  documentation: '/documentation',
  avatarviewer: 'https://viewer.myty.space/',
};

export const PATH_DOCS = {
  root: 'https://myty.gitbook.io/myty-kit/before-you-begin/gm-myty',
  changelog: 'https://github.com/Off-Live/myty-kit/releases',
};
