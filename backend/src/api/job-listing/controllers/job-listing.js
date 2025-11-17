'use strict';

/**
 * job-listing controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::job-listing.job-listing');
