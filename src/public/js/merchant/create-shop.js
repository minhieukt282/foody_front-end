function showCreateShop() {
    $('#body').html(`
    <div class="container-fluid">
    <h2 class="section-title position-relative text-uppercase mx-xl-5 mb-4"><span class="bg-secondary pr-3">Create New Shop</span>
    </h2>
    <div class="row px-xl-5">
        <div class="col-lg-7 mb-5">
            <div class="contact-form bg-light p-30">
                <div id="success"></div>
                
                    <div class="control-group">
                        <input type="text" class="form-control" id="name" placeholder="Shop's name"
                               required/>
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                        <input type="text" class="form-control" id="address" placeholder="Address"
                               required/>
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="control-group">
                        <input type="text" class="form-control" id="information" placeholder="information" 
                               required/>
                        <p class="help-block text-danger"></p>
                    </div>
<!--                    <div class="control-group">-->
<!--                        <input type="file" class="form-control" id="subject" placeholder="Image" name="image"-->
<!--                               required>-->
<!--                        <p class="help-block text-danger"></p>-->
<!--                    </div>-->
                    <div>
                        <button class="btn btn-primary py-2 px-4" onclick="createShop()">Create shop
                        </button>
                    </div>
               
            </div>
        </div>
        <div class="col-lg-5 mb-5">
            <div class="bg-light p-30 mb-30" style="width: 100%; height: 150px" id="message">
                
            </div>
            <div class="bg-light p-30 mb-3">
                <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                <p class="mb-2"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
        </div>
    </div>
</div>
    `)
}

function createShop() {
    let name = $('#name').val()
    let address = $('#address').val()
    let information = $('#information').val()
    let newShop = {
        nameShop: name,
        address: address,
        information: information
    }
    console.log("new shop", newShop)
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/m/shops',
        data: JSON.stringify(newShop),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        },
        success: (message) => {
            let htmlProduct = `<p class="mb-2"> ${message.message}</p>`
            $('#message').html(htmlProduct);
        }
    })
}