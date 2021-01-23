import React, { useState } from "react";
import { ItemCategory, MainTitle } from "components";
import styled from "styled-components";
import { v4 as uuidV4 } from "uuid";

const fakeData = [
  {
    name: "Женщинам",
    img: "woman.png",
    id: uuidV4(),
  },
  {
    name: "Женщинам",
    img: "woman.png",
    id: uuidV4(),
  },
  {
    name: "Женщинам",
    img: "woman.png",
    id: uuidV4(),
  },
  {
    name: "Женщинам",
    img: "woman.png",
    id: uuidV4(),
  },
  {
    name: "Женщинам",
    img: "woman.png",
    id: uuidV4(),
  },
  {
    name: "Женщинам",
    img: "woman.png",
    id: uuidV4(),
  },
  {
    name: "Женщинам",
    img: "woman.png",
    id: uuidV4(),
  },
];

function FeaturedCategories({ ...rest }) {
  let [categories, setCategories] = useState(fakeData);
  return (
    <div style={{ marginLeft: 40 }}>
      <MainTitle>Вам это понравится</MainTitle>
      <Wrapper className="d-flex" {...rest}>
        {categories.map((category) => (
          <ItemCategory category={category} />
        ))}
      </Wrapper>
    </div>
  );
}

export default FeaturedCategories;

let Wrapper = styled.div`
  flex-wrap: wrap;
`;

// function FeaturedCategories() {
//   return (
//     <div>
//       <Categories categories={categories} style={{ marginLeft: 40 }} />;
//     </div>
//   );
// }

// export default FeaturedCategories;
