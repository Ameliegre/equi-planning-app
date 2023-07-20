/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    modularizeImports: {
        '@chakra-ui/icons/?(((\\w*)?/?)*)': {
            transform: '@chakra-ui/icons/{{ matches.[1] }}/{{member}}'
        }
    }
}