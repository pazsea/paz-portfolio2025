module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frkkedednnwnuuhenogp.supabase.co",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "newdomain.com", // Added new domain
      },
      {
        protocol: "https",
        hostname: "x.com",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
};
