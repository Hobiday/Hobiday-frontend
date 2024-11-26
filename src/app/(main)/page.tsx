import LoadingSpinner from "@/components/spinner";
import heart_pressed from "@/assets/icons/heart_pressed.svg";

export default function HomePage() {
  return (
    <section>
      <h2 className="font-bold text-2xl underline">Homepage</h2>
      <LoadingSpinner />
      {/* 뜨지 않음 */}
      <heart_pressed className="w-8 h-8" />
      {/* Unexpected token 에러 */}
      <img src={heart_pressed} alt="heart" className="w-8 h-8" />
    </section>
  );
}
