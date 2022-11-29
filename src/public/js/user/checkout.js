function checkout() {
    let myCart = JSON.parse(localStorage.getItem("myCart")) ?? []
    if (myCart.length !== 0) {
        showFromCheckOut()
    } else {
        let html = `<p style="color: green">You have no products to checkout</p>`
        $('#notification').html(html)
        setTimeout(() => {
            html = ''
            $('#notification').html(html)
        }, 1500)
    }
}

function showFromCheckOut() {
    $('#body').html(`
     <!-- Checkout Start -->
    <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-lg-8">
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Billing Address</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label>Phone</label>
                            <input class="form-control" type="number" placeholder="Phone" id="phone" required>
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Address</label>
                            <input class="form-control" type="text" placeholder="Address" id="address" required>
                        </div>       
                    </div>
                </div>
             
            </div>
            <div class="col-lg-4">
                <div class="mb-5">
                    <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Notification</span></h5>
                    <div class="bg-light p-30" id="notification">
                        
                    </div>
                </div>
                <div class="mb-5">
                    <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Payment</span></h5>
                    <div class="bg-light p-30">
                        <div class="form-group">
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" name="payment" id="paypal">
                                <label class="custom-control-label" for="paypal">Paypal</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" name="payment" id="directcheck">
                                <label class="custom-control-label" for="directcheck">Direct Check</label>
                            </div>
                        </div>
                        <div class="form-group mb-4">
                            <div class="custom-control custom-radio">
                                <input type="radio" class="custom-control-input" name="payment" id="banktransfer">
                                <label class="custom-control-label" for="banktransfer">Bank Transfer</label>
                            </div>
                        </div>
                        <button class="btn btn-block btn-primary font-weight-bold py-3" onclick="confirm()">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Checkout End -->
    `)
}

function confirm() {
    let myCart = JSON.parse(localStorage.getItem("myCart")) ?? []
    let address = $('#address').val()
    let phone = $('#phone').val()
    let account_merchant = myCart[0].account
    let products = []
    myCart.forEach(item => {
        let product = {
            productId: item.id,
            quantity: item.quantity,
            node: ''
        }
        products.push(product)

    })
    let newBill = {
        information: {
            address: address,
            phone: phone,
            account_merchant: account_merchant
        },
        products: products
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/confirm',
        data: JSON.stringify(newBill),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (message) => {
            localStorage.removeItem("myCart");
            console.log("message", message.newBill)
            let html = ""
            html = `<p style="color: green">${message.message}</p>
                    <p style="color: green">Navigate to home page in 3 seconds</p>`
            $('#notification').html(html)
            setTimeout(() => {
                showHome()
            }, 3000)

        }
    })
}

