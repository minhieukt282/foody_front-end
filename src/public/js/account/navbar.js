checkNavbar()

function checkNavbar() {
    let token = localStorage.getItem('token')
    let role = +localStorage.getItem('role')
    if (token) {
        if (role === 2) {
            $('#navbar').html(`
    <!-- Topbar Start -->
<div class="container-fluid">
    <div class="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div class="col-lg-4">
            <a class="text-decoration-none" onclick="showHomeAdmin()">
                <span class="h1 text-uppercase text-primary bg-dark px-2">Wel</span>
                <span class="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Admin</span>
            </a>
        </div>
        <div class="col-lg-4 col-6 text-left">
        
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for products" id="keyWord" >
                    <div class="input-group-append">
                            <button style="border: hidden">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                            </button>
                    </div>
                </div>
            
        </div>
        <div class="col-lg-4 col-6 text-right">
                <div class="d-inline-flex align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-light dropdown-toggle" onclick="logout()">Logout</button>
                    </div>
                </div>
        </div>
    </div>
</div>
<!-- Topbar End -->

<!-- Navbar Start -->
<div class="container-fluid bg-dark mb-30">
    <div class="row px-xl-5">
        <div class="col-lg-4 d-none d-lg-block">
        </div>
        <div class="col-lg-8">
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav mr-auto py-0">
                        <a onclick="showHomeAdmin()" class="nav-item nav-link active">Home</a>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown">Member<i
                                    class="fa fa-angle-down mt-1"></i></a>
                            <div class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                <a onclick="showMember('MERCHANTS')" class="dropdown-item">Merchants</a>
                                <a onclick="showMember('USERS')" class="dropdown-item">Users</a>
                            </div>
                        </div>
                        
                    </div>
                    <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
                        <a onclick="adminNotification()" class="btn px-0 ml-3">
                            <i class="fa fa-bell text-primary"></i>
                            <span class="badge text-secondary border border-secondary rounded-circle"
                                  style="padding-bottom: 2px;"></span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
<!-- Navbar End -->
    `)
        } else if (role === 1) {
            $('#navbar').html(`
    <!-- Topbar Start -->
<div class="container-fluid">
    <div class="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div class="col-lg-4">
            <a class="text-decoration-none" onclick="showHomeMerchant()">
                <span class="h1 text-uppercase text-primary bg-dark px-2">Wel</span>
                <span class="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Merchant</span>
            </a>
        </div>
        <div class="col-lg-4 col-6 text-left">
        
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for products" id="keyWord" >
                    <div class="input-group-append">
                            <button style="border: hidden">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                            </button>
                    </div>
                </div>
            
        </div>
        <div class="col-lg-4 col-6 text-right">
                <div class="d-inline-flex align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-light dropdown-toggle" onclick="logout()">Logout</button>
                    </div>
                </div>
        </div>
    </div>
</div>
<!-- Topbar End -->

<!-- Navbar Start -->
<div class="container-fluid bg-dark mb-30">
    <div class="row px-xl-5">
        <div class="col-lg-4 d-none d-lg-block">
        </div>
        <div class="col-lg-8">
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav mr-auto py-0">
                        <a onclick="showHomeMerchant()" class="nav-item nav-link active">Home</a>
                        <a onclick="showMyShop()" class="nav-item nav-link">My Shop</a>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown">Create<i
                                    class="fa fa-angle-down mt-1"></i></a>
                            <div class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                <a onclick="showCreateShop()" class="dropdown-item">New Shop</a>
                                <a onclick="showCreateProduct()" class="dropdown-item">New Products</a>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
                        <a onclick="notification()" class="btn px-0 ml-3">
                            <i class="fa fa-bell text-primary"></i>
                            <span class="badge text-secondary border border-secondary rounded-circle"
                                  style="padding-bottom: 2px;"></span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
<!-- Navbar End -->
    `)
        } else {
            $('#navbar').html(`
    <!-- Topbar Start -->
<div class="container-fluid">
    <div class="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div class="col-lg-4">
            <a class="text-decoration-none" onclick="showHome()">
                <span class="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                <span class="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
            </a>
        </div>
        <div class="col-lg-4 col-6 text-left">
          
                <div class="input-group">
                   <input type="text" class="form-control" placeholder="Search for products" id="keyWord" >
                    <div class="input-group-append">
                            <button onclick="searchProduct()" style="border: hidden">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                            </button>
                    </div>
                </div>
            
        </div>
        <div class="col-lg-4 col-6 text-right">
                <div class="d-inline-flex align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-light dropdown-toggle" onclick="logout()">Logout</button>
                    </div>
                </div>
        </div>
    </div>
</div>
<!-- Topbar End -->

<!-- Navbar Start -->
<div class="container-fluid bg-dark mb-30">
    <div class="row px-xl-5">
        <div class="col-lg-4 d-none d-lg-block">
        </div>
        <div class="col-lg-8">
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                <a onclick="showHome()" class="text-decoration-none d-block d-lg-none">
                    <span class="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                    <span class="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav mr-auto py-0">
                        <a onclick="showHome()" class="nav-item nav-link active">Home</a>
                        <a onclick="showProduct()" class="nav-item nav-link">Products</a>
                        <a class="nav-item nav-link">Food</a>
                        <a class="nav-item nav-link">Drink</a>
                        <a onclick="showShop()" class="nav-item nav-link">Shops</a>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown">My cart <i
                                    class="fa fa-angle-down mt-1"></i></a>
                            <div class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                <a onclick="showMyCart()" class="dropdown-item">My cart</a>
                                <a onclick="showMyHistory()" class="dropdown-item">Hisory</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown">Account <i
                                    class="fa fa-angle-down mt-1"></i></a>
                            <div class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                <a onclick="upgradeAccount()" class="dropdown-item">Upgrade</a>
                                
                            </div>
                        </div>
                        
                    </div>
                    <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
                    
                        <a class="btn px-0 ml-3" onclick="showMyNotice()">
                            <i class="fa fa-bell text-primary"></i>
                            <span class="badge text-secondary border border-secondary rounded-circle"
                                  style="padding-bottom: 2px;"></span>
                        </a>
                        <a class="btn px-0 ml-3" onclick="showMyCart()">
                            <i class="fas fa-shopping-cart text-primary"></i>
                            <span class="badge text-secondary border border-secondary rounded-circle"
                                  style="padding-bottom: 2px;"></span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
<!-- Navbar End -->
    `)
        }
    } else {
        $('#navbar').html(`
    <!-- Topbar Start -->
<div class="container-fluid">
    <div class="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
        <div class="col-lg-4">
            <a class="text-decoration-none" onclick="showHome()">
                <span class="h1 text-uppercase text-primary bg-dark px-2">Multi</span>
                <span class="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
            </a>
        </div>
        <div class="col-lg-4 col-6 text-left">
          
                <div class="input-group">
                   <input type="text" class="form-control" placeholder="Search for products" id="keyWord" >
                    <div class="input-group-append">
                            <button onclick="searchProduct()" style="border: hidden">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                            </button>
                    </div>
                </div>
          
        </div>
        <div class="col-lg-4 col-6 text-right">

                <div class="d-inline-flex align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-light dropdown-toggle" onclick="showLogin()">Login</button>
                        <button type="button" class="btn btn-sm btn-light dropdown-toggle" onclick="showRegister()">Register</button>
                    </div>
                </div>

        </div>
    </div>
</div>
<!-- Topbar End -->

<!-- Navbar Start -->
<div class="container-fluid bg-dark mb-30">
    <div class="row px-xl-5">
      <div class="col-lg-4 d-none d-lg-block">
        </div>
        <div class="col-lg-8">
            <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                <a onclick="showHome()" class="text-decoration-none d-block d-lg-none">
                    <span class="h1 text-uppercase text-dark bg-light px-2">Multi</span>
                    <span class="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav mr-auto py-0">
                        <a onclick="showHome()" class="nav-item nav-link active">Home</a> 
                        <a onclick="showProduct()" class="nav-item nav-link">Products</a>
                        <a class="nav-item nav-link">Food</a>
                        <a class="nav-item nav-link">Drink</a>
                        <a onclick="showShop()" class="nav-item nav-link">Shops</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
<!-- Navbar End -->
    `)
    }
}

//fix search
function searchProduct() {
    let keyWord = $('#keyWord').val()
    let search = {
        keyWord: keyWord,
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/search',
        data: JSON.stringify(search),
        headers: {
            'Content-Type': 'application/json',
            // Authorization: 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
        },
        success: (listProduct) => {
            // console.log(listProduct)
            let htmlProduct = ''
            if (listProduct.status) {
                listProduct.products.forEach(item => {
                    htmlProduct += `
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
                        <h5>$${item.price} | </h5>
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
                showFindProduct(htmlProduct)
            } else {
                htmlProduct = `<h5>${listProduct.message}</h5>`
                showFindProduct(htmlProduct)
            }
        }
    })
}

function showFindProduct(htmlProduct) {
    $('#body').html(`
<!-- Products Start -->
<div class="container-fluid pt-5 pb-3">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Products</span>
    </h2>
    <div class="row px-xl-5" id="findProduct">
        ${htmlProduct}
    </div>
</div>
<!-- Products End -->
    `)

}

function logout() {
    localStorage.clear();
    checkNavbar();
    showHome()
}