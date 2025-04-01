/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // Enables static export
  basePath: "/Janu_22_bday", // Use your GitHub repo name
  images: { unoptimized: true }, // Required for GitHub Pages
};

export default nextConfig;
