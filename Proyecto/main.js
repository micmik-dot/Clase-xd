const age = 45;
const hasCoupon = true;
const couponDiscount = 15;
const hasStudentId = false;

let price = 5000;
let discount = 0;

if (age < 12 ) {
    price = 0;
} else {

    if (age > 65) {
discount = 40;

  }

  if (hasStudentId && discount < 25) {
discount = 25;
 }
 if (hasCoupon && discount < couponDiscount)
{
    discount = couponDiscount;
}
price = price (price * discount / 100)

}
console.log ("El precio de su tiquete es" , price)