const express = require('express')

const app = express()
const users = [
    {id:1,name:"user 1"},
    {id:2,name:"user 2"},
    {id:3,name:"user 3"},
    {id:4,name:"user 4"},
    {id:5,name:"user 5"},
    {id:6,name:"user 6"},
    {id:7,name:"user 7"},
    {id:8,name:"user 8"},
    {id:9,name:"user 9"},
    {id:10,name:"user 10"},
]
app.get('/',(req, res)=>{
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const startIndex = (page - 1) * limit
    const endIndex = (page) * limit
    const results = {}
    if(endIndex<users.length){
        results.next = {
            page:page+1,
            limit:limit
        }
    }
    if(startIndex>0){
        results.prev = {
            page : page - 1,
            limit : limit
        }
    }
    results.userResult = users.slice(startIndex,endIndex)
    if(page && limit != null){
        res.json(results)
    }
    else{
        res.json(users)
    }
    
})

app.listen(3000,()=>{
    console.log('the app is running on port 3000')
})