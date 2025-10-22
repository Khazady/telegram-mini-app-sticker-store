export type Pack = {
  id: string;
  title: string;
  image: string | undefined;
  priceTon: number;
};

const BASE_URL = import.meta.env.BASE_URL;
const PACKS_ENDPOINT = `${BASE_URL}packs.json`;

type GetPacksOptions = {
  signal?: AbortSignal;
};

export async function getPacks(options: GetPacksOptions = {}): Promise<Pack[]> {
  const { signal } = options;
  const response = await fetch(PACKS_ENDPOINT, { signal });
  if (!response.ok) {
    throw new Error(`Failed to fetch sticker packs: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
