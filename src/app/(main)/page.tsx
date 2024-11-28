import LoadingSpinner from "@/components/spinner";
import HomeDefault from "@/assets/icons/home-default.svg";

export default function HomePage() {
  return (
    <section>
      <h2 className="font-bold text-2xl underline">Homepage</h2>
      <LoadingSpinner />

      <HomeDefault />
      <HomeDefault className="fill-blue-300" />
    </section>
  );
}
