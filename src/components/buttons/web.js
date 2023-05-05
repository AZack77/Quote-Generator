import React, { Component } from 'react';

function Web()
{
    let url = "https://youtu.be/q-tGimz34Ho";
    return(
        <div id='share-buttons'>
            <a href={`https://www.facebook.com/sharer.php?u=${url}`} className='facebook' target='blank'><i className='fab fa-facebook'></i></a>
            <a href='https://twitter.com/intent/tweet?text="hello"&url="https://youtu.be/q-tGimz34Ho"'  className='twitter' target='blank'><i className='fab fa-twitter'></i></a>
            <a className='instagram' target='blank'><i className='fab fa-instagram'></i></a>
            <p>lorem</p>
        </div>
    )
}

export default Web;