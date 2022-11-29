function showDetails(slug) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/products/' + slug,
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        success: (product) => {
            console.log(product.products)
            let htmlDetails = ''
            htmlDetails += `
            <!-- Breadcrumb Start -->
                <div class="container-fluid">
                    <div class="row px-xl-5">
                        <div class="col-12">
                            <nav class="breadcrumb bg-light mb-30">
                                <a class="breadcrumb-item text-dark" onclick="showHome()">Home</a>
                                <a class="breadcrumb-item text-dark" href="#">Shop</a>
                                <span class="breadcrumb-item active">${product.products[0].name}</span>
                            </nav>
                        </div>
                    </div>
                </div>
            <!-- Breadcrumb End -->
            <!-- Shop Detail Start -->
                <div class="container-fluid pb-5">
                    <div class="row px-xl-5">
                        <div class="col-lg-5 mb-30">
                            <div id="product-carousel" class="carousel slide" data-ride="carousel"  >
                                <div class="carousel-inner bg-light">
                                    <div class="carousel-item active">
                                        <img class="w-100 h-100" src="public/img/product-1.jpg" alt="Image">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="w-100 h-100" src="public/img/product-2.jpg" alt="Image">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="w-100 h-100" src="public/img/product-3.jpg" alt="Image">
                                    </div>
                                    <div class="carousel-item">
                                        <img class="w-100 h-100" src="public/img/product-4.jpg" alt="Image">
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                    <i class="fa fa-2x fa-angle-left text-dark"></i>
                                </a>
                                <a class="carousel-control-next" href="#product-carousel" data-slide="next">
                                    <i class="fa fa-2x fa-angle-right text-dark"></i>
                                </a>
                            </div>
                        </div>
            
                        <div class="col-lg-7 h-auto mb-30">
                            <div class="h-100 bg-light p-30">
                                <h3>${product.products[0].name}</h3>
                                <div class="d-flex mb-3">
                                    <div class="text-primary mr-2">
                                        <small class="fas fa-star"></small>
                                        <small class="fas fa-star"></small>
                                        <small class="fas fa-star"></small>
                                        <small class="fas fa-star-half-alt"></small>
                                        <small class="far fa-star"></small>
                                    </div>
                                    <small class="pt-1">(99 Reviews) | Sold ${product.products[0].quantitySold}</small>
                                </div>
                                <h3 class="font-weight-semi-bold mb-4" >$${product.products[0].price}</h3>
                                <input type="hidden" value="${product.products[0]._id}" id="productId">
                                <input type="hidden" value="${product.products[0].name}" id="name">
                                <input type="hidden" value="${product.products[0].price}" id="price">
                                <input type="hidden" value="${product.products[0].account._id}" id="accountShop">
                                
                                <p class="mb-4">Description: ${product.products[0].description}</p>
                                <p class="mb-4">Available: ${product.products[0].status}</p>
                                <p class="mb-4" id="notification">Notification: non </p>
                                <div class="d-flex align-items-center mb-4 pt-2">
                                    <div class="input-group quantity mr-3" style="width: 130px;">
                                        <input type="text" class="form-control bg-secondary border-0 text-center" value="1" id="quantity">
                                    </div>
                                    <button class="btn btn-primary px-3" onclick="addMyCart()"><i class="fa fa-shopping-cart mr-1"></i> Add To
                                        Cart</button>
                                </div>
                                <div class="d-flex pt-2">
                                    <strong class="text-dark mr-2">Share on:</strong>
                                    <div class="d-inline-flex">
                                        <a class="text-dark px-2" href="">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a class="text-dark px-2" href="">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a class="text-dark px-2" href="">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                        <a class="text-dark px-2" href="">
                                            <i class="fab fa-pinterest"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row px-xl-5">
                        <div class="col">
                            <div class="bg-light p-30">
                                <div class="nav nav-tabs mb-4">
                                    <a class="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                                    <a class="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a>
                                </div>
                                <div class="tab-content">
                                    <div class="tab-pane fade show active" id="tab-pane-1">
                                        <h4 class="mb-3">Description</h4>
                                        <p>${product.products[0].description}</p>
                                    </div>
                                    <div class="tab-pane fade" id="tab-pane-3">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="media mb-4">
                                                    <img src="img/user.jpg" alt="Image" class="img-fluid mr-3 mt-1" style="width: 45px;">
                                                    <div class="media-body">
                                                        <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                                        <div class="text-primary mb-2">
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star"></i>
                                                            <i class="fas fa-star-half-alt"></i>
                                                            <i class="far fa-star"></i>
                                                        </div>
                                                        <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <h4 class="mb-4">Leave a review</h4>
                                                <small>Your email address will not be published. Required fields are marked *</small>
                                                <div class="d-flex my-3">
                                                    <p class="mb-0 mr-2">Your Rating * :</p>
                                                    <div class="text-primary">
                                                        <i class="far fa-star"></i>
                                                        <i class="far fa-star"></i>
                                                        <i class="far fa-star"></i>
                                                        <i class="far fa-star"></i>
                                                        <i class="far fa-star"></i>
                                                    </div>
                                                </div>
                                                <form>
                                                    <div class="form-group">
                                                        <label for="message">Your Review *</label>
                                                        <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="name">Your Name *</label>
                                                        <input type="text" class="form-control" id="name">
                                                    </div>
                                                    <div class="form-group">
                                                        <label for="email">Your Email *</label>
                                                        <input type="email" class="form-control" id="email">
                                                    </div>
                                                    <div class="form-group mb-0">
                                                        <input type="submit" value="Leave Your Review" class="btn btn-primary px-3">
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Shop Detail End -->
            `
            $('#body').html(htmlDetails)
        }
    })
}

