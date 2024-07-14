const ThemeSwitcherButton = ({renderThemeChanger, theme, setTheme}) => {
    return (
        <>
            <div className="flex mt-auto ml-0 lg:ml-5">
                {/* Dark mode */}
                <button
                    className="flex items-center justify-center w-7 h-12 transition-all duration-150 ease-in rounded-sm focus:outline-none group bg-transparent outline-none"
                    onClick={() => {
                        setTheme(theme === "dark" ? "light" : "dark");
                    }}
                >
                    {renderThemeChanger()}
                </button>
            </div>
        </>
    );
};

export default ThemeSwitcherButton;