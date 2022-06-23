import React from 'react'

const Sidebar = ({data}) => {
  return (
    <aside className="sidebar">
      <div>
          {
            data.map( items => (
              <div key={items.id}>
            <div>
               <a href={items.content[3]}>
                <img src={items.content[4]} alt={items.content[4]}/>
              </a>
              <a href="#"><h4>{items.content[2]}</h4></a>
            </div>
            <div>
               <a href={items.content[3]}>
                <img src={items.content[4]} alt={items.content[4]}/>
              </a>
              <a href="#"><h4>{items.content[2]}</h4></a>
            </div>
            <div>
               <a href={items.content[3]}>
                <img src={items.content[4]} alt={items.content[4]}/>
              </a>
              <a href="#"><h4>{items.content[2]}</h4></a>
            </div>
            <div>
               <a href={items.content[3]}>
                <img src={items.content[4]} alt={items.content[4]}/>
              </a>
              <a href="#"><h4>{items.content[2]}</h4></a>
            </div>
            <div>
               <a href={items.content[3]}>
                <img src={items.content[4]} alt={items.content[4]}/>
              </a>
              <a href="#"><h4>{items.content[2]}</h4></a>
            </div>
        </div>
            ))
          }
      </div>
</aside>
  )
}

export default Sidebar