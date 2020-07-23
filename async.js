var http = require('http'); //required htt"p"
const { data } = require('jquery');
var myname = function(){   //funct"i"on
  return "Here is my IP address";//use return to set the value of the valueB
};
async function callHttpbin() { //name is httpbi"n" //needs to be marked async to use await
  let promise = new Promise((resolve, reject) => {
    http.get(
     'http://httpbin.org/ip',
     function(response) {
      var str="";
      response.setEncoding('utf8');
      response.on('data', function(data){
          
      str += data;
     });
     response.on('end', function() {
      var result = JSON.parse(str);
      myips = result.origin;
      resolve(myips); //resolve the ip as it comes in
     });
     }
    );
});

let result = await promise;
//console.log("promise", promise);
//console.log("result", result);
 return result; //needs to do something with result
}
( async function executeAsyncTask(){ //needs to be async to use await
  const valueA =  await callHttpbin();
  const valueB = myname();
  console.log(valueB+": "+valueA)

} ());//close function  //tell function to self execute (or you could call it)