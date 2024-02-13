/* module.exports = () => ({}); */
/* module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook: "https://api.vercel.com/v1/integrations/deploy/prj_SkpHPOwZW6K0WQgBZ1n83zMabKk6/5REkk4waoo",
        apiToken: "FAX9VK0wP6v1FJtDltjNsc3j",
        appFilter: "sixteen-strapi",
        teamFilter: "your-team-id-on-vercel",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  }); */

  module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
        apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
        appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });
  