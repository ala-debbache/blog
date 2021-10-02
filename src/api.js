export async function getPosts(){
    let data = await fetch("https://powerful-ridge-32851.herokuapp.com/posts")
    .then((data)=>data.json());
    return data;
}

export async function getPost(id){
    let data = await fetch(`https://powerful-ridge-32851.herokuapp.com/posts/${id}`)
    .then((data)=>data.json());
    return data;
}