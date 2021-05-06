const withImages = require("next-images");
// module.exports = {
//     env: {
//         api: 'https://be.arva-shop.xyz',
//         // api_img: 'https://be.arva-shop.xyz',
//         // api: 'https://zwallets-backend.fwdev.online/api/v1',
//         // api_img: 'https://zwallets-backend.fwdev.online/'
//     },
// }

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  env: {
    api: "https://be.arva-shop.xyz",
    // api_img: 'https://be.arva-shop.xyz',
    // api: 'https://zwallets-backend.fwdev.online/api/v1',
    // api_img: 'https://zwallets-backend.fwdev.online/'
  },
});
