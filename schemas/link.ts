import { LinkIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'links',
  title: 'Links',
  icon: LinkIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navLink',
      title: 'Nav Link',
      type: 'boolean',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
    }),
    defineField({
      name: 'hoverColor',
      title: 'Hover Color',
      type: 'string',
    }),
    defineField({
      name: 'hoverBackgroundColor',
      title: 'Hover Background Color',
      type: 'string',
    }),
  ],
})
