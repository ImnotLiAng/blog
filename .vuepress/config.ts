import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  head: [['link', { rel: 'icon', href: '/blog/logo.png' }]],
  title: "LiAng's blog",
  description: "Just playing around",
  base: '/blog/',
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "LiAng",
    authorAvatar: "/head.png",
    lastUpdatedText: "",
    navbar: [
      { text: "Home", link: "/" },
      { text: "Categories", link: "/categories/npm/1/" },
      { text: "Tags", link: "/tags/node.js/1/" },
    ],
  }),
  // debug: true,
});
