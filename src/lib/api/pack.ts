export type Pack = {
  id: string;
  title: string;
  image: string | undefined;
  priceTon: number;
};

const BASE_URL = import.meta.env.BASE_URL;
const PACKS_ENDPOINT = `${BASE_URL}packs.json`;

export async function getPacks(): Promise<Pack[]> {
  const response = await fetch(PACKS_ENDPOINT);
  if (!response.ok) {
    throw new Error(`Failed to fetch sticker packs: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
