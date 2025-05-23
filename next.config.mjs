/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Outputs a Single-Page Application (SPA)
  distDir: 'build',
  images: {
    domains: ['www.agh.edu.pl'],
  },
};

export default nextConfig;
