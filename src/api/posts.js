export function getNewsFromStorage() {
    return JSON.parse(localStorage.getItem("posts")) || [];
}

export function savePost(post) {
    const posts = getNewsFromStorage();
    posts.push(post);
    savePosts(posts);
}

function savePosts(posts) {
    localStorage.setItem("posts", JSON.stringify(posts));
}