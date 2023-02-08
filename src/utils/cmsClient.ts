import { createClient } from 'next-sanity';

export const cmsClient = createClient({
  projectId: '0t0nxjh0',
  dataset: 'production',
  apiVersion: '2023-01-25',
  useCdn: false,
});
