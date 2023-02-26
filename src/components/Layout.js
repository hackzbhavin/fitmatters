import React from 'react'
import NavBarMenu from './NavBarMenu'

export default function Layout({children}) {
  return (
   <>

    <NavBarMenu
    />
    {children}

   </>
  )
}
