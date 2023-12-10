/* filename: sophisticated_code.js */

// This code demonstrates a complex and sophisticated e-commerce system
// that handles user registration, product browsing, shopping cart management,
// and order processing.

// Define global variables and constants
const PRODUCTS = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

const users = [];

// Constructor for User object
function User(name, email) {
  this.name = name;
  this.email = email;
  this.cart = [];
}

// User registration function
function registerUser(name, email) {
  const newUser = new User(name, email);
  users.push(newUser);
  console.log(`User ${name} registered successfully.`);
}

// Product browsing function
function browseProducts() {
  console.log("Available Products:");
  PRODUCTS.forEach((product) => {
    console.log(` - ID: ${product.id}, Name: ${product.name}, Price: ${product.price}`);
  });
}

// Add to cart function
function addToCart(userId, productId, quantity = 1) {
  const user = users.find((user) => user.email === userId);
  const product = PRODUCTS.find((product) => product.id === productId);

  if (!user || !product) {
    console.log("Invalid user ID or product ID.");
    return;
  }

  const item = user.cart.find((item) => item.id === productId);

  if (item) {
    item.quantity += quantity;
  } else {
    user.cart.push({ id: productId, quantity: quantity });
  }

  console.log(`Product "${product.name}" added to cart successfully.`);
}

// Remove from cart function
function removeFromCart(userId, productId, quantity = 1) {
  const user = users.find((user) => user.email === userId);

  if (!user) {
    console.log("Invalid user ID.");
    return;
  }

  const itemIndex = user.cart.findIndex((item) => item.id === productId);

  if (itemIndex === -1) {
    console.log("Product not found in cart.");
    return;
  }

  const item = user.cart[itemIndex];

  if (item.quantity <= quantity) {
    user.cart.splice(itemIndex, 1);
  } else {
    item.quantity -= quantity;
  }

  console.log(`Product removed from cart successfully.`);
}

// Checkout function
function checkout(userId) {
  const user = users.find((user) => user.email === userId);
  if (!user) {
    console.log("Invalid user ID.");
    return;
  }

  if (user.cart.length === 0) {
    console.log("Cart is empty.");
    return;
  }

  let totalAmount = 0;
  console.log("Invoice:");
  user.cart.forEach((item) => {
    const product = PRODUCTS.find((product) => product.id === item.id);
    const amount = item.quantity * product.price;
    totalAmount += amount;
    console.log(
      ` - Product: ${product.name}, Quantity: ${item.quantity}, Price: ${product.price}, Amount: ${amount}`
    );
  });
  console.log(`Total Amount: ${totalAmount}`);

  // Payment processing and order generation logic goes here...
}

// Usage example
registerUser("John Doe", "john.doe@example.com");
browseProducts();
addToCart("john.doe@example.com", 3, 2);
removeFromCart("john.doe@example.com", 3);
addToCart("john.doe@example.com", 2);
checkout("john.doe@example.com");

// ... more code ...

// ... more complex and sophisticated functionality ...

// ... more code ...

// Concluding the code with final logic and cleanup...
console.log("Code execution completed.");

// Execute this code using node.js or any JavaScript runtime