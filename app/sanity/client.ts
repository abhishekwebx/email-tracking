// import { createClient } from "@sanity/client";

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: "production",
//   apiVersion: "v2026-01-28",
//   token: process.env.SANITY_API_TOKEN,
//   useCdn: false,
// });

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false, // correct when using token
});

// export const client = createClient({
//   projectId: 'lgzekbmp',
//   dataset: "production",
//   apiVersion: "v2026-01-28",
//   token: 'skDy1neK31eH3iQCoqGowuHV7m4MGnKVNB5y7yDft8e2rSYm4wS4djmgYFcYpNfqUOMhj677Bw3AfSbLkdrvVmO1zaUAQlQh1TWUVluuifcd4Twa8J9sFRTsrWxKzlxLXgodmLj6GGXq0hX3okxz4Mdr6tAbciDAHnaUMbdD9weCygJDNonY',
//   useCdn: true,
// });
