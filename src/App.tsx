import { Suspense, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { SearchBar } from "@/components/molecules/SearchBar";
import { Carousel } from "@/components/organisms/Carousel";
import { Spinner } from "@/components/atoms/Spinner";
import { Layout } from "@/components/templates/Layout/Layout";
import { dictionary } from "@/lib/dictionary";
import { useTelegramWebApp } from "./hooks/useTelegramWebApp";
import { TonConnectButton } from "@tonconnect/ui-react";

export default function App() {
  const webpApp = useTelegramWebApp();
  const [query, setQuery] = useState("");

  const handleShareClick = () => {
    const openViaBotUrl = "https://t.me/tma_sticker_store_bot/dive_in";
    webpApp?.openTelegramLink(
      `https://t.me/share/url?url=${encodeURIComponent(openViaBotUrl)}&text=${encodeURIComponent(dictionary.shareText)}`,
    );
  };

  return (
    <Layout
      header={
        <SearchBar
          placeholder={dictionary.header.searchPlaceholder}
          value={query}
          onChange={setQuery}
        />
      }
      primary={[
        <Suspense fallback={<Spinner label={dictionary.carousel.loading} />}>
          <Carousel query={query} />
        </Suspense>,
        //TODO: placeholder for future content
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          TBD PLACEHOLDER
        </div>,
      ]}
      footer={[
        <TonConnectButton />,
        <Button key="share" variant="secondary" onClick={handleShareClick}>
          {dictionary.buttons.share}
        </Button>,
      ]}
    />
  );
}
