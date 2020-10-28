const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? 'https://mcodex.dev/nextjs-pokedex-typescript' : '',
  hostname: 'https://pokeres.bastionbot.org/images/pokemon/',
};
