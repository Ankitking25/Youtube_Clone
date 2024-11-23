import React from 'react'
import './Sidebar.css'

 import home_icon from '../../assets/home_icon.png'
import gameing_icon from '../../assets/gameing_icon.png'
import automobile_icon from '../../assets/automobile_icon.png'
import sport_icon from '../../assets/sport_icon.png'
import entertainment_icon from '../../assets/entertainment_icon.png'
import technology_icon from '../../assets/technology_icon.png'
import music_icon from '../../assets/music_icon.png'
import news_icon from '../../assets/news_icon.png'
import blog_icon from '../../assets/blog_icon.png'

import jack_icon from '../../assets/jack_icon.png'
import megan_icon from '../../assets/megan_icon.png'
import simon_icon from '../../assets/simon_icon.png'
import newdelhi_icon from '../../assets/newdelhi_icon.png'
import tom_icon from '../../assets/tom_icon.png'

export const Sidebar = ({side_bar,category,setCategory}) => {
  return (
    <div className={`sidebar ${side_bar?"":"small-sidebar"}`}>
        <div className="sortcut-links">

              <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                 <img src={home_icon} alt=''/><p>Home</p>
              </div>

               <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                 <img src={gameing_icon} alt=''/><p>Gaming</p>
              </div>
              
               <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                     <img src={automobile_icon} alt=''/><p>Automobile</p>
               </div>

           
              <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                 <img src={sport_icon} alt=''/><p>Sports</p>
              </div>
                 
              <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                 <img src={entertainment_icon} alt=''/><p>Enterainment</p>
              </div>
             
              <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                 <img src={technology_icon} alt=''/><p>Technology</p>
              </div>
             
              <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                 <img src={music_icon} alt=''/><p>Music</p>
              </div>

              <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                 <img src={blog_icon} alt=''/><p>Blogs</p>
              </div>

             
              <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                 <img src={news_icon} alt=''/><p>News</p>
              </div>
               <hr/> 
        </div>
  
       <div className='subscribed-list'>
          <h3>Subscribed</h3>

          <div className='side-link'>
              <img src = {jack_icon} alt="" /><p>PewDiePie</p>
          </div>

          <div className='side-link'>
              <img src = {simon_icon} alt="" /><p>Mr Beast</p>
          </div>

          <div className='side-link'>
              <img src = {tom_icon} alt="" /><p>Justin Bieber</p>
          </div>

          <div className='side-link'>
              <img src = {megan_icon} alt="" /><p>5-minutes Crafts</p>
          </div>
          
          <div className='side-link'>
              <img src = {newdelhi_icon} alt="" /><p>New Delhi</p>
          </div>

       </div>

    </div>
  )
}







