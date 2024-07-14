import React from "react";
import Image from "next/image";
import tailwind from "../../assets/icons/tailwind.svg";


const Tailwind = () => {
  return (
      <Image
          src={tailwind}
          alt={"Tailwind"}
      />
  );
};

export default Tailwind;
