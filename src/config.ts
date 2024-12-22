import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Sutaai',
  subtitle: 'blog',
  lang: 'en',
  themeColor: {
    hue: 300,
    fixed: false,
  },
  banner: {
    enable: true,
    src: 'assets/images/banner.jpg',
    position: 'center',
    credit: {
      enable: true,
      text: 'Art by あすてろid',
      url: 'https://www.pixiv.net/en/users/2033916'
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 3               // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  ]
}

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.gif",
  name: "Sutaai",
  bio: "networks and sys admins in the making. kind of.",
  links: [
    {
      name: "links",
      icon: "fa6-solid:share-nodes",
      url: "https://t4t.one/",
    },
    {
      name: "steam",
      icon: "fa6-brands:steam",
      url: "https://steamcommunity.com/id/Sutaai/",
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "MIT",
  url: "https://opensource.org/license/MIT",
};
