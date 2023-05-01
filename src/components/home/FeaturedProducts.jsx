import React from "react";
import SectionTitle from "../../widgets/SectionTitle";
import FeaturedCard from "../../widgets/FeaturedCard";

const FeaturedProducts = () => {
  return (
    <section>
      <SectionTitle text="Featured products" />
      <div className="container px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
