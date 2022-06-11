import React, { Children, JSXElementConstructor, ReactChildren } from 'react'

export const Box = ({children}: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <div className='shadow-md border-black border-opacity-5 bg-white border rounded-lg w-full mx-auto px-6 py-10 mb-7 sm:mb-6'>
      {children}
    </div>
  )
}
