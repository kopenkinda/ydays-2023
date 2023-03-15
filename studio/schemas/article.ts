import { defineField, defineType } from 'sanity';
import accessibleImage from './objects/accessible-image';

const articleSchema = defineType({
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'string',
      title: 'Slug',
    }),
    defineField({
      name: 'mainImage',
      type: accessibleImage.name,
      title: 'Main image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [
        {
          type: 'block',
        },
        {
          type: accessibleImage.name,
        },
      ],
    }),
  ],
});

export default articleSchema;
