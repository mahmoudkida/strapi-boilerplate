'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // we listen to lifecycle events
    strapi.db.lifecycles.subscribe({
      models: ["kids-branch-visit::kids-branch-visit"], //only listen to events for this model
      async beforeUpdate(event) {
        const { params, data } = event;
  
        // Check if `active_visit` is being updated to true
        if (data.active_visit === true) {
          // Fetch all entries that are not the current one and have `active_visit` set to true
          const activeVisits = await strapi.entityService.findMany('api::kids-branch-visit.kids-branch-visit', {
            filters: {
              id: { $ne: params.where.id },
              active_visit: true,
            },
          });
  
          // Loop through all active visits and set them to false
          for (const visit of activeVisits) {
            await strapi.entityService.update('api::kids-branch-visit.kids-branch-visit', visit.id, {
              data: { active_visit: false },
            });
          }
        }
      },
    });
  },
};