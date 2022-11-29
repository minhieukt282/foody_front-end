function showMember(role) {
    $('#body').html(`
    <!-- OrderDetails Start -->
<div class="container-fluid">
    <div class="row px-xl-5" id="billsDetails">
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
             <td class="align-middle">${item.username}</td>
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
             <td class="align-middle">${item.username}</td>
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
            if (+role === 0){
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

