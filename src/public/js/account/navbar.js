checkNavbar()

function checkNavbar() {
    let token = localStorage.getItem('token')
    let role = +localStorage.getItem('role')
    if (token) {
        if (role === 2) {

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
            <form action="">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for products">
                    <div class="input-group-append">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                    </div>
                </div>
            </form>
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
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown">Update<i
                                    class="fa fa-angle-down mt-1"></i></a>
                            <div class="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                <a class="dropdown-item">My Shop</a>
                                <a class="dropdown-item">My Products</a>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
                        <a href="" class="btn px-0 ml-3">
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
            <form action="">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for products">
                    <div class="input-group-append">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                    </div>
                </div>
            </form>
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
                                <a class="dropdown-item">History</a>
                            </div>
                        </div>
                    </div>
                    <div class="navbar-nav ml-auto py-0 d-none d-lg-block">
                        <a class="btn px-0 ml-3">
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
            <form action="">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search for products">
                    <div class="input-group-append">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                    </div>
                </div>
            </form>
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

function logout() {
    localStorage.clear();
    checkNavbar();
    showHome()
}