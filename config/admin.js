module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7914b1359a8e7a68c0e231010378386d'),
  },
});
