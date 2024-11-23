import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack_icon from '../../assets/jack_icon.png';
import img from '../../assets/img.png';
import { API_KEY } from '../../data';

const PlayVideo = ({ videoid }) => {


    const [apiData, setApiData] = useState([]);

    const fetchdata = async () => {
        const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoid}&key=${API_KEY}`;
        try {
            const response = await fetch(relatedvideo_url);
            const data = await response.json();
            setApiData(data.items);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchdata();
    }, [videoid]);

  


  return (
    <div className='play-video'>
      <iframe
        src={`https://www.youtube.com/embed/${videoid}?autoplay=1`}
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        title="YouTube video player"
      ></iframe>
               

               
      <>
        <h1></h1>
        <div className='play-video-info'>
          <h2>Car Guys Pulled Song</h2>
          <div>
            <span><img src={like} alt="like" />0</span>
            <span><img src={dislike} alt="dislike" />Dislike</span>
            <span><img src={share} alt="share" />Share</span>
            <span><img src={save} alt="save" />Save</span>
          </div>
        </div>
        <hr />
        <div className='publisher'>
          <img src={img} alt="publisher" />
          <div>
            <p>Sample Channel</p>
            <span>1M Subscriber</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className='vid-description'>
          <p> "Sample video description. This is a placeholder for the actual video description."</p>
          <p>Best Education Channel Learn the Science</p>
          <hr />
          <h4>102 • Comments</h4>
          <div className='comment'>
            <img src={jack_icon} alt='commenter' />
            <div>
              <h3>Mike<span>1 day ago</span></h3>
              <p>I have a doubt in 2.53 minutes with we use inheritance using keyword expand can I use interface in place of inheritance</p>
              <div className='comment-action'>
                <img src={like} alt="like" />
                <span>244</span>
                <img src={dislike} alt="dislike" />
              </div>
            </div>
          </div>
          <div className='comment'>
            <img src={jack_icon} alt='commenter' />
            <div>
              <h3>Mike<span>1 day ago</span></h3>
              <p>I have a doubt in 2.53 minutes with we use inheritance using keyword expand can I use interface in place of inheritance</p>
              <div className='comment-action'>
                <img src={like} alt="like" />
                <span>244</span>
                <img src={dislike} alt="dislike" />
              </div>
            </div>
          </div>
          <div className='comment'>
            <img src={jack_icon} alt='commenter' />
            <div>
              <h3>Mike<span>1 day ago</span></h3>
              <p>I have a doubt in 2.53 minutes with we use inheritance using keyword expand can I use interface in place of inheritance</p>
              <div className='comment-action'>
                <img src={like} alt="like" />
                <span>244</span>
                <img src={dislike} alt="dislike" />
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default PlayVideo;
