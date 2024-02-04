// sanity.js
import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'akldf27l',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token: import.meta.env.VITE_SANITY_TOKEN
})
export async function getHotels() {
  const posts = await client.fetch('*[_type == "hotel"]')
  return posts
}
// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}

export async function createPost(post) {
  const result = client.create(post)
  return result
}


export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({title})
  return result
}

export async function deleteDuplicateHotels() {
  // Fetch all hotels
  const hotels = await client.fetch('*[_type == "hotel"]');

  // Create a map to track duplicates by hotel name
  const hotelMap = new Map();

  hotels.forEach(hotel => {
    const hotelName = hotel.name.toLowerCase(); // Assuming 'name' is the field to check for duplicates
    if (hotelMap.has(hotelName)) {
      hotelMap.get(hotelName).push(hotel._id);
    } else {
      hotelMap.set(hotelName, [hotel._id]);
    }
  });

  // Now, go through the map and identify duplicates (more than one ID per name)
  const duplicates = [];
  for (const [name, ids] of hotelMap.entries()) {
    if (ids.length > 1) {
      // Skip the first ID (keep one, remove duplicates)
      duplicates.push(...ids.slice(1));
    }
  }

  // Delete duplicates
  const transaction = duplicates.reduce(
    (tx, id) => tx.delete(id),
    client.transaction()
  );

  try {
    const result = await transaction.commit();
    console.log('Deleted duplicates:', result);
    return result;
  } catch (error) {
    console.error('Failed to delete duplicates:', error);
    throw error;
  }
}
