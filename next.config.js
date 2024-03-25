/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.facebook.com", "mc.yandex.ru"],
  },
  /*   eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }, */
};

module.exports = nextConfig;
