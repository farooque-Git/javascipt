const cart = ["shirt", "jubbah", "kurta"];

//this is in normal js Function
async function processOrder(cart) {
  try {
    const orderId = await createOrder(cart);
  } catch (error) {
    console.error(err);
  }
}

//arrow function
const processOrder = async (cart) => {
  try {
    const orderId = await createOrder(cart);
  } catch (error) {
    console.log(error);
  }
};


//then API Call so on so
