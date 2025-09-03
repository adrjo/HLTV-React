export async function apiFetchNews() {
  const response = await fetch("https://dummyjson.com/posts");

  const posts = await response.json();

  return posts.posts;
}