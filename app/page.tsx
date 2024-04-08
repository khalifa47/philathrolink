import Discover from "./components/landing/Discover";
import Hero from "./components/landing/Hero";
import SuccessStories from "./components/landing/SuccessStories";

export default function Home() {
  return (
    <main>
      <Hero />
      <Discover />
      <SuccessStories />
    </main>
  );
}
