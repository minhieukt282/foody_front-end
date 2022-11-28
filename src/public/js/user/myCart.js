function showMyCart() {
    $('#body').html(`
    <!-- OrderDetails Start -->
<div class="container-fluid">
    <div class="row px-xl-5">
        <div class="col-lg-8 table-responsive mb-5">
            <table class="table table-light table-borderless table-hover text-center mb-0">
                <thead class="thead-dark">
                <tr>
                    <th>Products</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
                </thead>
               <tbody class="align-middle" id="myCart">
                
                </tbody>
            </table>
        </div>
         <div class="col-lg-4">
           
                <div class="input-group" id="notification">
                    <h6 class="form-control border-0 p-4" >Notification: non</h6>
                </div>
                <h5 class=" text-uppercase mb-3"></h5>
          
                <div class="input-group">
                    <input type="text" class="form-control border-0 p-4" placeholder="Coupon Code">
                    <div class="input-group-append">
                        <button class="btn btn-primary">Apply Coupon</button>
                    </div>
                </div>
             <h5 class=" text-uppercase mb-3"></h5>
            <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">OrderDetails Summary</span>
            </h5>
            <div class="bg-light p-30 mb-5" id="total">
                    
            </div>
        </div>
    </div>
</div>
<!-- OrderDetails End -->
    `)
    getMyCart()
    getTotal()
}

function getMyCart() {
    let myCart = JSON.parse(localStorage.getItem("myCart")) ?? []
    let htmlMyCart = ''
    myCart.forEach((item, index) => {
        htmlMyCart += `
        <tr>
             <td class="align-middle">${item.name}</td>
             <td class="align-middle">$${item.price}</td>
             <td class="align-middle">
                  <div class="input-group quantity mx-auto" style="width: 100px;">
                       <input type="number" min="1" class="form-control form-control-sm bg-secondary border-0 text-center"
                                       value="${item.quantity}">
                  </div>
             </td>
             <td class="align-middle">$${item.price * item.quantity}</td>
             <td class="align-middle">
                 <a class="btn btn-sm btn-danger" onclick="removeProduct('${index}')"><i class="fas fa-times"></i>
                 </a>
             </td>
        </tr>
        `
    })
    $('#myCart').html(htmlMyCart)
}

function getTotal() {
    let myCart = JSON.parse(localStorage.getItem("myCart")) ?? []
    let htmlTotal = ''
    let total = 0
    myCart.forEach(item => {
        total += item.price * item.quantity
    })
    htmlTotal += `
    <div class="border-bottom pb-2">
                        <div class="d-flex justify-content-between mb-3">
                            <h6>Subtotal</h6>
                            <h6>$${total}</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="font-weight-medium">Shipping</h6>
                            <h6 class="font-weight-medium">0</h6>
                        </div>
                    </div>
                    <div class="pt-2">
                        <div class="d-flex justify-content-between mt-2">
                            <h5>Total</h5>
                            <h5>$${total}</h5>   
                        </div>
                        <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onclick="checkout()">Checkout
                        </button>
                    </div>
    `
    $('#total').html(htmlTotal)
}

// function checkout() {
//     let myCart = JSON.parse(localStorage.getItem("myCart")) ?? []
//     console.log(myCart)
// }

function removeProduct(index) {
    let myCart = JSON.parse(localStorage.getItem("myCart")) ?? []
    console.log(myCart)
    myCart.splice(index, 1)
    localStorage.setItem('myCart', JSON.stringify(myCart))
    showMyCart()
    let html = `<h6 class="form-control border-0 p-4" >Notification: Remove done</h6>`
    $('#notification').html(html)
    setTimeout(() => {
        html = ` <h6 class="form-control border-0 p-4" >Notification: non</h6>`
        $('#notification').html(html)
    }, 500)

}