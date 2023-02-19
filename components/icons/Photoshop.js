import React from "react";
import Image from "next/image";

const Photoshop = () => {
  return (
      <Image
          layout="fill"
          src={"/icons/photoshop.svg"}
          alt={"PhotoShop"}
      />
  );
};

export default Photoshop;
