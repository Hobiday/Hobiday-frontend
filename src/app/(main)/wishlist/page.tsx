import { MainLayout } from "@/components/layout";

export default function WishlistPage() {
  const headerProps = {
    title: "위시",
    showBackButton: true,
    rightText: "저장",
    // onRightTextClick: () => {},
  };

  return <MainLayout headerProps={headerProps}>WishlistPage</MainLayout>;
}
