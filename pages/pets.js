// import Image from "next/image";
import React from "react";
import img from "../public/1.jpg";

function PetsPage() {
  return (
    <div>
      {/* <Image src={img} alt="pet" placeholder="blur" width="280" height="420" /> */}
      <img src={img} alt="pet" width="280" height="420" />

      {["1", "2", "3", "4", "5"].map((path) => {
        return (
          <div key={path}>
            {/* <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" /> */}
            <img src={`/${path}.jpg`} alt="pet" width="280" height="420" />
          </div>
        );
      })}
    </div>
  );
}

export default PetsPage;
