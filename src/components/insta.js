import React, { Component } from 'react';

function InstaShare()
{
    const axios = require('axios');

// Replace with your own Instagram access token
const accessToken = 'your_access_token';

// Replace with the ID of your Instagram business account
const accountId = 'your_account_id';

// Replace with the URL of your blog post
const blogPostUrl = 'https://example.com/blog-post';

// Replace with your desired caption for the Instagram post
const caption = 'Check out my new blog post!';

// Get the media ID of the blog post image
async function getMediaId() {
  const response = await axios.get(`https://graph.instagram.com/v12.0/ig_hashtag_search?user_id=${accountId}&q=blogpost&access_token=${accessToken}`);
  const hashtagId = response.data.data[0].id;

  const mediaResponse = await axios.get(`https://graph.instagram.com/v12.0/${hashtagId}/recent_media?access_token=${accessToken}`);
  const mediaId = mediaResponse.data.data[0].id;

  return mediaId;
}

// Share the blog post on Instagram as a post
async function shareOnInstagram() {
  const mediaId = await getMediaId();
  const postData = {
    media_id: mediaId,
    caption: caption,
  };

  await axios.post(`https://graph.instagram.com/v12.0/${accountId}/media?access_token=${accessToken}`, postData);
}

shareOnInstagram();

}

export default InstaShare;