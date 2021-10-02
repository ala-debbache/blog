export async function getPosts(){
    let data = await fetch("http://localhost:8080/posts")
    .then((data)=>data.json());
    return data;
}

export async function getPost(id){
    let data = await fetch(`http://localhost:8080/posts/${id}`)
    .then((data)=>data.json());
    return data;
}