var express = require('express');
var userModel = require('../models/users');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  userModel.find({},function(err,resData){
    if(resData.length>0){
      res.status(200).send({"msg":"Record find",data:resData});
    }else{
      res.status(200).send({"msg":"Record Not find",data:[]});
    }
  });
  
});

router.post('/save',function(req,res,next){
  var user = new userModel(req.body);
  user.save();
  res.status(200).send({"msg":"Student Save","data":user});
});


router.get('/delete/:roll',function(req,res,next){
  userModel.remove({"roll":req.params.roll},function(err){
    if(err){
      res.status(200).send({"msg":"Not deleted",data:[]});
    }else{
      res.status(200).send({"msg":"Record deleted",data:[]});
    }
  });
});

router.get('/getStudent/:roll',function(req,res,next){
  userModel.findOne({"roll":req.params.roll},function(err,data){
    if(err){
      res.status(200).send({"msg":"record not find",'data':[]});
    }else{
      res.status(200).send({"msg":"Record find",'data':data});
    }
  });
});


router.post('/update',function(req,res,next){
  if(req.body.roll!=null){
    tempStudent = {}
    userModel.updateOne({'roll':req.body.roll},req.body,function(err,data){
      if(!err){
        res.status(200).send({"msg":"recored updated",data:[]});
      }else{
        res.status(200).send({"msg":"Record Not Updated",data:[]});
      }
    })
  }
})


module.exports = router;
