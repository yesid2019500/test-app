import React from 'react'
import logo from '../assets/images/logo-mini.png'

const MainContent = ({data}) => {
  return (
    <main className="content">
    <article className="article">
       <img className="img-cover" src="https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg" alt="" />
    </article>

    {
          data.map( art => (
            <article key={art.id} className="article bg">
              <div className="grid-header">
                <h2>{art.title}</h2>
                <button className="btn br">Guardar</button>
              </div>

              <article>
                <div className="grid-header-title">
                  <img className="mini-logo" src={logo} alt="" />
                  <h4>Hace 12 h</h4> |
                  <h4>Publicado: 21/06/22</h4> |
                  <h4>Lectura 3 min.</h4> 
                </div>
                <div className="an">
                  <a href="#">Medicina Interna</a>
                  <a href="#">Pediatria</a>
                  <a href="#">Obstreticia</a>
                </div>
              </article>

            <p>{art.content[0]}</p>
            <br />
            <p>{art.content[5]}</p>
            <br />
            <p>{art.content[6]}</p>
            <br />
            <p>{art.content[7]}</p>
            <br />
            <p>{art.content[8]}</p>
           </article>
          ))

    }

    

    {/* <article className="article">
        <h2>Principal tittle 3</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor repellendus quidem sit molestias rem illo fugiat beatae voluptatum adipisci itaque.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, necessitatibus!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt?</p>
    </article> */}
</main>

  )
}

export default MainContent