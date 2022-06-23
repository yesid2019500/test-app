import React from 'react'
import logo from '../assets/images/logo-mini.png'

const Footer = ({data}) => {
  return (
    <>
     <footer className="footer">
      {

        data.map( f => (
      <div className="grid-footer" key={f.id}>
          <a href="#"><img className="mini-logo" src={logo} alt="" /></a>
          <a href="">{f.content[0]}</a>
          <a href="">{f.content[1]}</a>
          <a href="">{f.content[1]}</a>
          <a href="">{f.content[1]}</a>
     </div>
        ))

      }
    </footer>
    </>
  )
}

export default Footer