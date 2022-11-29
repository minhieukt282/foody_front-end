function adminNotification() {
    $('#body').html(`
    <!-- OrderDetails Start -->
<div class="container-fluid">
    <div class="row px-xl-5" id="billsDetails">
        <div class="col-lg-9 table-responsive mb-5"> 
            <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Pending upgrade account</span></h5>
            <table class="table table-light table-borderless table-hover text-center mb-0">
                <thead class="thead-dark">
                <tr>
                    <th>Username</th>
                    <th>Status</th>
                    <th>Confirm</th>
                    <th>Reject</th>
                </tr>
                </thead>
               <tbody class="align-middle" id="listNotice">
                
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
    getNotice()
}

function getNotice() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/admin/upgrade',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (listNotice) => {
            console.log(listNotice.notice)
            let htmlNotice = ''
            listNotice.notice.forEach(item => {
                htmlNotice += `
        <tr>
             <td class="align-middle">${item.user_id}</td>
             <td class="align-middle">${item.status}</td>
             <td class="align-middle">
                 <a class="btn btn-sm btn-danger" onclick="acceptUpgrade('${item.user_id}')" ><i class="fa fa-check"></i>
                 </a>
             </td>
             <td class="align-middle">
                 <a class="btn btn-sm btn-danger" onclick="rejectUpgrade('${item.user_id}')"><i class="fas fa-times"></i>
                 </a>
             </td>
        </tr>`
            })
            $('#listNotice').html(htmlNotice)
        }
    })
}

function acceptUpgrade(id){
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/admin/upgrade/' + id,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (listNotice) => {
            let html = `<h6 >${listNotice.message}</h6>`
            $('#notification').html(html)
            setTimeout(()=>{
                adminNotification()
            },1500)
        }
    })
}

function rejectUpgrade(id){
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/admin/reject/' + id,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (listNotice) => {
            let html = `<h6 >${listNotice.message}</h6>`
            $('#notification').html(html)
            setTimeout(()=>{
                adminNotification()
            },1500)
        }
    })
}

