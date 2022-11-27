function showLogin() {
    $('#body').html(`
    <div class="container-fluid">
    <div class="row px-xl-5">
        <div class="col-lg-5">
            </h5>
            <div class="bg-light p-30 mb-5">
            img
            </div>
        </div>
        <div class="col-lg-7 table-responsive mb-5">
            
                <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: red;"></i>
                    <span class="h1 fw-bold mb-0">Login</span>
                </div>
                <div class="form-outline mb-4">
                 <label class="form-label" >Name Account</label>
                    <input type="text" id="username" class="form-control form-control-lg"
                           required/>
                </div>
                <div class="form-outline mb-4">
                 <label class="form-label">Password</label>
                    <input type="password" id="password" class="form-control form-control-lg"
                          required/>     
                </div>
                <div id="body-notification"></div>
                <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" onclick="login()">Login</button>
                </div>
                <p class="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a
                            onclick="showRegister()"
                            style="color: #393f81;">Register here</a></p>
        </div>
    </div>
</div>
    `
    )
}

function login() {
    let username = $('#username').val();
    let password = $('#password').val();
    let account = {
        username: username,
        password: password
    }
    console.log(account)
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/login',
        data: JSON.stringify(account),
        headers: {
            'Content-Type': 'application/json'
        },
        success: (token) => {
            if (token.status === true) {
                localStorage.setItem("token", token.token)
                localStorage.setItem("account_id", token.account_id)
                localStorage.setItem("role", token.role)
                if (+token.role === 2) {

                } else if (+token.role === 1) {
                    checkNavbar()
                    showHomeMerchant()
                } else {
                    checkNavbar()
                    showHome()
                }
            } else {
                let notification = `<h6 style="color: red">Wrong account or password</h6>`
                $('#body-notification').html(notification);
            }
        }
    })
}