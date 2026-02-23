import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})


// async function deleteAllEmails() {
//   try {
//     // GROQ query to fetch all email _id's
//     const emails = await sanity.fetch(`*[_type == "emails"]{_id}`);
    
//     // Delete all emails
//     const deletePromises = emails.map((email: { _id: any; }) => sanity.delete(email._id));
//     await Promise.all(deletePromises);

//     console.log('All emails deleted successfully!');
//   } catch (err) {
//     console.error('Error deleting emails:', err);
//   }
// }

// deleteAllEmails();
