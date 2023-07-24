export default async function getPost(id) {
  const res = await fetch(`127.0.0.1:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
