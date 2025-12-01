"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorOne = { name: 'morino', avatar: '/img/photo1.png' };
const newPost = {
    title: "my first Post",
    body: "Something interesting",
    tags: ['gaming', 'swimming'],
    create_at: new Date(),
    author: authorOne
};
function createPost(post) {
    console.log(`Created post '${post.title}'by '${post.author.name}'`);
}
createPost(newPost);
// with array
let posts = [];
posts.push(newPost);
//# sourceMappingURL=app.js.map