function showMember(role) {
    $('#body').html(`
    <!-- OrderDetails Start -->
<div class="container-fluid">
    <div class="row px-xl-5" >
        <div class="col-lg-9 table-responsive mb-5">
            <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">List ${role}</span></h5>
            <table class="table table-light table-borderless table-hover text-center mb-0">
                <thead class="thead-dark">
                <tr>
                    <th>Username</th>
                    <th>Status</th>
                    <th>Lock/Unlock</th>
                </tr>
                </thead>
               <tbody class="align-middle" id="listMember">
                
                </tbody>
            </table>
        </div>
        <div class="col-lg-3">
            <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Notification</span>
            </h5>
            <div class="bg-light p-30 mb-4" id="notification" style="width: 100%; height: 100px;">
                    
            </div>
            <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onclick="showHomeAdmin()">Back
            </button>
        </div>
    </div>
</div>
<!-- OrderDetails End -->
    `)
    if (role === 'MERCHANTS') {
        getListMerchants()
    }
    if (role === 'USERS') {
        getListUsers()
    }
}

function getListMerchants() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/admin/merchants',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (listMerchant) => {
            // console.log(listMerchant)
            let htmlMerchant = ''
            listMerchant.forEach(item => {
                let status = 'Lock'
                let classIcon = 'class="fa fa-lock"'
                if (item.status === true) {
                    status = 'Unlock'
                    classIcon = 'class="fa fa-lock-open"'
                }
                htmlMerchant += `
        <tr>
             <td class="align-middle" onclick="infoUser('${item.username}')">${item.username}</td>
             <td class="align-middle">${status}</td>
             <td class="align-middle">
                 <a class="btn btn-sm btn-danger" onclick="lockMember('${item.username}', '${item.role}')" ><i ${classIcon}></i>
                 </a>
             </td>
        </tr>`
            })
            $('#listMember').html(htmlMerchant)
        }
    })
}

function getListUsers() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/admin/users',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (listUser) => {
            // console.log(listMerchant)
            let htmlUsers = ''
            listUser.forEach(item => {
                let status = 'Lock'
                let classIcon = 'class="fa fa-lock"'
                if (item.status === true) {
                    status = 'Unlock'
                    classIcon = 'class="fa fa-lock-open"'
                }
                htmlUsers += `
        <tr>
             <td class="align-middle" >${item.username}</td>
             <td class="align-middle">${status}</td>
             <td class="align-middle">
                 <a class="btn btn-sm btn-danger" onclick="lockMember('${item.username}', '${item.role}')" ><i ${classIcon}></i>
                 </a>
             </td>
        </tr>`
            })
            $('#listMember').html(htmlUsers)
        }
    })
}

function lockMember(username, role) {
    let account = {
        username: username
    }
    console.log("role", role)
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/admin/status',
        data: JSON.stringify(account),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (message) => {
            console.log(message)
            let html = `<h6>${message.message}</h6>`
            $('#notification').html(html)
            let status
            if (+role === 0) {
                status = 'USERS'
            } else {
                status = 'MERCHANTS'
            }
            setTimeout(() => {
                showMember(status)
            }, 1000)
        }
    })
}

function infoUser(username) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/admin/users/' + username,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (info) => {
            console.log(info)
            let htmlInfo = `
             <div class="row px-xl-5" i>
    <div class="col-lg-9 table-responsive mb-5">
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
                        <h3>${info.infoShop[0].nameShop}</h3>
                        <h6 class="font-weight-semi-bold mb-4">Username: ${info.infoUser[0].username}</h6>
                        <h6 class="font-weight-semi-bold mb-4">Address: ${info.infoShop[0].address}</h6>
                        <h5 class="mb-4">Infomation: ${info.infoShop[0].information}</h5>
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
    </div>
    <div class="col-lg-3">
        <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Notification</span>
        </h5>
        <div class="bg-light p-30 mb-4" id="notification" style="width: 100%; height: 100px;">

        </div>
        <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onclick="showHomeAdmin()">Back
        </button>
    </div>
</div>`
            $('#body').html(htmlInfo)
        }
    })
}

