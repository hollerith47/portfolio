import {navbarItems} from "../../_data/_navbar";

const DesktopItems = ({visibleSection,scrollTo, switchRef}) => {
    return (
        <>
            {navbarItems.map((item) => (
                <li key={item.id} className="z-50 hidden mx-5 list-none lg:inline-block">
                    <button
                        className={`header_link font-semibold transition-all duration-150 ease-in-out ${
                            visibleSection === item.section
                                ? "selected delay-150"
                                : item.id === 1 ? item.className : "opacity-50 hover:opacity-100 border-b-2 border-transparent  dark:text-white text-dark"
                        }`}
                        onClick={() => {
                            scrollTo(switchRef(item.id));
                        }}
                    >
                        {item.title}
                    </button>
                </li>
            ))}
        </>
    );
};

export default DesktopItems;