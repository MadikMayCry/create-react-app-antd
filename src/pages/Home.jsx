import React from "react";
import { HomeSlick, FeaturedCategories, HomeProducts } from "containers";
import { SideShops } from "components";

function Home() {
  return (
    <div>
      <HomeSlick />
      <div className="d-flex">
        <SideShops />
        <FeaturedCategories />
        <HomeProducts />
      </div>
    </div>
  );
}

export default Home;
