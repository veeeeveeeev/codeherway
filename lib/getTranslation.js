const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8d9f91c62fmsh28aebcf40c14211p1971f3jsnaf55657b3bc0",
    "X-RapidAPI-Host":
      "translated-mymemory---translation-memory.p.rapidapi.com",
  },
  cache: "no-store",
};

export default async function getTranslation(text) {
  const res = await fetch(
    `https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=en%7Cvi&q=${text}&mt=1&onlyprivate=0&de=a@d.c`,
    options
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  return result.responseData.translatedText;
}
