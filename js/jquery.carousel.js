(function($) {

    $.fn.mycarousel = function() {
        var carusel = $(this).parents('.carousel__list');
        $(document).on('click', ".carousel__arrow__left",function(){ 
            left_carusel(carusel);
            return false;
        });
        $(document).on('click', ".carousel__arrow__right",function(){ 
            right_carusel(carusel);
            return false;
        });
        function right_carusel(carusel){
            $('.carousel__element').last().after($('.carousel__element').first())
        }
        function left_carusel(carusel){
            $('.carousel__element').first().before($('.carousel__element').last())
        }
        $(function() {
         auto_right('.carousel__list:first');
        })
        function auto_right(carusel){
            setInterval(function(){
                if (!$(carusel).is('.carousel'))
                    right_carusel(carusel);
            }, 5000)
        }
    }

}) (jQuery);