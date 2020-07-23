var http = require('http'); //1. required htt"p"
const { data } = require('jquery');
var myname = function(){   //2. funct"i"on
  return "Here is my IP address";//3. use return to set the value of the valueB
};
async function callHttpbin() { //4. name is httpbi"n" //5. needs to be marked async to use await
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
      resolve(myips); // 6.resolve the ip as it comes in
     });
     }
    );
});

let result = await promise;
//console.log("promise", promise);
//console.log("result", result);
 return result; //7. needs to do something with result
}
( async function executeAsyncTask(){ // 8. needs to be async to use await
  const valueA =  await callHttpbin();
  const valueB = myname();
  console.log(valueB+": "+valueA)

} ());// 9. close function  // 10. tell function to self execute (or you could call it)