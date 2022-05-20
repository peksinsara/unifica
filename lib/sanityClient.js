import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '64o8ql5u',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skjWbuIrkcJHawme7XyxQdmuZsU0ex8UYvGqqVWkWNu0MVzi4ne0rwXl3twpFJjDJH5rtytNzcPWzY9KHZg1KyEcie3HmmQWDaLaoFmOlvOVQlTCbVqv7MxTvlCKa9CnDFJZt1VXqedn4KOIwbAVOFG2Zgb6DXmNu9q756KBLcz3xof7fkDx',
  useCdn: false,
})
