import { getPacksPromise } from "@/lib/api/pack";
import { formatTonPrice } from "@/lib/utils/formatTonPrice";
import { use, useMemo } from "react";
import { Swiper, type SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./Carousel.module.css";
import TonLogo from "@/assets/ton-logo.svg?react";

const SLIDE_WIDTH = 300;

type CarouselProps = {
  query?: string;
};

const carouselConfig: SwiperProps = {
  loop: true,
  loopAdditionalSlides: 4,
  centeredSlides: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 12,
  slideToClickedSlide: true,
  speed: 450,
  autoplay: true,
};

export const Carousel = ({ query = "" }: CarouselProps) => {
  const packs = use(getPacksPromise);

  const filteredPacks = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return packs;

    return packs.filter((pack) =>
      pack.title.toLowerCase().includes(normalizedQuery),
    );
  }, [packs, query]);

  if (!filteredPacks.length) {
    return <div className={styles.state}>No packs match your search.</div>;
  }

  return (
    <Swiper {...carouselConfig} className={styles.carousel}>
      {filteredPacks.map((pack) => (
        <SwiperSlide key={pack.id} style={{ width: SLIDE_WIDTH }}>
          <article className={styles.card}>
            <img
              width={SLIDE_WIDTH}
              className={styles.cardBody}
              src={pack.image}
              alt={pack.title}
            />
            <h3 className={styles.title}>{pack.title}</h3>
            <div className={styles.price}>
              <span>{formatTonPrice(pack.priceTon)}</span>
              <TonLogo width={24} height={24} />
            </div>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
