const  express =require('express')
const  bussinessroutes= express.Router()



const ADODB=require('node-adodb')
//const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=AFF.mdb;');
const connection = ADODB.open('Provider=Microsoft.ACE.OLEDB.12.0;Data Source=aff.mdb;Persist Security Info=False;;');


bussinessroutes.route("/getCertificat").post(function(req,res){
  console.log(req.body)
 // res.json({"Result":"server is rponding"})

 var cno=req.body.id
 //console.log('SELECT * FROM office_address_list where [cert no]="' + cno+'"')
 connection
.query('SELECT * FROM office_address_list where [cert no]="' + cno+'"')
.then(data => {
  //console.log(JSON.stringify(data, null, 2));
  res.json(JSON.stringify(data, null, 2))
  //res.json(data, null, 2)
})
.catch(error => {
  console.error(error);
});

})

bussinessroutes.route("/cnic").post(function(req,res){
  console.log(req.body)
 // res.json({"Result":"server is rponding"})

 var cno=req.body.id
 //console.log('SELECT * FROM office_address_list where [cert no]="' + cno+'"')
 connection
.query('SELECT * FROM office_address_list where [cnic no]="' + cno+'"')
.then(data => {
  //console.log(JSON.stringify(data, null, 2));
  res.json(JSON.stringify(data, null, 2))
  //res.json(data, null, 2)
})
.catch(error => {
  console.error(error);
});

})

bussinessroutes.route("/updatefbKey").post(function(req,res){
  console.log('Reach to update')
  console.log(req.body)
  connection
  .query('Update office_address_list set fbKey="' + req.body.fbKey + '" where [cnic no]="' + req.body.id + '"')
  .then(data =>{
    res.json({Respond:"Update Succesfully"})
  })
  .catch(error =>{
    res.json({Respond:error})
  })
})

bussinessroutes.route("/").get(function(req,res){
    console.log(req.body)
   // res.json({"Result":"server is rponding"})

   connection
  .query('SELECT * FROM office_address_list')
  .then(data => {
    //console.log(JSON.stringify(data, null, 2));
    res.json(JSON.stringify(data, null, 2))
    //res.json(data, null, 2)
  })
  .catch(error => {
    console.error(error);
  });

})


bussinessroutes.route("/asif").get(function(req,res){
    console.log(req.body)
    res.json({"Result":"server is rponding Asif"})
})

module.exports=bussinessroutes