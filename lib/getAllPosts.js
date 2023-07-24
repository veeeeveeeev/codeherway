// export default async function getAllPosts() {
//   const res = await fetch("/api/posts", {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
export default async function getAllPosts() {
  const res = await import("../app/api/posts/route");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await (await res.GET()).json();
}
