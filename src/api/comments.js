
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