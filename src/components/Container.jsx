
import useDatos from '../helper/getData';
import PropType from 'prop-types';




import Footer from './Footer'
import MainContent from './MainContent'
import Post from './Post'
import Sidebar from './Sidebar'

const Container = () => {

  const data = useDatos()

  return (
   <>
      <div className='container'>
       <MainContent data={data} />
        <Sidebar data={data} />
         <Post data={data} />
      <Footer data={data} />  
   </div>
  </>
  )
}

export default Container

Container.protoTypes = {
   data: PropType.func.isRequired
}