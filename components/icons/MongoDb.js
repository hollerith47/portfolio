import React from "react";
import Image from "next/image";
import mongodb from "../../assets/icons/mongodb.svg";


const MongoDb = () => {
  return (
      <Image
          src={mongodb}
          alt={"MongoDB"}
      />
  );
};

export default MongoDb;
