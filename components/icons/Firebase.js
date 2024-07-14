import React from "react";
import Image from "next/image";
import firebase from "../../assets/icons/firebase.svg";


export default function Firebase() {
  return (
      <Image
          style={{maxHeight: "120px", maxWidth: "150px"}}
          src={firebase}
          alt={"CSS"}
      />
  );
}
