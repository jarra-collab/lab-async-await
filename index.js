// Write your code here!
async function fetchPosts() {
  const postList = document.getElementById("post-list");
  if (!postList) return;

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const post = posts[0];

  postList.innerHTML =
    "<h1>" + post.title + "</h1>" +
    "<p>" + post.body + "</p>";
}

fetchPosts();




