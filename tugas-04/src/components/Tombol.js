import React from 'react'

export default function Tombol(props) {
  return <button onClick={()=>{alert(`Anda telah mengklik tombol ${props.children}!`)}}>{props.children}</button>
}
