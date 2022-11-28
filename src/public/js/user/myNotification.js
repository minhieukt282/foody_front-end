function showMyNotification(){
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
}