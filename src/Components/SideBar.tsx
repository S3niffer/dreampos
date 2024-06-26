import { RiDashboard2Line } from "react-icons/ri"
import { LuLogOut, LuPackage, LuPackagePlus, LuShirt, LuUser, LuUserPlus } from "react-icons/lu"
import SideBarLink from "./SideBarLink"
import Portal from "./Portal"
import { useEffect, useMemo, useState } from "react"
import { useDispatch } from "react-redux"
import { LogOut } from "../Apps/Slices/User"

const SideBar = () => {
    const [isPortalActive, setIsPortalActive] = useState(false)
    const Dispatch = useDispatch()
    const isMobile = useMemo(() => {
        let status: boolean = false

        if ("maxTouchPoints" in navigator) {
            navigator.maxTouchPoints > 0 && (status = true)
        }
        if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            status = true
        }

        return status
    }, [])
    useEffect(() => {
        const keyDownHandler = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsPortalActive(false)
            }
        }
        if (isPortalActive) {
            window.addEventListener("keydown", keyDownHandler)
        } else {
            window.removeEventListener("keydown", keyDownHandler)
        }

        return () => {
            window.removeEventListener("keydown", keyDownHandler)
        }
    }, [isPortalActive])

    return (
        <>
            <div className={`h-[calc(100vh-var(--topBarHeight))] text-added-text-secondary sideBarContainer`}>
                <div className='dir-ltr overflow-y-auto h-[calc(100%-60px)]'>
                    <div className={`dir-rtl flex flex-col gap-1.5  ${isMobile ? " pt-16 " : " py-1.5 sm:pt-2 "}`}>
                        <SideBarLink
                            Icon={RiDashboard2Line}
                            title='صفحه اصلی'
                            to={"/"}
                        />
                        <SideBarLink
                            Icon={LuPackage}
                            title='محصولات'
                            to={"/products"}
                        />
                        <SideBarLink
                            Icon={LuPackagePlus}
                            title='افزودن محصول'
                            to={"/add-product"}
                        />
                        <SideBarLink
                            Icon={LuUser}
                            title='کاربران'
                            to={"/customers"}
                        />
                        <SideBarLink
                            Icon={LuUserPlus}
                            title='افزودن کاربر'
                            to={"/add-customer"}
                        />
                        <SideBarLink
                            Icon={LuShirt}
                            title='پروفایل من'
                            to={"/profile"}
                        />
                    </div>
                </div>
                <div className='h-[60px] border-t-2 border-t-added-border  flex flex-col justify-center'>
                    <div
                        onClick={() => setIsPortalActive(true)}
                        className='p-2 pr-2 flex gap-2 items-center hover:bg-added-border cursor-pointer transition-all duration-300 text-red-600 hover:pr-3 w-[90%] mx-auto'
                    >
                        <LuLogOut className='text-2xl text-inherit' />
                        <span>{"خروج"}</span>
                    </div>
                </div>
            </div>
            {isPortalActive ? (
                <Portal
                    closePortal={() => {
                        setIsPortalActive(false)
                    }}
                >
                    <div className='relative w-full max-w-md max-h-full'>
                        <div className='relative bg-added-bg-primary rounded-lg shadow-md shadow-added-border'>
                            <button
                                type='button'
                                className='absolute top-3 end-2.5 bg-transparent hover:bg-added-border rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center group'
                                data-modal-hide='popup-modal'
                                onClick={() => setIsPortalActive(false)}
                            >
                                <svg
                                    className='w-3 h-3 text-added-text-secondary group-hover:text-added-main'
                                    aria-hidden='true'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 14 14'
                                >
                                    <path
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                                    />
                                </svg>
                                <span className='sr-only'>Close modal</span>
                            </button>
                            <div className='p-4 md:p-5 text-center'>
                                <div className='h-12 flex items-center justify-center'>
                                    <LuLogOut className='text-4xl' />
                                </div>
                                <h3 className='mb-5 text-lg font-normal text-added-text-primary'>
                                    آیا مطمئن هستید که میخواهید خارج شوید؟
                                </h3>
                                <button
                                    data-modal-hide='popup-modal'
                                    type='button'
                                    className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center'
                                    onClick={() => Dispatch(LogOut())}
                                >
                                    بله کاملا
                                </button>
                                <button
                                    data-modal-hide='popup-modal'
                                    type='button'
                                    className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
                                    onClick={() => setIsPortalActive(false)}
                                >
                                    نه، پشیمون شدم
                                </button>
                            </div>
                        </div>
                    </div>
                </Portal>
            ) : null}
        </>
    )
}
export default SideBar
