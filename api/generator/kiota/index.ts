import { AnonymousAuthenticationProvider } from '@microsoft/kiota-abstractions';
import { FetchRequestAdapter } from '@microsoft/kiota-http-fetchlibrary';
import { createApiClient } from './client/apiClient';
import { Pet } from './client/models';

// API requires no authentication, so use the anonymous
// authentication provider
const authProvider = new AnonymousAuthenticationProvider();
// Create request adapter using the fetch-based implementation
const adapter = new FetchRequestAdapter(authProvider);
// Create the API client
const client =createApiClient(adapter);

async function main(): Promise<void> {
  try {
    // GET /posts
    const allPosts = await client.pets.get();
    console.log(`Retrieved ${allPosts?.getValue()} posts.`);

    // // GET /posts/{id}
    // const specificPostId = 5;
    // const specificPost = await client.posts.byPostId(specificPostId).get();
    // console.log(`Retrieved post - ID: ${specificPost?.id}, Title: ${specificPost?.title}, Body: ${specificPost?.body}`);

    // // POST /posts
    // const newPost: Post = {
    //   userId: 42,
    //   title: 'Testing Kiota-generated API client',
    //   body: 'Hello world!',
    // };

    // const createdPost = await client.posts.post(newPost);
    // console.log(`Created new post with ID: ${createdPost?.id}`);

    // // PATCH /posts/{id}
    // const update: Post = {
    //   // Only update title
    //   title: 'Updated title',
    // };

    // const updatedPost = await client.posts.byPostId(specificPostId).patch(update);
    // console.log(`Updated post - ID: ${updatedPost?.id}, Title: ${updatedPost?.title}, Body: ${updatedPost?.body}`);

    // // DELETE /posts/{id}
    // await client.posts.byPostId(specificPostId).delete();
  } catch (err) {
    console.log(err);
  }
}

main();