export default async function getAllProjects() {
  const res = await fetch(`${process.env.URL}/api/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}
