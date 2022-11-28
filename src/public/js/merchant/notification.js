function notification() {
    $('#body').html(`
    <!-- OrderDetails Start -->
<div class="container-fluid">
    <div class="row px-xl-5">
        <div class="col-lg-9 table-responsive mb-5">
            <table class="table table-light table-borderless table-hover text-center mb-0">
                <thead class="thead-dark">
                <tr>
                    <th>Time</th>
                    <th>Bills</th>
                    <th>Phone</th>
                    <th>Status</th>
                    <th>Payment</th>
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
            <div class="bg-light p-30 mb-4" id="notification">
                    
            </div>
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
             <td class="align-middle">${listBills.bills[i]._id}</td>
             <td class="align-middle">${listBills.bills[i].phoneNumber}</td>
             <td class="align-middle">${listBills.bills[i].confirm_bill}</td>
             <td class="align-middle">${listBills.bills[i].payment_status}</td>
             <td></td>
             <td></td>
        </tr>`
                } else {
                    htmlBills += `
        <tr>
             <td class="align-middle">${time[0]}</td>
             <td class="align-middle">${listBills.bills[i]._id}</td>
             <td class="align-middle">${listBills.bills[i].phoneNumber}</td>
             <td class="align-middle">${listBills.bills[i].confirm_bill}</td>
             <td class="align-middle">${listBills.bills[i].payment_status}</td>
             <td class="align-middle">
                 <a class="btn btn-sm btn-danger" onclick="changeStatus('${listBills.bills[i]._id}')"><i class="fa fa-check"></i>
                 </a>
             </td>
             <td class="align-middle">
                 <a class="btn btn-sm btn-danger"><i class="fas fa-times"></i>
                 </a>
             </td>
        </tr>`
                }
            }
            $('#billData').html(htmlBills)
        }
    })
}

function changeStatus(id) {
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