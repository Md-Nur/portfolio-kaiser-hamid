import React from 'react'

const Button = ({children}) => {
  return (
   <button className="border border-color1 dark:border-color4 hover:bg-color2 dark:hover:bg-color3 hover:text-color4 dark:hover:text-color1 rounded-md p-2 m-5"
   >
        {children}
    </button>

  )
}

export default Button