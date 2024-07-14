import {navbarItems} from "../../_data/_navbar";
import NeedHelpButton from "../NeedHelpButton";

const MobileNav = ({visibleSection,navbarOpen, scrollTo, switchRef,setNavbarOpen }) => {
    return (
        <>
            <div
                className={`fixed w-full z-50 h-screen pt-24 bg-white dark:bg-darker bg-opacity-100 transform delay-100 transition-all duration-150 ${
                    navbarOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-full"
                }`}
            >
                <div className="container relative mx-auto">
                    <nav className="block ml-auto">
                        <ul className="z-50 flex flex-col items-start">
                            {navbarItems.map((item) => (
                                <li key={item.id} className="z-50 block py-2 list-none lg:inline-block">
                                    <button
                                        className={`header_link text-xl font-semibold transition-all duration-150 ease-in-out ${
                                            visibleSection === item.section
                                                ? "selected delay-200"
                                                : "dark:text-light dark:hover:text-white text-mid/50 hover:text-mid border-b-2 border-transparent"
                                        }`}
                                        onClick={() => {
                                            setNavbarOpen(false);
                                            scrollTo(switchRef(item.id));
                                        }}
                                    >
                                        {item.title}
                                    </button>
                                </li>
                            ))}

                            <li className="z-40 block py-2 mt-6 list-none lg:inline-block">
                                <NeedHelpButton/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default MobileNav;