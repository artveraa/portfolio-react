import { createClient } from '@sanity/client'

export default createClient({
   projectId: 'gw2s5tk8',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-03-25', // use a UTC date string
});