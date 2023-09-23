import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Wtsapp() {
    let props =  {
        phoneNumber : "9857484810",
        accountName:"YT SHOP INDIA",
        statusMessage:"online",
        darkMode:true,
        allowEsc:true,
        chatboxHeight:400
    }

  return (
      <FloatingWhatsApp {...props}  />
  )
}