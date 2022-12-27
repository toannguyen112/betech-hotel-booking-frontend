import React from 'react'

function Button({ title }) {
    return (
        <button className="flex items-center justify-center overflow-hidden relative text-white px-[20px] py-[10px] rounded-full bg-black">
            {title}
        </button>
    )
}

export default Button