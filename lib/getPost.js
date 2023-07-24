// export default async function getPost(id) {
//   const res = await fetch(`/api/posts/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     return notFound();
//   }

//   return res.json();
// }
export default async function getPost() {
  const res = await import("../app/api/posts/[id]/route");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return await (await res.GET()).json();
}
