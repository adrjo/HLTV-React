
/*
  fetch random comments
  returned data is in the following format:
  [
    "id":1,
    "body":"This is some awesome thinking!",
    "postId":242,
    "likes":3,
    "user": {
      "id":105,
      "username":"emmac",
      "fullName":"Emma Wilson"
    }
  ]
*/
export async function apiFetchComments(amtComments) {
  const response = await fetch(`https://dummyjson.com/comments?limit=${amtComments}&select=body,postId,user`);

  const comments = await response.json();
  return comments.comments;
}

export async function fetchRandomArticles() {
  const response = await fetch("https://gist.githubusercontent.com/adrjo/e25720ae487da58c4613b1f442095d96/raw/8b2f31efcb6c44b51c379846e8477acea215fe5c/hltv.json");

  const articles = await response.json();
  return articles;
}