export default async function fetcher(URL, setter = undefined) {
  let data = "error";
  try {
    const response = await fetch(URL);
    data = await response.json();
  } catch (error) {
    console.log("Fetch error:", error);
  }
  if (setter) {
    setter(data);
  }
  return data;
}
