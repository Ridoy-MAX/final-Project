$(function(){
    //mixitup
    
    var containerEl = document.querySelector('.menu-main');
    
    var mixer = mixitup(containerEl, {
        animation: {
            duration: 1000
        }
    });

   
    //datetime

    jQuery.datetimepicker.setDateFormatter('moment')
    
    $('#picker').datetimepicker({
       timepicker: true,
       datepicker: true,
       format: 'DD-MM-YYYY h:mm a' 
    })
    $('#toggle').on('click', function(){
        $('#picker').datetimepicker('toggle')
    })

});