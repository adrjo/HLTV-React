export function getNewsFromStorage() {
    return JSON.parse(localStorage.getItem("posts")) || [];
}

export function savePostLocalStorage(post) {
    let posts = getNewsFromStorage();
    posts.push(post);
    savePosts(posts);
}

function savePosts(posts) {
    localStorage.setItem("posts", JSON.stringify(posts));
}

export function updatePostLocalStorage(post) {
    removePostLocalStorage(post);
    savePostLocalStorage(post);
}

export function removePostLocalStorage(post) {
    let posts = getNewsFromStorage();
    posts = posts.filter(p => p.id != post.id);
    savePosts(posts);
    // todo: remove post comments
    //removePostComments(post.id);
}