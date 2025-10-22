export const dictionary = {
  header: {
    searchPlaceholder: "Search packs",
  },
  buttons: {
    buyNow: "Buy Now",
    share: "Share",
  },
  carousel: {
    loading: "Loading packs…",
  },
} as const;

export type Dictionary = typeof dictionary;
