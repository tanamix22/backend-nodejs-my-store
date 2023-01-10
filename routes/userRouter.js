const express = require('express')

const router = express.Router();

router.get('/',(req,res)=>{
  res.json([
    {

      userName: 'user 1',
    },
    {
      userName: 'user 2',
    },
    {
      userName: 'user 3',
    },
  ])
})

router.get('/:userId',(req,res)=>{
  const {userId}= req.params
  res.json([
    {
      userId,
      userName: 'user 3',
    }
  ])
})

module.exports = router
