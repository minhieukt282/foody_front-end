function upgradeAccount() {
    let isUpgrade = JSON.parse(localStorage.getItem("upgrade")) ?? []
    if (isUpgrade.length !== 0) {

    } else {
        $('#body').html(`
      <div class="container-fluid">
        <div class="row px-xl-5">
            <div class="col-lg-8">
                <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">upgrade to merchant</span></h5>
                <div class="bg-light p-30 mb-5">
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label>First Name</label>
                            <input class="form-control" type="text" placeholder="John">
                        </div>
                        <div class="col-md-6 form-group">
                            <label>Last Name</label>
                            <input class="form-control" type="text" placeholder="Doe">
                        </div>
                        <div class="col-md-6 form-group">
                            <label>E-mail</label>
                            <input class="form-control" type="text" placeholder="example@email.com">
                        </div>
                        <div class="col-md-12 form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="isValue" required>
                                <label class="custom-control-label" for="isValue">Accept policy</label>
                            </div>
                        </div>
                         <div class="col-md-6 form-group">
                            <button onclick="upgrade()" class="btn btn-block btn-primary font-weight-bold py-3">Upgrade</button>
                        </div>
                        <div class="col-md-6 form-group">
                            <button onclick="showHome()" class="btn btn-block btn-primary font-weight-bold py-3">Cancel</button>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="mb-5">
                    <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Notification</span></h5>
                    <div class="bg-light p-30" style="width: auto; height: 100px;" id="notification">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>`)
    }
}

function upgrade() {
    let userId = localStorage.getItem('account_id')
    let account = {
        userId: userId
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/u/merchant/register',
        data: JSON.stringify(account),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (message) => {
            let html = `<p style="color: green">${message.message}</p>`
            $('#notification').html(html)
            localStorage.setItem('upgrade', userId)
            setTimeout(() => {
                showHome()
            }, 1500)
        }
    })
}