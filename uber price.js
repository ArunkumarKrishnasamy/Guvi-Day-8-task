// write a class to calculate uber price.
class price{
    constructor(destination){
        console.log(destination);
    }
    uberprice(distance){
        let price =10 *distance;
        return price;
    }
}
const myprice =new price("Chennai");
console.log(`Rs.${myprice.uberprice(20)}`);
// Output :Chennai  Rs.200