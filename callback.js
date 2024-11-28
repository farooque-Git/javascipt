
const cart = ['pajama', 'shirt', 'jubbah']

//  CALLBACK HELL
// createOrder(cart, function(orderId){
//   proceedToPayment(orderId, function(paymentInfo){
//    orderSummary(paymentInfo, function(ShowOlderProduct){
//        product(ShowOlderProduct)
// }
// })
// 
// })
// to avoid this we are using promise bcz in nested callback
// have only dependent function to each other

const promise = createOrder(cart)

promise.then(function(orderId){
  proceedToPayment(orderId)
})

//fetch is basically API call from browser
// fetch()

const API = "https://www.demo-api.com"

const user = fetch(API)