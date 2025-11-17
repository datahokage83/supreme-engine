import type { Schema, Attribute } from '@strapi/strapi';

export interface DescriptionDesc extends Schema.Component {
  collectionName: 'components_description_descs';
  info: {
    displayName: 'desc';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    desc: Attribute.Text & Attribute.Required;
  };
}

export interface DescriptionDescription extends Schema.Component {
  collectionName: 'components_description_descriptions';
  info: {
    displayName: 'description';
    icon: 'bulletList';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'description.desc': DescriptionDesc;
      'description.description': DescriptionDescription;
    }
  }
}
