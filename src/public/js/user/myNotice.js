function showMyNotice() {
    $('#body').html(`
    <!-- OrderDetails Start -->
<div class="container-fluid">
    <div class="row px-xl-5" id="myBillsDetails">
        <div class="col-lg-9 table-responsive mb-5">
             <h5 class="section-title position-relative text-uppercase mb-3"><span class="bg-secondary pr-3">Notice</span>
            
<!--            <table class="table table-light table-borderless table-hover text-center mb-0">-->
<!--                <thead class="thead-dark">-->
<!--                <tr>-->
<!--                    <th>Time</th>-->
<!--                    <th>Bills</th>-->
<!--                    <th>Status</th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--               <tbody class="align-middle" id="billData">-->
<!--                -->
<!--                </tbody>-->
<!--            </table>-->
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
    getMyNotice()
}

function getMyNotice() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/notice',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (notice) => {
            if (notice.notice.length !== 0) {
                let html = `<h6 >${notice.message}</h6>`
                $('#notification').html(html)
            }
        }
    })
}