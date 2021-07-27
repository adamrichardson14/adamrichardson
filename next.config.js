module.exports = {
  images: {
    domains: ["images.unsplash.com", "upload.wikimedia.org", "i.ytimg.com", "media.graphcms.com"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("./lib/siteMap");
    }

    return config;
  },
};
