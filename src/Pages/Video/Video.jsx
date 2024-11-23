import React from 'react';
import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';

const Video = () => {
    const {videoid,categoryid} = useParams();

    return (
        <div className='play-container'>
            <PlayVideo videoid={videoid} />
            <Recommended categoryid = {categoryid} />
        </div>
    );
};

export default Video;
