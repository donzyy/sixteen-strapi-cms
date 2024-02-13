module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','NB/Rs9gfTf1oqMa0/uzT0w=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT','H6ZRB5YTKJp4yLoS9x/y9Q=='),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','M+TWE0V+8wdrI15Lm3B2GQ=='),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});

/* apiToken: {
  salt: env('API_TOKEN_SALT'),
}, */