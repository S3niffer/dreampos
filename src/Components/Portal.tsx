import React from "react"
import ReactDOM from "react-dom"

const Portal = ({ children }: { children: React.ReactNode }) => {
    const ModalTag = document.getElementById("modal") as HTMLDivElement

    const portalTag = (
        <div className='relative'>
            <div className='absolute top-0 left-0 h-screen w-screen z-[999] backdrop-blur-sm flex justify-center items-center'>
                {children}
            </div>
        </div>
    )

    return ReactDOM.createPortal(portalTag, ModalTag)
}
export default Portal

// const defaultChangedAlittle = <div className='relative p-4 w-full max-w-md max-h-full'>
// <div className='relative bg-added-bg-primary rounded-lg shadow'>
//     <button
//         type='button'
//         className='absolute top-3 end-2.5 bg-transparent hover:bg-added-border rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center group'
//         data-modal-hide='popup-modal'
//     >
//         <svg
//             className='w-3 h-3 text-added-text-secondary group-hover:text-added-main'
//             aria-hidden='true'
//             xmlns='http://www.w3.org/2000/svg'
//             viewBox='0 0 14 14'
//         >
//             <path
//                 stroke='currentColor'
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
//             />
//         </svg>
//         <span className='sr-only'>Close modal</span>
//     </button>
//     <div className='p-4 md:p-5 text-center'>
//         <svg
//             className='mx-auto mb-4 text-added-text-secondary w-12 h-12'
//             aria-hidden='true'
//             xmlns='http://www.w3.org/2000/svg'
//             fill='none'
//             viewBox='0 0 20 20'
//         >
//             <path
//                 stroke='currentColor'
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
//             />
//         </svg>
//         <h3 className='mb-5 text-lg font-normal text-added-text-primary'>
//             Are you sure you want to delete this product?
//         </h3>
//         <button
//             data-modal-hide='popup-modal'
//             type='button'
//             className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center'
//         >
//             Yes, I'm sure
//         </button>
//         <button
//             data-modal-hide='popup-modal'
//             type='button'
//             className='py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'
//         >
//             No, cancel
//         </button>
//     </div>
// </div>
// </div>
