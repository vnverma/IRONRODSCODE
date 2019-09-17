require(['jquery'], function($){ 
//**Sticky header open

$(window).scroll(function () {

	if ($(this).scrollTop() > 50) {
		$('.sticky_header').addClass("content_fixed");
	} else {
		$('.sticky_header').removeClass("content_fixed");
	}
});
//**Sticky header open

//**Select file feild open
$(document).ready(function (e) {
	$('input#filePicWithLogo').change(function () {
		var filename = $('#filePicWithLogo').val();
		$('#file_filename').show();
		$('#file_filename').html(filename);
	});
});
//**Select file feild end

//**Show Hide Password open
$(document).ready(function () {
	$("#show_hide_password a.pass").on('click', function (event) {
		event.preventDefault();
		if ($('#show_hide_password input').attr("type") == "text") {
			$('#show_hide_password input').attr('type', 'password');
			$('#show_hide_password i.f-eye').addClass("fa-eye-slash");
			$('#show_hide_password i.f-eye').removeClass("fa-eye");
		} else if ($('#show_hide_password input').attr("type") == "password") {
			$('#show_hide_password input').attr('type', 'text');
			$('#show_hide_password i.f-eye').removeClass("fa-eye-slash");
			$('#show_hide_password i.f-eye').addClass("fa-eye");
		}
	});
});
//**Show Hide Password end

(function() {

	/*Set the carousel options*/
	$('#quote-carousel').carousel({
		pause: true,
		interval: 4000,
	});
	/*Set the carousel options*/

	

    /*Select file field open*/
    $('input#filePicWithLogo').change(function () {
		var filename = $('#filePicWithLogo').val();
		$('#file_filename').show();
		$('#file_filename').html(filename);
	});
    /*Select file field end*/


	/* Product Images */
    $('.product-thumbnail-imgcont li a').mouseover(function(){
   	   var imgsrc = $(this).attr('data-src');
   	   $('.product-image-cont a').html('');
   	   $('.product-image-cont a').html('<img src="'+imgsrc+'" />');

    });
	/* Product Images */

	/* Product Modal Images */
    $('.product-modal-thumbnail li a').mouseover(function(){
   	   var imgsrc = $(this).attr('data-src');
   	   $('.product-modal-image').html('');
   	   $('.product-modal-image').html('<img src="'+imgsrc+'" />');

    });
	/* Product Modal Images */

	$('[data-toggle="tooltip"]').tooltip();

	
})();

$(document).on('click', '.review_order_table.checkout tbody td a', function(){
	 $(this).closest('tr').remove();	 
	 if($('.review_order_table.checkout tbody tr').length == '0'){
	 	$('.review_order_table.checkout tbody').append('<tr><td colspan="4" align="center">No Recored Found</td></tr>')
	 }
});


$(document).on('click', '.change-payment-info-modal .remove-billing', function(){
	$(this).closest('.row').remove();
	$('.change-payment-info-modal .light_blue_box').find('.row:first-child').removeClass('pt-3');
	if($('.change-payment-info-modal .light_blue_box.bill-address-cont').find('.row').length == 0){	
	   
		$('.change-payment-info-modal').find('.light_blue_box.bill-address-cont').append('<div class="row"><div class="col-12 text-center">No Recored Found</div></div>');
	}
});
$(document).on('click', '.change-payment-info-modal .edit-billing', function(){
	$('.edit-payemnt-info-overlay').fadeIn();
	$('.edit-payemnt-info-cont').fadeIn();
});
$(document).on('click', '.edit-payemnt-info-cont .edit-btn-cancel', function(){
	$('.edit-payemnt-info-overlay').fadeOut();
	$('.edit-payemnt-info-cont').fadeOut();
});
$(document).on('click', '.change-payment-info-modal .remove-shipping', function(){
	$(this).closest('.row').remove();
	$('.change-payment-info-modal .light_blue_box').find('.row:first-child').removeClass('pt-3');
});
$(document).on('click', '.change-payment-info-modal .edit-shipping', function(){
	$('.edit-shipping-info-overlay').fadeIn();
	$('.edit-shipping-info-cont').fadeIn();
});
$(document).on('click', '.edit-shipping-info-cont .edit-ship-btn-cancel', function(){
	$('.edit-shipping-info-overlay').fadeOut();
	$('.edit-shipping-info-cont').fadeOut();
});

// Orders Table
$(document).ready(function() {
	if($('#OrdersTable').length > 0){
		$('#OrdersTable').DataTable({
	    "paging":   true,
	    "ordering": true,
	    "searching": false,
	    "info":     false,
	    "scrollX": true,
	    columnDefs: [
	       { "width": "15%", "targets": 0 },
	       { "width": "15%", "targets": 1 },
	       { "width": "15%", "targets": 2 },
	       { "width": "15%", "targets": 3 },
	       { "width": "15%", "targets": 4 },
	       { "width": "15%", "targets": 5 },
	       { "width": "10%", "targets": 6 }
	    ],
		language: {
			paginate: {
			  next: '&rsaquo;', // or '→'
			  previous: '&lsaquo;' // or '←' 
			}
		  }
			
	  });
	}
    // $('#OrdersTable').columns.adjust().draw();
});

// Quotes Table
$(document).ready(function() {
	if($('#QuotesTable').length > 0){
		$('#QuotesTable').DataTable({
		    "paging":   true,
		    "ordering": true,
		    "searching": false,
		    "info":     false,
		    "scrollX": true,
		    columnDefs: [
		       { "width": "22%", "targets": 0 },
		       { "width": "18%", "targets": 1 },
		       { "width": "20%", "targets": 2 },
		       { "width": "15%", "targets": 3 },
		       { "width": "15%", "targets": 4 },
		       { "width": "10%", "targets": 5 }
		    ],
			language: {
				paginate: {
				  next: '&rsaquo;', // or '→'
				  previous: '&lsaquo;' // or '←' 
				}
			  }		
	  	});
	}
});

// Support Requests Table
$(document).ready(function() {
	if($('#SupportRequestsTable').length > 0){
		$('#SupportRequestsTable').DataTable({
		    "paging":   true,
		    "ordering": true,
		    "searching": false,
		    "info":     false,
		    "scrollX": true,
		    columnDefs: [
		       { "width": "15%", "targets": 0 },
		       { "width": "12%", "targets": 1 },
		       { "width": "14%", "targets": 2 },
		       { "width": "15%", "targets": 3 },
		       { "width": "13%", "targets": 4 },
		       { "width": "15%", "targets": 5 },
		       { "width": "15%", "targets": 6 }
		    ],
			language: {
				paginate: {
				  next: '&rsaquo;', // or '→'
				  previous: '&lsaquo;' // or '←' 
				}
			  }
				
		  });
	}

	$('.color-choose-list li a').click(function(){
		var current_color = $(this).attr('data-src');
		$('.color-choose-list li a').removeClass('active');
		$(this).addClass('active');
		$('.currnt_color').html(current_color)
	});
		
		
	$(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
		$($.fn.dataTable.tables(true)).DataTable()
	   	.columns.adjust()
	   	.responsive.recalc();
	});

	$(".shipping_address_remove .remove-link").click(function(){
		$(this).closest(".row").remove();
		$('.shipping_address_remove').find('.row:first-child').removeClass('border-top pt-3');
		if($('.shipping_address_remove').find('.row').length == '0'){			
		 	$('.shipping_address_remove').append('<div class="row"><div class="col-12 text-center">No Recored Found</div></div>');
		}
	});

	$(".billing_address_remove .remove-link").click(function(){
		$(this).closest(".row").remove();
		$('.billing_address_remove').find('.row:first-child').removeClass('border-top pt-3');
		if($('.billing_address_remove').find('.row').length == '0'){			
		 	$('.billing_address_remove').append('<div class="row"><div class="col-12 text-center">No Recored Found</div></div>');
		}
	});
 

	$('#SupportRequestsDetails').css("display", "none");
	$("#SupportRequests-grid").css("display", "block");

	$(".request-details").click(function(){
    	$("#SupportRequestsDetails").css("display", "block");
    	$("#SupportRequests-grid").css("display", "none");
	});
	$(".back-requests").click(function(){
		$("#SupportRequestsDetails").css("display", "none");
    	$("#SupportRequests-grid").css("display", "block");
	});
	
	
//Select Opstio Popop OPEN

	
$('#help_ordering_modal, #trade_professional_membership_modal, #color_finish_samples_modal, #website_technical_support_modal ').on('hidden.bs.modal', function () {
    $("select#select_popup").val('0'); 
});
//Select Opstio Popop END


$('.modal').on('hidden.bs.modal', function( event ) {
	 $(this).removeClass('fv-modal-stack');
	 $('body').data('fv_open_modals', $('body').data('fv_open_modals') - 1 );
  });
  $('.modal').on( 'shown.bs.modal', function (event) { 
   if (typeof( $('body').data('fv_open_modals')) == 'undefined' ){
	 $('body').data('fv_open_modals', 0);
   }
   if ($(this).hasClass('fv-modal-stack')){
	 return;
   }                   
  $(this).addClass('fv-modal-stack');
  $('body').data('fv_open_modals', $('body').data('fv_open_modals') + 1 );
  $(this).css('z-index', 1040 + (10 * $('body').data('fv_open_modals')));
  $('.modal-backdrop').not('.fv-modal-stack').css('z-index', 1039 + (10 * $('body').data('fv_open_modals')));
  $('.modal-backdrop').not('fv-modal-stack').addClass('fv-modal-stack'); 
});

/* Custom Select JS*/
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 1; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            value: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('value'));
        $list.hide();
        console.log($(this).attr('value'));
        if ($(this).attr('value') == "#help_ordering_modal") {
			$('#help_ordering_modal').modal('show');
		  }

		if ($(this).attr('value') == "#trade_professional_membership_modal") {
			$('#trade_professional_membership_modal').modal('show');
		  }

		if ($(this).attr('value') == "#color_finish_samples_modal") {
			$('#color_finish_samples_modal').modal('show');
		}
		if ($(this).attr('value') == "#website_technical_support_modal") {
			$('#website_technical_support_modal').modal('show');
		}
		if($(this).attr('value') == 'order-support-request.html'){
			window.location.href = 'order-support-request.html';
		}
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});
/* Custom Select JS*/

});

});