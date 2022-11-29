function showProduct() {
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

    `)
    getAllProduct()
    getCategory()
}

function getAllProduct(){
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
            for (let i = 0; i < listProducts.products.length; i++) {
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

function showShop() {
    $('#body').html(`
<!-- Products Start -->
<div class="container-fluid pt-5 pb-3">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">List Shop</span>
    </h2>
    <div class="row px-xl-5" id="listShop">
    
    </div>
</div>
<!-- Products End -->
    `)
    getShop()
}