// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }: { strapi: any }) {
    try {
      // Find the public role
      const publicRole = await strapi
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (publicRole) {
        // Find existing permission for home-page find
        const existingPermission = await strapi
          .query('plugin::users-permissions.permission')
          .findOne({
            where: {
              action: 'api::home-page.home-page.find',
              role: publicRole.id,
            },
          });

        // If it doesn't exist, create it
        if (!existingPermission) {
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action: 'api::home-page.home-page.find',
              role: publicRole.id,
            },
          });
          console.log('✅ Granted public access to home-page API');
        }
      }
    } catch (error) {
      console.error('Failed to grant public access:', error);
    }
  },
};
