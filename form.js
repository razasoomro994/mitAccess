//const { param } = require("./api2/myroutes")

var dbMt=firebase.database().ref('dtMarriTime')

myObj={}

//filling customer table
// dbMt.on('child_added', function (pkg) {
//     var abc = pkg.val()
//     myObj={}
//     myObj.push(abc)
    
// })
// console.log(window.location.search)
// const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams)
// //const myParam = urlParams.get('myParam');

const params = new URLSearchParams(window.location.search)
console.log(params.get('cno'))
for (const param of params) {
  console.log(param)
}
getCertificate()


function getCertificate() {
var myList=[]
    dbMt.orderByChild('Cert No').equalTo(params.get('cno')).once('value',function(getData){
        console.log(Object.entries(getData.val()))
        var mya=Object.entries(getData.val())
        console.log(mya[0][1])
        var obj=mya[0][1]
        document.getElementById('cerno').value=obj['Cert No']
        document.getElementById('cername').value=obj['Cert Name']
        document.getElementById('cdcno').value=obj['CDC No']
        document.getElementById('cfrom').value=obj['from']
        document.getElementById('cto').value=obj['to']
        document.getElementById('dob').value=obj['DOB']
        document.getElementById('cnic').value=obj['CNIC No']

        document.getElementById('date').value=obj['Date Issue']

        document.getElementById('expire').value=obj['Valid Until']




        
         
})
}