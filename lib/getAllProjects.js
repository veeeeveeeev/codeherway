export default async function getAllProjects() {
  const res = await fetch("https://codeherway.vercel.app/api/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
