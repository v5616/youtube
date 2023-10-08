import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Wtsapp() {
    let props =  {
        phoneNumber : "6392999757",
        accountName:"YT SHOP INDIA",
        statusMessage:"online",
        darkMode:true,
        allowEsc:true,
    }

  return (
      <FloatingWhatsApp {...props}  />
  )
}