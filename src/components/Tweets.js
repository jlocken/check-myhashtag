import React, {useState} from 'react'
import TwitterIcon from "@material-ui/icons/Twitter";

import './Tweets.css'
import TweetsList from './TweetsList'
import ContentLoading from './ContentLoading'
import SearchForm from './SearchForm'




function Tweets() {
    
    const [hashtag, setHashtag] = useState('#TrumpConceded')


    
    return (
        
        <div className="feed">
            <div  className="feed__header">
                <TwitterIcon className="feed_twitterIcon"/>
                <div className="feed__header--tag">                
                    <h2>Top 50 Tweets By Hashtag</h2>
                    <small>Powered by Twitter data</small>
                </div>
            </div>
            <div className="searchForm">
                <SearchForm setHashtag={setHashtag} />
            </div>
            <div className="feed__tweetsList">
                <TweetsList hashtag={hashtag}/>
            </div>


        </div>
    )
}

export default Tweets;