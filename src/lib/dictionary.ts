export const dictionary = {
  shareText: "Try Sticker Store! with me 🌝",
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