function addMyCart() {
    let myCart = JSON.parse(localStorage.getItem("myCart")) ?? []
    let id = $('#productId').val()
    let name = $('#name').val()
    let price = $('#price').val()
    let quantity = $('#quantity').val()
    let account = $('#accountShop').val()
    let addProducts = {
        id: id,
        name: name,
        price: price,
        quantity: quantity,
        account: account
    }
    console.log(addProducts)
    let checkShop = true
    for (let i = 0; i < myCart.length; i++) {
        if (myCart[i].account !== addProducts.account){
            checkShop = false
        }
    }
    if (checkShop){
        let status = false
        for (let i = 0; i < myCart.length; i++) {
            if (myCart[i].id === addProducts.id) {
                myCart[i].quantity = +myCart[i].quantity + +addProducts.quantity
                status = true
            }
        }
        if (status) {
            localStorage.setItem('myCart', JSON.stringify(myCart))
        } else {
            myCart.push(addProducts)
            localStorage.setItem('myCart', JSON.stringify(myCart))
        }
        let html = `<h6 class="mb-4" style="color: green">Notification: Add to cart done </h6>`
        $('#notification').html(html)
        setTimeout(() => {
            html = `<p class="mb-4">Notification: non </p>`
            $('#notification').html(html)
        }, 500)
    } else {
        let html = `<h6 class="mb-4" style="color: green">Notification: Delete products in your cart then add </h6>`
        $('#notification').html(html)
        setTimeout(() => {
            html = `<p class="mb-4">Notification: non </p>`
            $('#notification').html(html)
        }, 500)
    }
}

function showShopDetails(slug) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/shops/' + slug,
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        success: (shops) => {
            console.log(shops.details)
            let htmlDetails = ''
            htmlDetails += `
            <!-- Breadcrumb Start -->
                <div class="container-fluid">
                    <div class="row px-xl-5">
                        <div class="col-12">
                            <nav class="breadcrumb bg-light mb-30">
                                <a class="breadcrumb-item text-dark" onclick="showHome()">Home</a>
                                <a class="breadcrumb-item text-dark" href="#">${shops.details.shop[0].nameShop}</a>
                            </nav>
                        </div>
                    </div>
                </div>
            <!-- Breadcrumb End -->
            <!-- Shop Detail Start -->
                <div class="container-fluid pb-5">
                    <div class="row px-xl-5">
                        <div class="col-lg-5 mb-30">
                            <div id="product-carousel" class="carousel slide" data-ride="carousel"  >
                                <div class="carousel-inner bg-light">
                                    <div class="carousel-item active">
                                        <img class="w-100 h-100" src="public/img/product-2.jpg" alt="Image">
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-lg-7 h-auto mb-30">
                            <div class="h-100 bg-light p-30">
                                <h3>${shops.details.shop[0].nameShop}</h3>
                                <h6 class="font-weight-semi-bold mb-4">Address: ${shops.details.shop[0].address}</h6>
                                <h5 class="mb-4">${shops.details.shop[0].information}</h5>
<!--                                <div class="d-flex align-items-center mb-4 pt-2">-->
<!--                                    <div class="input-group quantity mr-3" style="width: 130px;">-->
<!--                                        <div class="input-group-btn">-->
<!--                                            <button class="btn btn-primary btn-minus">-->
<!--                                                <i class="fa fa-minus"></i>-->
<!--                                            </button>-->
<!--                                        </div>-->
<!--                                        <input type="text" class="form-control bg-secondary border-0 text-center" value="1">-->
<!--                                        <div class="input-group-btn">-->
<!--                                            <button class="btn btn-primary btn-plus">-->
<!--                                                <i class="fa fa-plus"></i>-->
<!--                                            </button>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <button class="btn btn-primary px-3"><i class="fa fa-shopping-cart mr-1"></i> Add To-->
<!--                                        Cart</button>-->
<!--                                </div>-->
                                <div class="d-flex pt-2">
                                    <strong class="text-dark mr-2">Share on:</strong>
                                    <div class="d-inline-flex">
                                        <a class="text-dark px-2" href="">
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a class="text-dark px-2" href="">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a class="text-dark px-2" href="">
                                            <i class="fab fa-linkedin-in"></i>
                                        </a>
                                        <a class="text-dark px-2" href="">
                                            <i class="fab fa-pinterest"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Shop Detail End -->
                <!-- Products Start -->
                    <div class="container-fluid py-5">
                        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Shop's Products</span></h2>
                         <div class="row px-xl-5" id="shopProduct">
    
                         </div>
                    </div>
                <!-- Products End -->
            `
            $('#body').html(htmlDetails)
        }
    })
    getShopProduct(slug)
}

function getShopProduct(slug) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/shops/' + slug,
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        success: (shops) => {
            console.log("detils", shops.details)
            let htmlDetails = ''
            shops.details.products.forEach(item => {
                htmlDetails += `
                <div class="col-lg-2 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="public/img/product-2.jpg" alt="">
                    <div class="product-action">
                        <a class="btn btn-outline-dark btn-square" onclick="showDetails('${item.slug}')"><i class="fa fa-shopping-cart"></i></a>
                        <a class="btn btn-outline-dark btn-square" onclick="showDetails('${item.slug}')"><i class="fa fa-search"></i></a>
                    </div>
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" onclick="showDetails('${item.slug}')" >${item.name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>$${item.price}</h5>
                        <h6 class="text-muted ml-2">
                            Sold ${item.quantitySold}
                        </h6>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mb-1">
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small class="fa fa-star text-primary mr-1"></small>
                        <small>(99)</small>
                    </div>
                </div>
            </div>
        </div>
            `
            })
            $('#shopProduct').html(htmlDetails)
        }
    })
}