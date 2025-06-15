/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
async redirects() {
return [
{
source: '/:path*',
has: [{ type: 'host', value: 'wesspro.vercel.app' }],
destination: 'https://www.wesspro.ca/:path*',
permanent: true,
},
{
source: '/:path*',
has: [{ type: 'host', value: 'wesspro.ca' }],
destination: 'https://www.wesspro.ca/:path*',
permanent: true,
},
{
source: '/index.php',
destination: '/',
permanent: true,
},
];
},
};

export default nextConfig;