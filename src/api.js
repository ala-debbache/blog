export async function getPosts(){
    let data = await fetch("https://powerful-ridge-32851.herokuapp.com/posts")
    .then((data)=>data.json());
    return data;
}

export async function getPostsByTag(tag){
    let data = await fetch(`https://powerful-ridge-32851.herokuapp.com/tags/${tag}`)
    .then((data)=>data.json());
    return data;
}


export async function getPost(id){
    let data = await fetch(`https://powerful-ridge-32851.herokuapp.com/posts/${id}`)
    .then((data)=>data.json());
    return data;
}

export async function createPost(post){
    const postCreated = await fetch("https://powerful-ridge-32851.herokuapp.com/posts",{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(post)
    }).then((data)=>data.json());
    return postCreated;
}