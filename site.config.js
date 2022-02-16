module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: 'c811c01b7d824f5ba966f688ee37652b',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '老苗',
  domain: 'laomiao.site',
  author: '老苗',

  // open graph metadata (optional)
  description: '专注技术、持续学习',
  socialImageTitle: '潇洒哥老苗',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'laomiao_',
  github: 'miaogaolin',
  linkedin: '',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: "",

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: null,

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    '/tools': '3fcb411445e94944b0d6cea47b81b7d0'
  }
}
