import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'hotel',
  title: 'Hotel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'city',
      type: 'string',
    }),
    defineField({
      name: 'address',
      type: 'string',
    }),
    defineField({
      name: 'distance',
      type: 'string',
    }),
    defineField({
      name: 'photos',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'desc',
      type: 'text',
    }),
    defineField({
      name: 'rating',
      type: 'number',
    }),
    defineField({
      name: 'rooms',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'room' }] }],
    }),
    defineField({
      name: 'cheapestPrice',
      type: 'number',
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo.page',
      group: 'seo',
    }),
  ],
  groups: [
    {
      name: 'theme',
      title: 'Theme',
    },
    {
      default: true,
      name: 'editorial',
      title: 'Editorial',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  preview: {
    select: {
      active: 'active',
      seoImage: 'seo.image',
      title: 'title',
    },
    prepare(selection) {
      const { seoImage, title } = selection;

      return {
        media: seoImage,
        title,
      };
    },
  },
});
