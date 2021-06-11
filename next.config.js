const withImages = require("next-images");
module.exports = withImages({
  target: "serverless",
  distDir: "out",
  webpack(config, options) {
    return config;
  },
  target: "serverless",
  distDir: "out",
  env: {
    GEO_LOCATION_API: process.env.NEXT_PUBLIC_GEO_LOCATION_API,
  },
});
