module.exports = {
  pathPrefix: '/m3-primary-program',
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "M3 2021 Primary Program",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
