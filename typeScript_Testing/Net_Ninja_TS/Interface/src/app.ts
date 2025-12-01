//Interface

interface Author {
    name : string,
    avatar: string
}

const authorOne : Author = {name: 'morino',avatar:'/img/photo1.png'}

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost = {
    title: "my first Post",
    body: "Something interesting",
    tags:['gaming','swimming'],
    create_at: new Date (),
    author: authorOne
}

function createPost (post: Post): void {
    console.log(`Created post '${post.title}'by '${post.author.name}'`)
}
createPost(newPost);

// with array

let posts:Post[] = []

posts.push(newPost)