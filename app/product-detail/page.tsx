import Product from "@/app/components/product";
import Reviews from "@/app/components/reviews";
import React, { Suspense } from "react";

function ProductDetailPage() {
  return (
    <div>
      <h1>Product Detail Page</h1>
      <Suspense fallback={<p>Loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}

export default ProductDetailPage;
