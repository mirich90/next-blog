const editorStyles = [
  {title: 'Normal', value: 'normal'},
  {title: 'Title 1', value: 'h2'},
  {title: 'Title 2', value: 'h3'},
  {title: 'Title 3', value: 'h4'},
  {title: 'Title 4', value: 'h5'},
  {title: 'Quote', value: 'blockquote'},
]

export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'header', title: 'Header'},
    {name: 'meta', title: 'Meta'},
  ],
  fields: [
    {
      name: 'meta_title',
      type: 'string',
      title: 'Meta title',
      group: 'meta',
      validation: (Rule) => Rule.required(),
    },
    {name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required()},
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      group: 'header',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body content',
      type: 'array',
      group: 'content',
      validation: (Rule) => Rule.required(),
      of: [{type: 'block', styles: editorStyles}, {type: 'image'}],
    },
    {
      name: 'publishedDate',
      type: 'date',
      title: 'Published date',
      group: 'header',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      group: 'header',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      group: 'header',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
