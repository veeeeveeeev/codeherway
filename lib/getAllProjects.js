// export default async function getAllProjects() {
//   const res = await fetch("/api/projects", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return undefined;
//   }

//   return res.json();
// }
export default async function getAllProjects() {
  const res = await import("../app/api/projects/route");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await (await res.GET()).json();
}
