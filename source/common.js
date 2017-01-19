/*
/* do things simple
*/


(function() {
    //make top menu active
    var a = document.getElementById("js-toggle-nav"),
        arr_span = a.firstElementChild.classList,
        arr_ul = a.nextElementSibling.classList;

    a.addEventListener("click", function() {

        if (arr_span.contains('active')) {
            arr_span.remove('active');
            arr_ul.remove('active');
        } else {
            arr_span.add('active');
            arr_ul.add('active');
        }
    });

})();

(function(){
  //scroll top
  function throttle(func, wait) {
      var ctx, args, rtn, timeoutID; // caching
      var last = 0;

      return function throttled() {
          ctx = this;
          args = arguments;
          var delta = new Date() - last;
          if (!timeoutID)
              if (delta >= wait) call();
              else timeoutID = setTimeout(call, wait - delta);
          return rtn;
      };

      function call() {
          timeoutID = 0;
          last = +new Date();
          rtn = func.apply(ctx, args);
          ctx = null;
          args = null;
      }


  }

  // add style tag
  var style_tag = document.createElement("style"),
      link_tag = document.createElement("a");
  style_tag.innerText = ".HideS-Au2o-top { position: fixed; display: inline-block; right: -50px; bottom: 40px; box-sizing: border-box; width: 40px; height: 40px; background-color: #fff; border-radius: 5px; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .2), 0 2px 10px 0 rgba(0, 0, 0, .12); transition: .3s; animation-duration: .9s; animation-fill-mode: forwards; animation-timing-function: cubic-bezier(0.62, 0, 0.2, 1.32); }"+
      ".HideS-Au2o-top:before, .HideS-Au2o-top:after,.HideS-Au2o-top:hover:before ,.HideS-Au2o-top:hover:after { content: ''; display: inline-block; position: absolute; width: 20px; height: 4px; top: 10px; left: 10px; transform-origin: center center; background-color: #989898; transform: rotateZ(45deg) translateX(8px); }"+
      ".HideS-Au2o-top:after,.HideS-Au2o-top:hover:after { right: 10px; transform: rotateZ(-45deg) translateX(-8px); }"+
      ".HideS-Au2o-top:hover{background-color:#fff;}"+
      ".HideS-Au2o-top:active{box-shadow: 0 3px 5px -2px rgba(0, 0, 0, 0.18), 0 3px 8px -2px rgba(0, 0, 0, 0.15);}"+
      " @keyframes HideS-Au2o-in { 0% { transform: translateX( 0px) rotateZ(360deg); } 100% { transform: translateX(-90px) rotateZ(0); } } @keyframes HideS-Au2o-out{ 0% { transform: translateX( -90px) rotateZ(0); } 100% { transform: translateX(0px) rotateZ(360); } }";
  document.head.appendChild(style_tag);

  link_tag.className = "HideS-Au2o-top material-shadow-hover-high ";
  link_tag.id = "js-HideS-Au2o";
  link_tag.title = "Scroll to Top";
  link_tag.href = "javascript:window.scrollTo(0,0)";
  document.body.appendChild(link_tag);
  link_tag = style_tag = null;


    //<a href="#" class="HideS-Au2o-top" id="js-HideS-Au2o"></a>



  var ST = {
      el: document.getElementById("js-HideS-Au2o"),
      top:window.scrollY,
      height:window.innerHeight,
      status: "hide",
      status_final: "",
      timer:null,
      timer_sleep:null,
      hide: {
          up: function(top,h) {
            //console.log(top,h);
            if(top>h){
                ST._show();
            }
          },
          down: function(top,h) {}
      },
      busy: {
          up: function(top,h) {},
          down: function(top,h) {}
      },
      show: {
          up: function(top,h) {
            //console.log(top,h);
            if(top<=h){
              ST._hide();
            }
          },
          down: function(top,h) {
            //console.log(top,h);
              ST._hide();
          }
      },
      judge: function() {

          var top = window.scrollY,
              distance = this.top - top,
              direction = distance > 0 ? "up" : "down";

          this[this.status][direction](top,this.height);

          top = distance = direction = null;
      },
      _hide: function() {
          //console.log("hide");
          this.el.style.animationName = "HideS-Au2o-out";
          this.status = 'busy';
          this._sleep_till("hide");
      },
      _show: function() {
          //console.log("show");
          this.el.style.animationName = "HideS-Au2o-in";
          this.status = 'busy';
          this._sleep_till("show");
      },
      _update_top:function(time){
        clearTimeout(this.timer);
           this.timer = setTimeout(function() {
             //console.log("update top & height");
               ST.top = window.scrollY;
               ST.height = window.innerHeight;
           }, time || 1);
      },
      _sleep_till:function(status){
        clearTimeout(this.timer_sleep);
        this.timer_sleep = setTimeout(function(){
          ST.status = status;
          ST._wakeup();
        },900);
      },
      _wakeup:function(){
        if(this.status == this.status_final){
          //do nothing
        }else{

        }
        this._update_top();
      }
  };

  var thr_scroll = throttle(function(){

    ST.judge();
    ST._update_top(200);
    //console.log(ST);
  }, 150);
  window.addEventListener('scroll', thr_scroll);


})();


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
 