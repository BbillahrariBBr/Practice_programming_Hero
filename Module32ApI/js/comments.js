function comments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(userComments) {
    const userCommentContainer = document.getElementById('comments-container');
    for (userComment of userComments) {
        const commentDiv = document.createElement('div');
        commentDiv.innerHTML = `
        <div>
        <p>id: ${userComment.id}</p>
        <p>name: ${userComment.name} </p>
        <p>mail: ${userComment.email} </p>
        <p>comment: ${userComment.body}</p>
        </div>
        `
        commentDiv.classList.add('post');
        userCommentContainer.appendChild(commentDiv)
        console.log(userComment);
    }
}
comments();