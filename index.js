// const http = require('http');
 
// const hostname = '127.0.0.1';
// const port = 3000;
 
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
 
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require('express')
const app = express()
const port = 3000
const lotteryParticipants=[
  {name:'bhuwan',isWinner:true, lotteryNo:1234},
  {name:'sauhardha',isWinner:false, lotteryNo:5678},
  {name:'samikshya',isWinner:false, lotteryNo:9123},
  {name:'bipin',isWinner:false, lotteryNo:4567},
  {name:'ayush',isWinner:false, lotteryNo:1891}
]

app.get('/users/:name', (req, res) => {
 
const participantArr=lotteryParticipants.filter((item,index)=>{
  if(item.name === req.params.name){
    return item
  }
})

 const winnerArr = lotteryParticipants.filter((item,index)=>{
if(req.params.name === item.name && item.isWinner===true){
  return item
} 
 })
 let winnerMsg=""
 if(participantArr.length> 0 && winnerArr.length==0){
  winnerMsg="btter luck next time"
 }
 else if(winnerArr.length> 0){
  winnerMsg="congrats you won"
 }else{
  winnerMsg="You are not participant"
 }
 res.json({
  name:req.params.name,
  message:winnerMsg
 })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})