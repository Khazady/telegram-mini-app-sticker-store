export const dictionary = {
  header: {
    searchPlaceholder: "Search packs",
  },
  buttons: {
    buyNow: "Buy Now",
    share: "Share",
  },
} as const;

export type Dictionary = typeof dictionary;
