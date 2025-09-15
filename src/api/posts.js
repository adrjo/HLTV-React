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
    removePostLocalStorage(post.id);
    savePostLocalStorage(post);
}

export function removePostLocalStorage(id) {
    let posts = getNewsFromStorage();
    posts = posts.filter(p => p.id != id);
    savePosts(posts);
    // todo: remove post comments
    //removePostComments(post.id);
}

function getAllLikes() {
    return JSON.parse(localStorage.getItem("likes")) || [];
}

export function setLikesStorage(articleId, amount) {
    let likes = getAllLikes().filter(like => like.articleId != articleId);

    let articleLikes = getLikeObj(articleId);
    articleLikes.amount = amount;
    likes.push(articleLikes);
    saveLikes(likes);
}

export function removeLikeObj(articleId) {
    let allLikes = getAllLikes() || [];
    allLikes.filter((l) => l.articleId != articleId);
    saveLikes(allLikes);
}

function saveLikes(likes) {
    localStorage.setItem("likes", JSON.stringify(likes));
}

export function getLikeObj(articleId) {
    const emptyObj = {
            articleId: articleId,
            amount: 0
        };
    let allLikes = getAllLikes() || [];
    if (allLikes.length == 0) {
        return emptyObj;
    }

    return allLikes.find(like => like.articleId == articleId) || emptyObj;
}

