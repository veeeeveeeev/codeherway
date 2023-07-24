export default async function getAllPosts() {
  const res = await fetch("127.0.0.1:3000/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
