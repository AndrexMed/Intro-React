import React from 'react'
import ReactDOM from 'react-dom'

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='bg-opacity-80 bg-gray-900 flex justify-center items-center text-white fixed top-0 right-0 bottom-0 left-0'>
            <div className='w-96 h-96 bg-slate-200 opacity-50 rounded'>
            {children}
            </div>
        </div>,
        document.getElementById('modal')
    );
}

export { Modal }