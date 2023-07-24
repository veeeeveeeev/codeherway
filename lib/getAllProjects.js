export default async function getAllProjects() {
  const res = await fetch("http://127.0.0.1:3000/api/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}
