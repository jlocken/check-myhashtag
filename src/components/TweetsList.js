import React, {useState,useEffect} from 'react'
import {searchTweets} from '../services/twitterAPI'
import Tweet from './Tweet'
// import ContentLoading from './ContentLoading'

const TweetsList = ({hashtag}) => {

    const TWEETS_FETCTH_LIMIT =5
    
    const [tweets, setTweets] = useState([])
    // const [loading, setLoading] = useState(true)


    useEffect(() =>{
        const params = {q: hashtag, count: TWEETS_FETCTH_LIMIT}
        const queryTweeterAPI = async () => {
            try {

               const resp=searchTweets(params) 
               const data= (await resp).data
               if(data.error) {
                   console.log(data.message)
                   return
               }
               setTweets(data.tweets)
               
            } catch (error) {
                console.log(error)
            }
        }
        
        queryTweeterAPI()
      

    },[hashtag])



    return (
        <div>
            {tweets && tweets.map(tweet => <Tweet data={tweet} tweetId={tweet.id_str} key={tweet.id_str}/>)}
        </div>
    )
}

export default TweetsList
