"use client";

import Button from "@/components/commons/button";
import LoadingSpinner from "@/components/commons/spinner";

export default function HomePage() {
  return (
    <section>
      <h2 className="font-bold text-2xl underline">Homepage</h2>
      <LoadingSpinner />
      {/* Button 테스트 */}
      <div className="space-y-4 mt-6">
        <Button variant="primary" size="sm" type="button" onClick={() => alert("Small Button Clicked!")}>
          Small Button
        </Button>
        <Button variant="primary" size="md">
          Medium Button
        </Button>
        <Button variant="primary" size="lg" className="bg-blue-500 hover:bg-blue-600">
          Large Button
        </Button>
        <Button variant="primary" size="md" disabled>
          Disabled Button
        </Button>
        <div className="bg-gray-200 w-50 h-50">hi</div>
        <Button variant="primary" size="md" fullWidth>
          Full-Width Button
        </Button>
      </div>
    </section>
  );
}
