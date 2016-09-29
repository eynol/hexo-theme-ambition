/*
/* do things simple
*/


(function() {
    //make top menu active
    var nav_toggle = document.getElementById("js-toggle-nav"),
        arr_span = nav_toggle.firstElementChild.classList,
        arr_ul = nav_toggle.nextElementSibling.classList;

    nav_toggle.addEventListener("click", function() {

        if (arr_span.contains('active')) {
            arr_span.remove('active');
            arr_ul.remove('active');
        } else {
            arr_span.add('active');
            arr_ul.add('active');
        }
    });

})();
