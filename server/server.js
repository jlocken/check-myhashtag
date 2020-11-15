const express = require('express');
const axios = require('axios');
const qs =require('query-string');

require('dotenv').config();


const app = express();
let port= process.env.PORT || 3000;


const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;
const searchURL = "https://api.twitter.com/1.1/search/tweets.json";
const authMessage = {
  error: true,
  title: "Could not authenticate",
  details: [
    `Please make sure your bearer token is correct.`,
  ],
  type: "https://developer.twitter.com/en/docs/authentication",
};

const handleSearch = (req, res) => {
    if(!BEARER_TOKEN) {
        res.status(400).send(authMessage);
        return
    }

    const q = req.query.q || '#BBC';
    const count = req.query.count || 1;
    const result_type = req.query.result_type || 'popular';
    

    const params = {
        q,
        result_type,
        count,
    }
    
    axios({
        url:`${searchURL}?${qs.stringify(params,)}`,
        method: 'GET',
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json',
        },
    })
    .then(twitterResp =>{
        res.json({
           error: false,
           tweets: twitterResp.data.statuses 
        });
    })
    .catch(() => {
        res.json({
            error: true,
            message: 'Something went wrong',
        });
    });

}

app.get("/api/search/tweets", handleSearch);

console.log("NODE_ENV is", process.env.NODE_ENV)

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "../build")));
    app.get("*", (request, res) => {
        res.sendFile(path.join(__dirname,"../build", "index.html"))
    })
}else {
    port=3001;
}
app.listen(port, () => console.log(`Server listerning on port ${port}...`));


