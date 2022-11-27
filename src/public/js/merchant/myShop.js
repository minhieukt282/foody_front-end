function showMyShop() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/m/shops/info',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (data) => {
            // console.log(data)
            let htmlDetails = ''
            htmlDetails += `
                <!-- Shop Detail Start -->
                <div class="container-fluid pb-5">
                    <div class="row px-xl-5">
                        <div class="col-lg-5 mb-30">
                            <div id="product-carousel" class="carousel slide" data-ride="carousel"  >
                                <div class="carousel-inner bg-light">
                                    <div class="carousel-item active">
                                        <img class="w-100 h-100" src="public/img/product-1.jpg" alt="Image">
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-lg-7 h-auto mb-30">                               
                               
                             <div class="form-outline mb-4">
                             <label class="form-label" >Shop's name</label>
                                <input type="text" id="name" class="form-control form-control-lg"
                                      value="${data.infoShop[0].nameShop}">
                            </div>
                            <div class="form-outline mb-4">
                             <label class="form-label" >Address</label>
                                <input type="text" id="address" class="form-control form-control-lg"
                                      value="${data.infoShop[0].address}" >
                            </div>
                            <div class="form-outline mb-4">
                             <label class="form-label" >Information</label>
                                <input type="text" id="information" class="form-control form-control-lg"
                                      value="${data.infoShop[0].information}" >
                            </div>
                            <div id="body-notification"></div>
                            <div class="pt-1 mb-4">
                                <button class="btn btn-dark btn-lg btn-block" onclick="updateShop('${data.infoShop[0].slug}')" >Update</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Shop Detail End -->
                 <!-- Products Start -->
                    <div class="container-fluid py-5">
                        <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">My Products</span></h2>
                         <div class="row px-xl-5">
            `
            data.products.forEach(item => {
                htmlDetails += `
                <div class="col-lg-2 col-md-4 col-sm-6 pb-1">
            <div class="product-item bg-light mb-4">
                <div class="product-img position-relative overflow-hidden">
                    <img class="img-fluid w-100" src="public/img/product-1.jpg" alt="">
                    <div class="product-action">
                        <a class="btn btn-outline-dark btn-square" onclick="showProductDetails('${item.slug}')"><i class="fa fa-cog"></i></a>
                        <a class="btn btn-outline-dark btn-square" onclick="delProduct('${item.slug}')"><i class="fas fa-trash-alt"></i></a>
                    </div>
                </div>
                <div class="text-center py-4">
                    <a class="h6 text-decoration-none text-truncate" onclick="showProductDetails('${item.slug}')" >${item.name}</a>
                    <div class="d-flex align-items-center justify-content-center mt-2">
                        <h5>$${item.price} | </h5>
                        <h6 class="text-muted ml-2">
                            Sold ${item.quantitySold}
                        </h6>
                    </div>
                    <div>
                       <p>Status: ${item.status}</p>
                    </div>
                </div>
            </div>
        </div>                  
               `
            })
            htmlDetails += `</div>
                </div>
                <!-- Products End -->`
            $('#body').html(htmlDetails)
        }
    })
}

function delProduct(slug) {
    console.log(slug)
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/m/delete/' + slug,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: () => {
            showMyShop()
        }
    })
}

function updateShop(slug) {
    let nameShop = $('#name').val();
    let address = $('#address').val();
    let information = $('#information').val();
    let newInfo = {
        nameShop: nameShop,
        address: address,
        information: information
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/m/update/shops/' + slug,
        data: JSON.stringify(newInfo),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (message) => {
            let notification = `<h6 style="color: green">${message.message}</h6>`
            $('#body-notification').html(notification);
        }
    })
}

function showProductDetails(slug){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/details/' + slug,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (product) => {
            // console.log(product.products)
            let htmlDetails = ''
            htmlDetails += `
            <!-- Shop Detail Start -->
                <div class="container-fluid pb-5">
                    <div class="row px-xl-5">
                        <div class="col-lg-5 mb-30">
                            <div id="product-carousel" class="carousel slide" data-ride="carousel"  >
                                <div class="carousel-inner bg-light">
                                    <div class="carousel-item active">
                                        <img class="w-100 h-100" src="public/img/product-1.jpg" alt="Image">
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div class="col-lg-7 h-auto mb-30">
                             <div class="form-outline mb-4">
                             <label class="form-label" >Product's name</label>
                                <input type="text" id="nameProduct" class="form-control form-control-lg"
                                      value="${product.products[0].name}">
                            </div>
                            <div class="form-outline mb-4">
                             <label class="form-label" >Description</label>
                                <input type="text" id="description" class="form-control form-control-lg"
                                      value="${product.products[0].description}" >
                            </div>
                            <div class="form-outline mb-4">
                             <label class="form-label" >Price</label>
                                <input type="number" id="price" class="form-control form-control-lg"
                                      value="${product.products[0].price}" >
                            </div>
                            <div class="form-outline mb-4">
                             <label class="form-label" >Discount</label>
                                <input type="number" id="discount" class="form-control form-control-lg"
                                      value="${product.products[0].discount}" >
                            </div>
                            <label class="control-label">Product's status</label>
                            <select class="form-control input-sm" id="status">
                                <option value="true">Available</option>
                                <option value="false">Unavailable</option>
                            </select>
                            <p class="help-block text-danger"></p>
                            <div id="message"></div>
                            <div class="pt-1 mb-4">
                                <button class="btn btn-dark btn-lg btn-block" onclick="updateProduct('${product.products[0].slug}')">Update</button>
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

function updateProduct(slug){
    let name = $('#nameProduct').val()
    let description = $('#description').val()
    let price = $('#price').val()
    let discount = $('#discount').val()
    let status = $('#status').val()
    let newProduct = {
        name: name,
        description: description,
        price: price,
        discount: discount,
        status: status
    }
    console.log(newProduct, slug)
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/m/update/' + slug,
        data: JSON.stringify(newProduct),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (message) => {
            let notification = `<h6 style="color: green">${message.message}</h6>`
            $('#message').html(notification);
        }
    })
}