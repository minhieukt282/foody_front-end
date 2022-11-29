function showMyHistory() {
    $('#body').html(`
    <!-- OrderDetails Start -->
<div class="container-fluid">
    <div class="row px-xl-5" id="myBillsDetails">
        <div class="col-lg-9 table-responsive mb-5">
            <table class="table table-light table-borderless table-hover text-center mb-0">
                <thead class="thead-dark">
                <tr>
                    <th>Time</th>
                    <th>Bills</th>
                    <th>Status</th>
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
            <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onclick="showHome()">Back
            </button>
        </div>
    </div>
</div>
<!-- OrderDetails End -->
    `)
    getMyBill()
}

function getMyBill() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/bills',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (listBills) => {
            if (listBills.status) {
                let htmlBillData = ''
                for (let i = 0; i < listBills.bills.length; i++) {
                    let time = listBills.bills[i].time.split('T')
                    let status = 'Delivery'
                    if (listBills.bills[i].confirm_bill === true){
                        status = 'Done'
                    }
                    htmlBillData += `
        <tr>
             <td class="align-middle">${time[0]}</td>
             <td class="align-middle"><a onclick="myBillsDetails('${listBills.bills[i]._id}')">${listBills.bills[i]._id}</a></td>
             <td class="align-middle">${status}</td>
        </tr>`
                }
            $('#billData').html(htmlBillData)
            } else {
                let html = `<h6 >${listBills.message}</h6>`
                $('#notification').html(html)
            }
        }
    })
}

function myBillsDetails(id){
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/bills/' +id,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (listDetails) => {
            console.log(listDetails.billDetails)
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
            for (let i = 0; i < listDetails.billDetails.length; i++) {
                total += listDetails.billDetails[i].quantity * listDetails.billDetails[i].product.price
                htmlBillsDetails += `
                <tr>
                    <td class="align-middle">${listDetails.billDetails[i].product.name}</td>
                    <td class="align-middle">${listDetails.billDetails[i].product.price}</td>
                    <td class="align-middle">${listDetails.billDetails[i].quantity}</td>
                    <td class="align-middle">${listDetails.billDetails[i].quantity * listDetails.billDetails[i].product.price}</td>
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
            <button class="btn btn-block btn-primary font-weight-bold my-3 py-3" onclick="showMyHistory()">Back
            </button>
        </div> `
            $('#myBillsDetails').html(htmlBillsDetails)
        }
    })
}