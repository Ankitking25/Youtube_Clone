import React, { useState, useEffect } from 'react';
import './Recommended.css';
import { API_KEY } from '../../data';
import { value_converter } from '../../data';
import {Link} from 'react-router-dom'
const Recommended = ({ categoryid }) => {
    const [apiData, setApiData] = useState([]);

    const fetchdata = async () => {
        const relatedvideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryid}&key=${API_KEY}`;
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
    }, [categoryid]);

    return (
        <div className='recommanded'>
            {apiData.map((item, index) => (
                <Link to={`/delta/${item.snippet.categoryId}/${item.id}`}  key={index} className='side-video-list'>
                    <div className="box">
                        <img 
                            src={item.snippet.thumbnails.medium.url} 
                            style={{ width: '250px', height: '150px' }} 
                            alt={item.snippet.title} 
                        />
                    </div>
                    <div className='vid-info'>
                        <h4>{item.snippet.title}</h4>
                        <p>{item.snippet.channelTitle}</p>
                        <p>{value_converter(item.statistics.viewCount)} views</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Recommended;
