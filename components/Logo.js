import Image from "next/image";
import favicon from "../assets/Htech_favicon.svg";

const Logo = () => {
    return (
        <>
            <div className="z-50 w-9 sm:w-12 h-9 sm:h-12 flex items-center">
                <Image src={favicon} alt="H tech"/>
            </div>
            {/* Text */}
            <div className="flex items-center ml-4">
                <p className="text-lg font-semibold font-display tracking-tight dark:text-white text-darker mb-0 transition-all duration-150 ease-in-out">
                    Herman Makiese
                </p>
            </div>
        </>
    );
};

export default Logo;