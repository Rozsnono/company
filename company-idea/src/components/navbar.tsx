import Image from 'next/image';
import React, { useContext, useEffect } from 'react';

import Logo from "../assets/logo-title-light.svg"
import { Menu } from 'primereact/menu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Navbar() {


    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const profileRef = React.useRef<Menu>(null);

    const url = usePathname();
    const r = useRouter();

    function getUrl(urls: string) {
        if (url == urls) {
            return "bg-gray-900 w-full text-white rounded-md px-3 py-2 text-lg font-medium "
        }
        return "text-gray-300 lg:text-gray-950 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium"
    }

    const items = [
        {
            label: "user",
            items: [
                {
                    label: 'Profile',
                    command: () => {
                        
                    }
                },
                {
                    label: 'Log out',
                    command: () => {
                        
                    }
                }
            ]
        }
    ];
    return (
        <nav className={"fixed w-screen top-0 " + (navbarOpen ? "bg-[#c2410cf0] min-h-screen lg:min-h-full " : "bg-transparent")}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={() => { setNavbarOpen(!navbarOpen) }} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">
                            <Image width={300} height={300} className="h-12 w-auto" src={Logo} alt="Your Company" />
                        </div>
                        {/* <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4 items-center mt-2">
                                <Link href="/" >
                                    <span className={getUrl("/")} aria-current="page"> Home</span>
                                </Link>
                                <Link href="/questions">
                                    <span className={getUrl("/questions")}> Questions</span>
                                </Link>

                            </div>
                        </div> */}
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        {/* <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">View notifications</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </button> */}

                        {/* {
                            user != null && user != undefined ?
                                <div className="relative ml-3">
                                    <div className={'flex items-center gap-3 rounded-full p-1' + (user ? " bg-transparent-gray" : "")}>
                                        <button onClick={(e) => { profileRef.current!.toggle(e) }} type="button" className="flex rounded-full bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                            <Image width={100} height={100} className="h-8 w-8 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                                        </button>
                                        <div className="hidden lg:block nav-items text-lg text-white pe-4">
                                            {user.nickname}
                                        </div>
                                    </div>
                                    <Menu model={items} popup ref={profileRef} id="popup_menu_left" className='mt-2' />
                                </div>
                                :
                                <div className="relative ml-3 flex">
                                    <div className={'flex items-center gap-3 rounded-full p-1' + (user ? " bg-transparent-gray" : "")}>
                                        <Link href={"/login"}>

                                            <div className="text-sm text-blue-500 px-4 py-1 border-2 border-blue-500 rounded-full font-bold hover:text-white hover:bg-blue-500 cursor-pointer">
                                                <i className={Icons.SIGNIN} style={{ fontSize: ".75rem" }}></i> Login
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                        } */}

                    </div>
                </div>
            </div>

            {
                navbarOpen ?
                    <div className="sm:hidden grid text-center mx-4 gap-4 mt-16">
                        <Link href="/" onClick={() => { setNavbarOpen(false) }} className={getUrl("/")}>
                            <span> Home</span>
                        </Link>
                        <Link href="/questions" onClick={() => { setNavbarOpen(false) }} className={getUrl("/questions")}>
                            <span> Questions</span>
                        </Link>
                    </div> : <></>
            }
        </nav>
    )
}