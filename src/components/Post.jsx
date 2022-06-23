import React, { Fragment } from 'react'


const Post = ({data}) => {
  return (
    <>
        {
        data.map( p => (
    <Fragment key={p.id}>
     <div className="post" >
       <a href={p.content[3]}><p>{p.content[0]}</p> </a>
     </div>
    <div className="post">
        <a href={p.content[3]}><p>{p.content[0]}</p> </a>
     </div>
     <div className="post">
        <a href={p.content[3]}><p>{p.content[0]}</p> </a>
     </div>
     <div className="post">
         <a href={p.content[3]}><p>{p.content[0]}</p> </a>
    </div>
     <div className="post">
        <a href={p.content[3]}><p>{p.content[0]}</p> </a>
    </div>
    </Fragment>
            ))
        }
   </>
  )
}

export default Post