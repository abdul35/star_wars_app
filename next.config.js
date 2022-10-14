/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = {
	images: {
		domains: ["vignette.wikia.nocookie.net"],
	},
};
