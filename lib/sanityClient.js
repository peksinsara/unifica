import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'j7c03nvz',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skmHYSuRikwaLoCckw4yo1f3N4mIGhfBYWZwYrVEGVXkDdr2SYNuwRosWR1X1eUeDlv9b4ICP8LI5Fn8mmt3wQh5Osgnj0jfEkndWaopoHJ4nWYIJi8PpDJ8qm6IlaqIKodNbdM6RRB06PwRrZlKKi7zRD3dWQ0eAMOTehSkepjGpGD94a6m',
  useCdn: false,
})