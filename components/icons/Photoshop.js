import React from "react";
import Image from "next/image";
import photoshop from "../../assets/icons/photoshop.svg";


const Photoshop = () => {
  return (
      <Image
          src={photoshop}
          alt={"PhotoShop"}
      />
  );
};

export default Photoshop;
