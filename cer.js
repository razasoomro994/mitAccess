var urlParams = new URLSearchParams(window.location.search);
//console.log(urlParams.get('cno'))
var cno= urlParams.get('cno')
getCertificate()
function getCertificate(){
    $.post("http://localhost:4001/mR/getCertificat",{id:cno},function(data,status){
            //console.log(data.length)
            console.log(JSON.parse(data))


       //     stList=JSON.parse(data)
     //       console.log(e.id)
            // for(i=0; i<data.length; i++){
            //    console.log(data[i])
            // }
        })
}



