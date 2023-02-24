import { useState } from "react";
import { Link } from "react-router-dom";
import FilipLogo from './../resources/images/filip_logo.png'

function MobileNavbarDropdownIcon(props) {
    return (
        <div className="md:hidden">
            <button
                className="p-2 text-[#f7e07b] rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => props.setNavbarVisible(!props.navbarVisible)}
            >
                {props.navbarVisible ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}

export default function NavBar() {
    const [navbarVisible, setNavbarVisible] = useState(false);
    const [dropDownStatesMap, setDropDownStatesMap] = useState(new Map());

    const menuItems = [
        ['Home', '/'],
        ['About', '/about'],
        ['Specialization', '/specialization'],
        ['Showcase', 'javascript:void(0)', [
            ['Editor', '/editor'],
            ['Animation State Machine Editor', '/animation-state-editor'],
            ['Reflection System', '/reflection-system'],
            ['2D Realtime Lighting', '/visibility-lighting'],
        ]],
        ['Projects', 'javascript:void(0)', [
            ['Starfall', '/starfall'],
            ['ERA', '/era'],
            ["Egar's Rage", '/egarsrage'],
            ['Silence The Sun', '/silence-the-sun'],
            ['Akuma', '/akuma'],
            ['A Bark in the Dark', '/a-bark-in-the-dark'],
            ['Runmir', '/runmir'],
            ['Ghost Cruiser', '/ghost-cruiser'],
        ]],
    ];

    return (
        <nav className="w-full bg-[#232323] drop-shadow text-lg font-medium pr-16">
            <div className="justify-between px-4 mx-auto lg:max-w-6xl md:items-center md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <a href="/">
                        <img src={FilipLogo} />
                    </a>
                    <MobileNavbarDropdownIcon navbarVisible={navbarVisible} setNavbarVisible={setNavbarVisible} />
                </div>
                <div>
                    <div className={`pl-10 text-left flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbarVisible ? "block" : "hidden"}`}>
                        <ul className="space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {
                                menuItems.map(([title, url, subItems]) => (
                                    <Link to={url}>
                                        <li
                                            className="text-white hover:text-gray-400 py-2 md:py-10 duration-300"
                                            onClick={() => {
                                                setDropDownStatesMap(new Map().set(title, !(dropDownStatesMap.has(title) && dropDownStatesMap.get(title))));
                                                setNavbarVisible(false);
                                            }}
                                            /* Using a map for dropdown state is not needed and unnessecary, but whatever dude */
                                            onMouseEnter={() => subItems ? setDropDownStatesMap(new Map().set(title, true)) : ""}
                                            onMouseLeave={() => subItems ? setDropDownStatesMap(new Map().set(title, false)) : ""}>

                                            <div className="flex">
                                                {title}
                                                {
                                                    subItems ?
                                                        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#fff" d="m12 14l-4-4h8z" /></svg> : ""
                                                }
                                            </div>



                                            {
                                                (subItems && ((dropDownStatesMap.has(title) && dropDownStatesMap.get(title)) || navbarVisible))
                                                    ? (
                                                        <ul className="pl-10 md:mt-8 md:absolute bg-[#232323] flex flex-col h-fit w-56 p-4 md:border-t-2 md:border-[#f7db5d] text-white">
                                                            {subItems.map(([subTitle, subUrl]) => (
                                                                <Link to={subUrl}>
                                                                    <li className="text-white hover:text-gray-400 py-2 duration-300">{subTitle}</li>
                                                                </Link>
                                                            ))}
                                                        </ul>
                                                    )
                                                    : ""
                                            }
                                        </li>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}