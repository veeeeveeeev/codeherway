export default async function getAllPosts() {
  const res = await fetch("https://codeherway.vercel.app/api/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
