import React from 'react'

export const Menu = ({items, setIsMenuOpenHandler}: {items: string[], setIsMenuOpenHandler: () => void}) => {
  function clickHandler(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    setIsMenuOpenHandler()
  }
  return (
    <ul className='bg-white rounded-lg felx flex-col w-full'>
      {items.map((item, i) => {
        return <li className='px-6 py-7 border-t-black border-t border-opacity-5 first:border-0' key={i}><a href="" onClick={clickHandler} className="block text-base w-fit" >{item}</a></li>
      })}
    </ul>
  )
}
