export default async function increaseView(id) {
  const res = await fetch(`${process.env.URL}/api/posts`, {
    method: "PUT",
    body: {
      _id: id,
    },
  });

  if (!res.ok) {
    return notFound();
  }

  console.log(res.json());
  return res.json();
}
