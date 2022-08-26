function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(posts) {
    const postContainer = document.getElementById('post-cotainer');

    for (post of posts) {

        const div = document.createElement('div');
        //add css using  js
        div.classList.add('post');
        div.innerHTML = `
        <h4>User-${post.id}</h4>
        <h5>${post.title}</h5>
        <p>${post.body}</p>
        `;
        postContainer.appendChild(div)
        console.log(post.body);
    }
}
loadPost()