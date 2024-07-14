import Image from "next/image";
import laravel from "../../assets/icons/laravel.svg";

const Laravel = () => {
    return (
        <Image
            style={{maxHeight: "120px", maxWidth: "150px"}}
            src={laravel}
            alt={"JavaScript"}
        />
    );
};

export default Laravel;