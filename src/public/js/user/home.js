showHome()

function showHome() {

    $('#body').html(`
 <!-- Categories Start -->
<div class="container-fluid pt-5">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span
            class="bg-secondary pr-3">Categories</span></h2>
    <div class="row px-xl-5 pb-3" id="category">
       
    </div>
</div>
<!-- Categories End -->

<!-- Products Start -->
<div class="container-fluid pt-5 pb-3">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Products</span>
    </h2>
    <div class="row px-xl-5" id="listProducts">
    </div>
</div>
<!-- Products End -->

<!-- Products Start -->
<div class="container-fluid pt-5 pb-3">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">List Shop</span>
    </h2>
    <div class="row px-xl-5" id="listShop">
    
    </div>
</div>
<!-- Products End -->
    `)
    getProduct()
    getShop()
    getCategory()
}

function getCategory() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/category',
        headers: {
            'Content-Type': 'application/json'
        },
        success: (category) => {
            let htmlCategory = ''
            category.forEach(item => {
                htmlCategory += `
                <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <a class="text-decoration-none" onclick="getProductByCategory('${item._id}')">
                <div class="cat-item d-flex align-items-center mb-4">
                    <div class="overflow-hidden" style="width: 100px; height: 100px;">
                        <img class="img-fluid" src="public/img/cat-1.jpg" alt="">
                    </div>
                    <div class="flex-fill pl-3">
                        <h6>${item.category_name}</h6>
                        <small class="text-body">100 Products</small>
                    </div>
                </div>
            </a>
        </div>`
            })
            $('#category').html(htmlCategory);
        }
    })
}

function getProductByCategory(id) {
    console.log(id)
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/category/' + id,
        headers: {
            'Content-Type': 'application/json'
        },
        success: (products) => {
            let htmlProducts = ''
            for (let i = 0; i < products.length; i++) {
                htmlProducts += `
                <div class="col-lg-2 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="public/img/product-2.jpg" alt="">
                    <div class="product-action">
                        <a class="btn btn-outline-dark btn-square" onclick="showDetails('${products[i].product_id.slug}')"><i class="fa fa-shopping-cart"></i></a>
                        <a class="btn btn-outline-dark btn-square" onclick="showDetails('${products[i].product_id.slug}')"><i class="fa fa-search"></i></a>
                    </div>
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" onclick="showDetails('${products[i].product_id.slug}')" >${products[i].product_id.name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>$${products[i].product_id.price} | </h5>
                        <h6 class="text-muted ml-2">
                            Sold ${products[i].product_id.quantitySold}
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
        </div>`
            }
            $('#listProducts').html(htmlProducts);
        }
    })
}

function getProduct() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        success: (listProducts) => {
            let htmlProducts = ''
            // console.log(listProducts.products)
            for (let i = 0; i < 12; i++) {
                htmlProducts += `
                <div class="col-lg-2 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="public/img/product-2.jpg" alt="">
                    <div class="product-action">
                        <a class="btn btn-outline-dark btn-square" onclick="showDetails('${listProducts.products[i].slug}')"><i class="fa fa-shopping-cart"></i></a>
                        <a class="btn btn-outline-dark btn-square" onclick="showDetails('${listProducts.products[i].slug}')"><i class="fa fa-search"></i></a>
                    </div>
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" onclick="showDetails('${listProducts.products[i].slug}')" >${listProducts.products[i].name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>$${listProducts.products[i].price} | </h5>
                        <h6 class="text-muted ml-2">
                            Sold ${listProducts.products[i].quantitySold}
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
        </div>`
            }
            $('#listProducts').html(htmlProducts);
        }
    })
}

function getShop() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/shops',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        success: (listShop) => {
            let htmlShops = ''
            // console.log(listShop.shops)
            listShop.shops.forEach(item => {
                htmlShops += `
                <div class="col-lg-2 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="public/img/product-2.jpg" alt="">
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" onclick="showShopDetails('${item.slug}')" style="color: sandybrown">${item.nameShop}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h6>${item.information}</h6>
                    </div>
                </div>
            </div>
        </div>
                `
            })
            $('#listShop').html(htmlShops);
        }
    })
}

