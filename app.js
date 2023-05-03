// The Goods //
const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0,
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0,
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0,
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 2,
  quantity: 0,
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0,
}, {
  name: 'Gummy Worms',
  price: 3,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0,
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0,
}]



// Toppings //
function buySprinkles() {
  console.log('buy Sprinkles')
  let foundToppings = toppings[0]
  foundToppings.quantity++
  drawCart()
  console.log(foundToppings)
}

function buyChocolateChips() {
  console.log('buy Chocolate Chips')
  let foundToppings = toppings[1]
  foundToppings.quantity++
  drawCart()
  console.log(foundToppings)
}
function buyGummyWorms() {
  console.log('buy Gummy Worms')
  let foundToppings = toppings[2]
  foundToppings.quantity++
  drawCart()
  console.log(foundToppings)
}

//  Vessels //
function buyWaffleCone() {
  console.log(buyWaffleCone)
}
function buyWaffleBowl() {
  console.log(buyWaffleBowl)
}
function buyDippedCone() {
  console.log(buyDippedCone)
}

// Flavors //
function buyVanilla() {
  console.log(buyVanilla)
}
function buyChocolate() {
  console.log(buyChocolate)
}
function buyStrawberry() {
  console.log(buyStrawberry)
}
function buyCookieDough() {
  console.log(buyCookieDough)
}
function buyPistachio() {
  console.log(buyPistachio)
}
function buyFunfetti() {
  console.log(buyFunfetti)
}


// Checkout //
function drawCart() {
  console.log('draw cart')
  let board = ''
  toppings.forEach(t => {
    if (t.quantity > 0) {
      board += `
      <div class="row">
      <div class="col-3"> <p>${t.name}</p> </div>
        <div class="col-3"><p>QTY: ${t.quantity}</p> </div>
      <div class="col-3"><p>PRICE: ${t.price}</p> </div>
            </div>`
    }
  })
  document.getElementById('cart').innerHTML = board
  drawTotal()
}

function drawTotal() {
  let total = 0
  toppings.forEach(t => t.quantity > 0 ? total += t.quantity * t.price : total += 0)
  console.log(total, 'total');

  document.getElementById('total').innerText = total.toString()
}