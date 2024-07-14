const MobileMenuButton = ({setNavbarOpen, navbarOpen}) => {
    return (
        <>
            <button
                className={`relative w-10 h-10 ${
                    navbarOpen
                        ? "dark:text-white text-dark"
                        : "text-mid/50 group-hover:text-mid dark:opacity-50 dark:group-hover:opacity-100 dark:text-white dark:group-hover:text-white"
                } focus:outline-none`}
                onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                      <span
                          aria-hidden="true"
                          className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                              navbarOpen ? "rotate-45" : "-translate-y-1.5"
                          }`}
                      ></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                            navbarOpen ? "opacity-0" : "opacity-100"
                        }`}
                    ></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-current transform transition duration-200 ease-in-out ${
                            navbarOpen ? "-rotate-45" : "translate-y-1.5"
                        }`}
                    ></span>
                </div>
            </button>
        </>
    );
};

export default MobileMenuButton;