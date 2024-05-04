"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const kiota_abstractions_1 = require("@microsoft/kiota-abstractions");
const kiota_http_fetchlibrary_1 = require("@microsoft/kiota-http-fetchlibrary");
const apiClient_1 = require("./client/apiClient");
// API requires no authentication, so use the anonymous
// authentication provider
const authProvider = new kiota_abstractions_1.AnonymousAuthenticationProvider();
// Create request adapter using the fetch-based implementation
const adapter = new kiota_http_fetchlibrary_1.FetchRequestAdapter(authProvider);
// Create the API client
const client = (0, apiClient_1.createApiClient)(adapter);
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // GET /posts
            const allPosts = yield client.pets.get();
            console.log(`Retrieved ${allPosts === null || allPosts === void 0 ? void 0 : allPosts.length} posts.`);
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
        }
        catch (err) {
            console.log(err);
        }
    });
}
main();
