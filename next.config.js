/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e.rpp-noticias.io'
      },
      {
        protocol: 'https',
        hostname: 'resizer.glanacion.com'
      },
      {
        protocol: 'https',
        hostname: 'imagenes.elpais.com'
      },
      {
        protocol: 'https',
        hostname: 'www.politicaexterior.com'
      }
    ]
  }
};

module.exports = nextConfig;
