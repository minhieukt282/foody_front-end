showHomeAdmin()

function showHomeAdmin() {
    $('#body').html(`
    <div class="container-fluid">
    <div class="row px-xl-5">
        <div class="col-lg-8 table-responsive mb-5">
            <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">ADMIN</span>
            </h5>
            <div class="row px-xl-5" id="adminHome">
            </div>
        </div>
        <div class="col-lg-4">
            <div class="mb-5">
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Notification</span>
                </h5>
                <div class="bg-light p-30" id="notification" style="width: 100%; height: 100px;">

                </div>
            </div>
            <h5 class=" text-uppercase mb-3"></h5>
            <div class="bg-light p-30 mb-5" id="total">
                <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onclick="findProduct()">Best Products
                </button>
            </div>
        </div>
    </div>
</div>
    `)
}

function findProduct(){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/admin/products',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (products) => {
            let htmlProducts = ''
            console.log(products)
            for (let i = 0; i < 8; i++) {
                htmlProducts += `
                <div class="col-lg-3 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="public/img/product-2.jpg" alt="">
                    <div class="product-action">
                        <a class="btn btn-outline-dark btn-square" onclick="showDetails('${products[i].slug}')"><i class="fa fa-shopping-cart"></i></a>
                        <a class="btn btn-outline-dark btn-square" onclick="showDetails('${products[i].slug}')"><i class="fa fa-search"></i></a>
                    </div>
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" onclick="showDetails('${products[i].slug}')" >${products[i].name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>$${products[i].price} | </h5>
                        <h6 class="text-muted ml-2">
                            Sold ${products[i].quantitySold}
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
            $('#adminHome').html(htmlProducts);
            let htmlNotice = `<h6>Best 8 products</h6>`
            $('#notification').html(htmlNotice);

        }
    })
}