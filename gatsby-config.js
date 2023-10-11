module.exports = {
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
    'gatsby-plugin-netlify',
  ],
}
