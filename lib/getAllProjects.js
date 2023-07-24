export default async function getAllProjects() {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}
