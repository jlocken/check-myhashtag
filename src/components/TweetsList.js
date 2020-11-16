import React, {useState,useEffect} from 'react'
import {searchTweets} from '../services/twitterAPI'
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

import Tweet from './Tweet'

const TweetsList = ({hashtag}) => {

    const TWEETS_FETCTH_LIMIT =50
    
    const [tweets, setTweets] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() =>{
        const params = {q: hashtag, count: TWEETS_FETCTH_LIMIT}
        const queryTweeterAPI = async () => {
            try {

               const resp=searchTweets(params) 
               const data= (await resp).data
               setLoading(false)
               if(data.error) {
                   setError("Error fetching tweets " + "-- " + data.message) 
                   setLoading(false)   
               }
               setTweets(data.tweets)

               
            } catch (error) {
                console.log(error)
                setError("Error fetching tweets " + "-- " + error)
                setLoading(false)
            }
        }
        
        queryTweeterAPI()
      

    },[hashtag])

    if(loading) {

        return <div style={{textAlign: "center", marginTop: "20px" }}><CircularProgress disableShrink /></div>

    }

    if(error) {
      return  <Alert severity="error" >{error}</Alert>
    }

    return (
        <React.Fragment>
            
            {tweets && tweets.map(tweet => <Tweet data={tweet} tweetId={tweet.id_str} key={tweet.id_str}/>)}
        </React.Fragment>
    )
}

export default TweetsList
