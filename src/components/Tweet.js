import React from 'react'
import {TwitterTweetEmbed} from 'react-twitter-embed'

const Tweet = ({ data }) => {
    const { id_str } = data;

    const options = {
        align: "center",
        width: "550",
    }

    return <TwitterTweetEmbed options = { options } tweetId = { id_str } />
}

export default Tweet
