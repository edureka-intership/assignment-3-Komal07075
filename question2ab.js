var orderData = {
    "Below 500": 20,
    "500-1000": 29,
    "1000-1500":30,
    "1500-2000":44,
    "above 2000":76,
};
var sum = 0;
const order = Object.values(orderData);
order.forEach(element => {
    sum=sum+element; 
    // console.log(sum)
});
console.log(sum);

// -------2b---------
var orderProportions = order.length;
console.log(orderProportions);