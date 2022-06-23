import { useEffect, useState } from "react"


function useDatos() {
    const [postres, setPostres] = useState([])

    useEffect(() => {

      fetch("json/data.json")
        .then(response => response.json())
        .then(datos => {
          setPostres(datos)
          console.log('esta es la data ',datos)
        })
    
    }, [])
    return postres
}

export default useDatos
 
   