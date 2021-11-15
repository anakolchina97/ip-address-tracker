export async function getAddress(id = '8.8.8.8') {
  const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_uStFWEsLdl90VQNx5ajAggVW9q7rR&ipAddress=${id}`)
  return await response.json();
}
