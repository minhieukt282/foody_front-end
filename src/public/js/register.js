function showRegister() {
    $('#body').html(`
    <div class="container-fluid">
    <div class="row px-xl-5">
        <div class="col-lg-5">
            </h5>
            <div class="bg-light p-30 mb-5">

            </div>
        </div>
        <div class="col-lg-7 table-responsive mb-5">
                <div class="d-flex align-items-center mb-3 pb-1">
                    <i class="fas fa-cubes fa-2x me-3" style="color: red;"></i>
                    <span class="h1 fw-bold mb-0">Register</span>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label">Name Account</label>
                    <input type="text" id="username" class="form-control form-control-lg"
                          required/>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" >Password</label>
                    <input type="password" id="password" class="form-control form-control-lg"
                          required/>
                </div>
                <div class="form-outline mb-4">
                    <label class="form-label" >Confirm password</label>
                    <input type="password" id="confirmPassword" class="form-control form-control-lg"
                          required/>
                </div>
                <div id="body-notification"></div>
                <div class="pt-1 mb-4">
                    <button class="btn btn-dark btn-lg btn-block" onclick="register()">Register</button>
                </div>
              <p class="mb-5 pb-lg-2" style="color: #393f81;">Have an account - <a
                            onclick="showLogin()"
                            style="color: #393f81;">Login here</a></p>
        </div>
    </div>
</div>
    `
    )
}

function register() {
    let username = $('#username').val();
    let password = $('#password').val();
    let confirmPassword = $('#confirmPassword').val();
    if (password === confirmPassword) {
        let newAccount = {
            username: username,
            password: password
        }
        console.log(newAccount)
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3001/register',
            data: JSON.stringify(newAccount),
            headers: {
                'Content-Type': 'application/json'
            },
            success: (message) => {
                console.log(message)
                if (message.status) {
                    let notification = `<h6 style="color: green">${message.message}</h6>`
                    $('#body-notification').html(notification);
                    setTimeout(() => {
                        showLogin()
                    }, 3000)
                } else {
                    let notification = `<h6 style="color: red">${message.message}</h6>`
                    $('#body-notification').html(notification);
                }
            }
        })
    } else {
        let notification = `<h6 style="color: red">Confirm password is wrong</h6>`
        $('#body-notification').html(notification);
    }

}