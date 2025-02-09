import { Button } from "@/components/ui/button";
import React from "react";

export default function page() {
  return (
    <div className="relative">
      <div className="bg-gray-900 text-white"></div>
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold mb-6">Discover Amazing Products</h1>
          <p className="text-xl mb-8">
            Shop the latest trends with unbeatable prices and quality
          </p>
          <div className="space-x-4">
            <Button className="bg-white text-gray-900 hover:bg-gray-100">
              Shop Now
            </Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
