function notification() {
    $('#body').html(`
    <!-- OrderDetails Start -->
<div class="container-fluid">
    <div class="row px-xl-5" id="billsDetails">
        <div class="col-lg-9 table-responsive mb-5">
            <table class="table table-light table-borderless table-hover text-center mb-0">
                <thead class="thead-dark">
                <tr>
                    <th>Time</th>
                    <th>Bills</th>
                    <th>Status</th>
                    <th>Confirm</th>
                    <th>Reject</th>
                </tr>
                </thead>
               <tbody class="align-middle" id="billData">
                
                </tbody>
            </table>
        </div>
        <div class="col-lg-3">
            <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Notification</span>
            </h5>
            <div class="bg-light p-30 mb-4" id="notification" style="width: 100%; height: 100px;">
                    
            </div>
            <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onclick="showHomeMerchant()">Back
            </button>
        </div>
    </div>
</div>
<!-- OrderDetails End -->
    `)
    getNotification()
}

function getNotification() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/m/bills',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (listBills) => {
            let htmlBills = ''
            for (let i = 0; i < listBills.bills.length; i++) {
                let time = listBills.bills[i].time.split('T')
                if (listBills.bills[i].confirm_bill === true || listBills.bills[i].payment_status === true) {
                    htmlBills += `
        <tr>
             <td class="align-middle">${time[0]}</td>
             <td class="align-middle"><a onclick="billsDetails('${listBills.bills[i]._id}')">${listBills.bills[i]._id}</a></td>
             <td class="align-middle">${listBills.bills[i].confirm_bill}</td>
             <td></td>
             <td></td>
        </tr>`
                } else {
                    htmlBills += `
        <tr>
             <td class="align-middle">${time[0]}</td>
             <td class="align-middle"><a onclick="billsDetails('${listBills.bills[i]._id}')">${listBills.bills[i]._id}</a></td>
             <td class="align-middle">${listBills.bills[i].confirm_bill}</td>
             <td class="align-middle">
                 <a class="btn btn-sm btn-danger" onclick="acceptBills('${listBills.bills[i]._id}')"><i class="fa fa-check"></i>
                 </a>
             </td>
             <td class="align-middle">
                 <a class="btn btn-sm btn-danger" onclick="rejectBills('${listBills.bills[i]._id}')" ><i class="fas fa-times"></i>
                 </a>
             </td>
        </tr>`
                }
            }
            $('#billData').html(htmlBills)
        }
    })
}

function acceptBills(id) {
    let status = {
        billId: id
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/m/bills',
        data: JSON.stringify(status),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (message) => {
            console.log(message)
            let html = `<h6 class="form-control border-0 p-4" >Accept done</h6>`
            $('#notification').html(html)
            setTimeout(() => {
                html = ''
                $('#notification').html(html)
                notification()
            }, 1000)

        }
    })
}

function rejectBills(id){
    console.log(id)
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3001/m/bills/' + id,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (message) => {
            console.log(message)
            let html = `<h6 class="form-control border-0 p-4" >Reject done</h6>`
            $('#notification').html(html)
            setTimeout(() => {
                html = ''
                $('#notification').html(html)
                notification()
            }, 1000)

        }
    })
}

function billsDetails(id) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/m/bills/' + id,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (listDetails) => {
            console.log(listDetails.Details)
            let total = 0
            let htmlBillsDetails = ''
            htmlBillsDetails += `
            <div class="col-lg-9 table-responsive mb-5">
            <table class="table table-light table-borderless table-hover text-center mb-0">
                <thead class="thead-dark">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                </thead>
               <tbody class="align-middle">`
            for (let i = 0; i < listDetails.Details.length; i++) {
                total += listDetails.Details[i].quantity * listDetails.Details[i].product.price
                htmlBillsDetails += `
                <tr>
                    <td class="align-middle">${listDetails.Details[i].product.name}</td>
                    <td class="align-middle">${listDetails.Details[i].product.price}</td>
                    <td class="align-middle">${listDetails.Details[i].quantity}</td>
                    <td class="align-middle">${listDetails.Details[i].quantity * listDetails.Details[i].product.price}</td>
                </tr>`
            }
            htmlBillsDetails +=`
                <tr>
                    <td class="align-middle"><b>Total</b></td>
                    <td colspan="2"></td>
                    <td class="align-middle"><b>${total}</b></td>
                </tr>
            </tbody>
            </table>
        </div>
        <div class="col-lg-3">
            <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Notification</span>
            </h5>
            <div class="bg-light p-30 mb-4" id="notification" style="width: 100%; height: 100px;">
                    
            </div>
            <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onclick="notification()">Back
            </button>
        </div> `
            $('#billsDetails').html(htmlBillsDetails)
        }
    })
}