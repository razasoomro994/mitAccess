//const { json } = require("body-parser")

var dbMt=firebase.database().ref('dtMarriTime')


function fDataCount(){
    dbMt.once('value',function(getData){
        var abc=getData.val()
        stList.push(abc)
        
    })
  
    setTimeout(() => {
        console.log(stList[0])
       //console.log(stList[0].length)
    }, 5000);
    
}

stList=[]

function getCertificate(e){
    $.post("http://localhost:4001/mR/getCertificat",{id:e.id},function(data,status){
            //console.log(data.length)
            console.log(JSON.parse(data))
       //     stList=JSON.parse(data)
     //       console.log(e.id)
            // for(i=0; i<data.length; i++){
            //    console.log(data[i])
            // }
        })
}

myObj={}
function saveFirebase(e){
    var key
    key=dbMt.push().key
    $.post("http://localhost:4001/mR/getCertificat",{id:e.id},function(data,status){
       
       myObj=JSON.parse(data)[0]
       
       myObj['Key']=key

       console.log(myObj)
       dbMt.child(key).set(myObj)

       

        })

        var obj={id:e.id}
        obj['fbkey']=key
        console.log(obj)
     $.post("http://localhost:4001/mR/updatefbKey",obj,function(data,status){
          console.log(data)
     })   


}

function cnic(){
    var id=document.getElementById('txtct').value 
    console.log(id)
    $.post("http://localhost:4001/mR/cnic",{id:id},function(data,status){
            //console.log(data.length)
            //console.log(JSON.parse(data))
            stList=JSON.parse(data)
            fillTable()
     //       console.log(e.id)
            // for(i=0; i<data.length; i++){
            //    console.log(data[i])
            // }
        })
}

function fData(){
    $(document).ready(function(){

        $.get("http://localhost:4001/mR",function(data,status){
            //console.log(data.length)
            //console.log(JSON.parse(data))
            stList=JSON.parse(data)
            for(i=0; i<stList.length; i++){
                var key
                key=dbMt.push().key
                myObj=stList[i]
       
                myObj['Key']=key

                //console.log(myObj)
                dbMt.child(key).set(myObj)


            }

            console.log('Insert Sucessfully')
            //console.log(stList)
            // for(i=0; i<data.length; i++){
            //    console.log(data[i])
            // }
        })
    })  

    
   setTimeout(function(){
    fillTable()  
   },8000)
    //console.log(stList)
}

dbMt.on('child_added',function(getData){
    var abc=getData.val()
    stList.push(abc)
    fillTable()
})

function fillTable(){
    console.log('fired')
    var tab =document.getElementById('tab')
    console.log(stList)
    for(i=0; i<stList.length; i++){
        var tr=document.createElement('tr')
        

        var td=document.createElement('td')
        td.innerHTML=stList[i]['Cert No']
        tr.appendChild(td)
        
        var td=document.createElement("td")
         td.innerHTML=stList[i]['Cert Name']
         tr.appendChild(td)

         var td=document.createElement('td')
         td.innerHTML=stList[i]['CDC No']
         tr.appendChild(td)

         var td=document.createElement('td')
         td.innerHTML=stList[i]['CNIC No']
         tr.appendChild(td)
 
         var td=document.createElement('td')

         td.innerHTML=stList[i]['DOB']
         tr.appendChild(td)
       
         var td=document.createElement('td')
         td.innerHTML=stList[i]['Date Issue']
         tr.appendChild(td)

      
         var td=document.createElement('td')
         td.innerHTML=stList[i]['from']
         tr.appendChild(td)
        
         var td=document.createElement('td')
         td.innerHTML=stList[i]['to']
         tr.appendChild(td)

         var td=document.createElement('td')
         td.innerHTML=stList[i]['Valid Until']
         tr.appendChild(td)







        var td=document.createElement('td')

        var btn=document.createElement('button')
        btn.innerHTML="Print"
        btn.setAttribute('id',stList[i]['Cert No'])
        btn.setAttribute('onclick','getCertificate(this)')
        td.appendChild(btn)
        tr.appendChild(td)

        tab.appendChild(tr)

        var td=document.createElement('td')

        var btn=document.createElement('button')
        btn.innerHTML="Firebase"
        btn.setAttribute('id',stList[i]['Cert No'])
        btn.setAttribute('onclick','saveFirebase(this)')
        td.appendChild(btn)
        tr.appendChild(td)

        tab.appendChild(tr)

        

    }
}


function getCertificate(e) {
    window.open("form.html?cno="+e.id);
  }