import { BannerGetStarted } from "@/app/Components/UI/Banners/bannerGetStarted";
import { Hero } from "./components/hero/Hero";
import { Reviews } from "./components/reviews/Reviews";
import { Price } from "./components/price/Price";
import { FAQ } from "./components/faq/FAQ";
import { Features } from "./components/features/Features";

export const HomePage = ({}) => {
  return (
    <>
      <Hero />
      <Features />
      <Reviews />
      <Price />
      <FAQ />
      <BannerGetStarted />
    </>
  );
};
