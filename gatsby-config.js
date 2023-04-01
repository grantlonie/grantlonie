module.exports = {
  siteMetadata: {
    title: `Grant Lonie`,
    description: `Freelance site for Grant Lonie`,
    image: `/icon.png`,
    siteUrl: `https://www.grantlonie.me`,
  },
  plugins: [
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        resetCSS: true,
        isUsingColorMode: true,
        isBaseProvider: false,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'static/icon.png',
      },
    },
    'gatsby-plugin-provide-react',
  ],
}
