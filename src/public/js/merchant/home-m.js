showHomeMerchant()

function showHomeMerchant() {
    $('#body').html(`
    <div class="container-fluid">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Revenue</span>
    </h2>
    <div class="row px-xl-5">
        <div class="col-lg-8 mb-5">
            <table class="table table-light table-borderless table-hover text-center mb-0">
                <thead class="thead-dark">
                <tr>
                    <th>Time</th>
                    <th>Bills</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody class="align-middle" id="revenue">              
                             
                </tbody>
            </table>
        </div>
        <div class="col-lg-4 mb-5">
            <div class="bg-light p-30 mb-30">
                <h6 class="section-title position-relative text-uppercase mx-xl-5 mb-4; text-center">Revenue Search
                </h6>
    
                    <div class="control-group">
                        <label class="form-label" for="form2Example27">From</label>
                        <input type="date" class="form-control" id="time1" required>
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                        <label class="form-label" for="form2Example27">To</label>
                        <input type="date" class="form-control" id="time2" required>
                        <p class="help-block text-danger"></p>
                    </div>
                    <div>
                        <button class="btn btn-primary py-2 px-4" onclick="getRevenue()">Search
                        </button>
                    </div>
                
            </div>
        </div>
    </div>
</div>`)

}

function getRevenue() {
    let time1 = $('#time1').val()
    let time2 = $('#time2').val()
    let time = {
        time1: time1,
        time2: time2
    }
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/m/revenue',
        data: JSON.stringify(time),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (data) => {
            let htmlRevenue = ''
            htmlRevenue += `
                    <tr>
                        <td class="align-middle">${time1} - ${time2}</td>
                        <td class="align-middle">${data.count}</td>
                        <td class="align-middle">$${data.total}</td>
                    </tr> `
            $('#revenue').html(htmlRevenue)
        }
    })
}