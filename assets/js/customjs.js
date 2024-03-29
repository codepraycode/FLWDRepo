$(function() {
    //console.log('Load Cart now');
    function productPageRedirect(id) {
        window.location.href = "product?product=" + id;
    }

    function CartPageRedirect(id, qty) {
        window.location.href = `cart?mode=add&prod=${id}&qty=${qty}`;
    }


    $("#cart-dropdown").load("/cart?mode=dropdown");
    $("#cart-qty").load("/cart?mode=qty");




    // Qucik View
    $(".quick-view").click(function() {
        var id = $(this).data('id');
        productPageRedirect(id);
        //console.log(id);

    });


    // Add to cart
    $(".add_to_cart").click(function() {
        var id = $(this).data('id');
        var qty = $(this).data('qty');
        console.log(qty);
        CartPageRedirect(id, qty);

    });

    // Add to Cart from product Page
    $('.add_to_cart').each(function() {
        var $this = $(this),
            $input = $this.find('input[type="number"]'),

            btn = $this.find('.add-to-cart-btn');


        btn.click(function() {
            var id = $(this).data('id');
            var qty = parseInt($input.val())
                // console.log(id);
            CartPageRedirect(id, qty);
        })

        /* down.on('click', function() {
            var value = parseInt($input.val()) - 1;
            value = value < 1 ? 1 : value;
            $input.val(value);
            $input.change();
            updatePriceSlider($this, value);
            //console.log($input.val());
        })

        up.on('click', function() {
            var value = parseInt($input.val()) + 1;
            $input.val(value);
            $input.change();
            updatePriceSlider($this, value);
            // console.log($input.val());
        }) */
    });

    // Remove from Cart
    $(".js-remove").click(function(e) {
        e.preventDefault();

        var id = $(this).data('id');
        window.location.href = `cart?mode=del&prod=${id}`;
    });


    // Logout
    $(".logout").click(function() {
        window.location.href = "Mlogout";
    })


    // Add to store
    $(".add_store").click(function() {
        console.log("Add to Store")
        $(".content").load("/pay");
    });


    // Pay while Registring
    $(".tab_comp").click(function() {
        // console.log("Now Pay");

        $(".pay-content").load("/pay");
    });


    $("#Mregister").submit(function(event) {
        event.preventDefault();


        var form = $(this)
        var data = form.serialize();
        // $(".tab_comp").trigger("click");


        //console.log(data);


        $.ajax({
            url: 'Mregister',
            type: "POST",
            data: data,
            success: function() {
                $(".tab_comp").trigger("click");
            }
        })



    });


    // Calculate total Price on checkout page
    $(".order-summary").each(function() {
        //var subPrice = $(".sub-total").val();
        //var Dfee = $(".delivery-fee").val();
        var $this = $(this),
            subprice = $this.find(".sub_total").text(),
            deliveryFee = $this.find(".delivery_fee").text(),
            sum = parseInt(subprice) + parseInt(deliveryFee),
            total = $this.find(".order-total").text(sum);
        //console.log(subprice);
        //console.log(deliveryFee);
        //console.log(total.text());

    });






    /* var pop = $('.popbtn');
    var row = $('.row:not(:first):not(:last)');


    pop.popover({
        trigger: 'manual',
        html: true,
        container: 'body',
        placement: 'bottom',
        animation: false,
        content: function() {
            return $('#popover').html();
        }
    });


    pop.on('click', function(e) {
        pop.popover('toggle');
        pop.not(this).popover('hide');
    });

    $(window).on('resize', function() {
        pop.popover('hide');
    });

    row.on('touchend', function(e) {
        $(this).find('.popbtn').popover('toggle');
        row.not(this).find('.popbtn').popover('hide');
        return false;
    }); */

});