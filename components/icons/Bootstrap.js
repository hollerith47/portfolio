import React from "react";
import Image from "next/image";

const Bootstrap = () => {
  return (
      <Image
          layout="fill"
          src={"/icons/bootstrap.svg"}
          alt={"Bootstrap"}
      />
  );
};

export default Bootstrap;
