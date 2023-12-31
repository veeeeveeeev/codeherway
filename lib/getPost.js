export default async function getPost(id) {
  const res = await fetch(`${process.env.URL}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
