/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  env: {
    ALCHEMY_API_KEY: "PrdHvDC9SU7_y9GyCH3tG734SOMbwAkj",
    ALCHEMY_NETWORK: "ETH_SEPOLIA",
    NEXT_PUBLIC_ALCHEMY_NETWORK: "ETH_SEPOLIA",
    NEXT_PUBLIC_DEFAULT_CHAIN: "sepolia",
    CONNECT_KIT_PROJECT_ID: "1694a591eac2ab285be5adbbfff34913",
    SEPOLIA_PAYMASTER_POLICY_ID: "9303a6fe-8e3a-46d5-9078-66724e69fa11",
    NEXT_PUBLIC_USERBASE_APP_ID: "3d159aa5-037c-49a2-a5f6-1521f953c4b7",
    USERBASE_ACCESS_TOKEN: "Q6zQot5Z95eB5pCJ1bbzfqDRgCgTReRWTN+eoudeR9c=",
    SEPOLIA_ENTRYPOINT_ADDRESS: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    SEPOLIA_SIMPLE_ACCOUNT_FACTORY_ADDRESS:
      "0x9406cc6185a346906296840746125a0e44976454",
    SEPOLIA_NFT_ADDRESS: "0x5700D74F864CE224fC5D39a715A744f8d1964429",
  },
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false };
    return config;
  },
};