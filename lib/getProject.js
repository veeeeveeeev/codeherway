export default async function getProject(id) {
  const res = await fetch(`${process.env.URL}/api/projects/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
