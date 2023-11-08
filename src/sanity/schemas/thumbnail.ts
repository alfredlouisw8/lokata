import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'thumbnail',
  title: 'Thumbnail',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'desktopImages',
      title: 'desktopImages',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'mobileImages',
      title: 'mobileImages',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
