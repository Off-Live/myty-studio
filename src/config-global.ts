// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export const HOST_API_KEY = process.env.HOST_API_KEY || '';
export const HOST_BASE_URL = process.env.NEXT_PUBLIC_NEXTAUTH_URL || '';

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 88,
  H_DASHBOARD_DESKTOP: 92,
  H_DASHBOARD_DESKTOP_OFFSET: 92 - 32,
};

export const NAV = {
  W_BASE: 260,
  W_DASHBOARD: 280,
  W_DASHBOARD_MINI: 88,
  //
  H_DASHBOARD_ITEM: 48,
  H_DASHBOARD_ITEM_SUB: 36,
  //
  H_DASHBOARD_ITEM_HORIZONTAL: 32,
};

export const ICON = {
  NAV_ITEM: 24,
  NAV_ITEM_HORIZONTAL: 22,
  NAV_ITEM_MINI: 22,
};

export const SOCIALS = [
  {
    value: 'twitter',
    name: 'Twitter',
    icon: 'assets/icons/social-media/twitter.svg',
    path: 'https://twitter.com/myty_official?s=20',
  },
  {
    value: 'discord',
    name: 'Discord',
    icon: 'assets/icons/social-media/discord-block.svg',
    path: 'https://discord.com/invite/myty',
  },
  {
    value: 'mirror-xyz',
    name: 'Mirror.xyz',
    icon: 'assets/icons/social-media/mirror-xyz.svg',
    path: 'https://mirror.xyz/mytyavatar.eth',
  },
  {
    value: 'gitbook',
    name: 'Gitbook',
    icon: 'assets/icons/social-media/gitbook.svg',
    path: 'https://myty.gitbook.io',
  },
];
