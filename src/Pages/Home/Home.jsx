import React ,{useState} from 'react'
import './Home.css'
import { Sidebar } from '../../Components/Sidebar/Sidebar'
import Feed from '../../Components/Feed/Feed'
const Home = ({side_bar}) => {

 const [category,setCategory] = useState(0);


  return (
     <>
       <div className='alpha'>
        <Sidebar side_bar={side_bar}  category={category} setCategory={setCategory} />
        <div className={`container ${side_bar?"":'large-container'}`}> 
           <Feed category={category}/>
        </div>
        </div>
     </>
  )
}

export default Home