import fs from "fs";
import path from "path";
import NavInteractive from "./nav-interactive";
import HeroAnimatedLetters from "./hero-animated-letters";
import ProductCardsInteractive from "./product-cards-interactive";
import CarouselInteractive from "./carousel-interactive";
import FormInteractive from "./form-interactive";
import StoriesInteractive from "./stories-interactive";

export default function Home() {
  const filePath = path.join(process.cwd(), "public", "optimizely_page.html");
  const htmlContent = fs.readFileSync(filePath, "utf8");

  return (
    <>
      <div
        id="optimizely-root"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <HeroAnimatedLetters />
      <ProductCardsInteractive />
      <NavInteractive />
      <CarouselInteractive />
      <FormInteractive />
      <StoriesInteractive />
    </>
  );
}
