var orderData = {
    "Below 500": 20,
    "500-1000": 29,
    "1000-1500":30,
    "1500-2000":44,
    "above 2000":76,
};

var values=Object.values(orderData);
//console.log(values);
var total = values.reduce(function(p,n)
{return p+n;},0
);
//console.log(sum);
var i=0
var result = []
var keys = Object.keys(orderData);
keys.forEach(key=>{
   var value = orderData[key];
   value = (value/total)*100;
   var ele  =  {
        id:i+1,
        name:"Punjabi tadka",
        order:key, 
        orderProportion:value.toFixed(2)
    }
    i++
    result.push(ele)
})
console.log(result)