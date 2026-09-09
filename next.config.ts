import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /sobre foi mesclada em /trajetoria (conteúdo de Daniel + trajetória).
  async redirects() {
    return [
      {
        source: "/sobre",
        destination: "/trajetoria",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
