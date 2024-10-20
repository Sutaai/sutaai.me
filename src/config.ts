import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "Sutaai",
  subtitle: "blog",
  lang: "en", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 145, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: "assets/images/banner.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true, // Display the credit text of the banner image
      text: "Art by あすてろid", // Credit text to be displayed
      url: "https://www.pixiv.net/en/users/2033916", // (Optional) URL link to the original artwork or artist's page
    },
  },
  favicon: [
    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "Sutaai",
  bio: "networks and sys admins in the making. kind of.",
  links: [
    {
      name: "links",
      icon: "fa6-solid:share-nodes",
      url: "https://sutaai.dev/",
    },
    {
      name: "steam", // Visit https://icones.js.org/ for icon codes
      icon: "fa6-brands:steam", // You will need to install the corresponding icon set if it's not already included
      url: "https://steamcommunity.com/id/Sutaai/", // `pnpm add @iconify-json/<icon-set-name>`
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "MIT",
  url: "https://opensource.org/license/MIT",
};
