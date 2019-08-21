$(document).ready(function () {
    //Scroll to top of page when page is refreshed
    $(window).on('beforeunload', function() {
      $(window).scrollTop(0);
    });

    //Background Slideshow
    //Explanation on how this works: https://snook.ca/archives/javascript/simplest-jquery-slideshow
    $(function(){
        $('.slideshow img:gt(0)').hide();
        setInterval(function(){
          $('.slideshow :first-child').fadeOut()
             .next('img').fadeIn()
             .end().appendTo('.slideshow');}, 
          4000);
    });

    $(function(){
        $('.slide-desc-div div:gt(0)').hide();
        setInterval(function(){
          $('.slide-desc-div :first-child').fadeOut()
             .next('div').fadeIn()
             .end().appendTo('.slide-desc-div');}, 
          4000);
    });

  //Category Drop Downs
  $('.woman').click(function () {
                    $('.category-divs').children().hide();
                    $('#category-div2').show();
                    });
  
  $('.man').click(function () {
                  $('.category-divs').children().hide();
                  $('#category-div3').show();
                  });
  
  //Clothing Description Page
  $('.hamburger').click(function(){
                        $(this).toggleClass('open');
                        $('.hidden-menu').toggle();
                        });
  
  $('.size-icon1').click(function() {
                         $('.size-icon2').removeClass('size-icon-active');
                         $('.size-icon3').removeClass('size-icon-active');
                         $(this).addClass('size-icon-active');
                         
                         var small = 'S';
                         
                         localStorage.setItem('size',small);
                         });
  
  $('.size-icon2').click(function() {
                         $('.size-icon1').removeClass('size-icon-active');
                         $('.size-icon3').removeClass('size-icon-active');
                         $(this).addClass('size-icon-active');
                         
                         var medium = 'M';
                         
                         localStorage.setItem('size',medium);
                         });
  
  $('.size-icon3').click(function() {
                         $('.size-icon1').removeClass('size-icon-active');
                         $('.size-icon2').removeClass('size-icon-active');
                         $('.clothing-sizes').removeClass('size-icon-active');
                         $(this).addClass('size-icon-active');
                         
                         var large = 'L';
                         
                         localStorage.setItem('size',large);
                         });
  
  //Code to set size for clothing item when add is clicked so that in cart it is displayed as so
  $(function() {
    switch (localStorage.getItem('size')) {
    case 'S':
    $('.size').text('S');
    break;
    case 'M':
    $('.size').text('M');
    break;
    case 'L':
    $('.size').text('L');
    break;
    default:
    $('.size').text('M');
    }
    });
                  
  //Function that sets count to equal the number in the cart
  var price,total,count = 0;
                  
 // $(function() {
        //if(parseInt(localStorage.getItem('.cart-value'))>=0) {
        //    count = parseInt(localStorage.getItem('.cart-value'));
    
       //     $('.cart-value').text(count);
      //  }
   // });
                  
    //Cart
    $('.w3-button').click(function () {
      $('#mySidebar').show();
    });
    
    $('.w3-close').click(function () {
      $('#mySidebar').hide();
    });
    
    //when delete is clicked on the shopping cart page, remove the row and subtract the quantity from count. Then set count as the value for quantity.
    $('.sidebar-cart-products-div').on('click','.delete', function (e) {
        localStorage.setItem('.delete','clicked');
        
        localStorage.setItem('.add','not-clicked');
        
        $(this).closest('div').remove();

        var x = parseInt($('.cart-value').text()) - 1;
        
        localStorage.setItem('.cart-value',x);
        $('.cart-value').text(x);
    });

    $(function() {
      if(localStorage.getItem('.delete')=='clicked') {
        $('.cart-value').text(localStorage.getItem('.cart-value'));
      }
    });
    
    //when remove button is clicked on the shopping cart page, then decrement the quantity by 1
    $('.remove').click(function () { 
        
        localStorage.setItem('.add','not-clicked');
        
        localStorage.setItem('.remove','clicked');
        
        if(parseInt(localStorage.getItem('.cart-value'))>1) {
            count = parseInt(localStorage.getItem('.cart-value')) - 1;
            
            $('.cart-value').text(count);
            localStorage.setItem('.cart-value',parseInt(localStorage.getItem('.cart-value')));
        } else if(parseInt(localStorage.getItem('.cart-value'))==0) {
            
            localStorage.setItem('.cart-value',parseInt(localStorage.getItem('.cart-value')));
            
            localStorage.setItem('.delete','clicked');
        }
    });
    
    $(function() {        
        if(localStorage.getItem('.remove')=='clicked') {
            price = $('.cart-value').text() * $('.outwear1-price').text();
            
            $('.outwear1-price').text(price.toFixed(2));
            
            localStorage.setItem('.clothing-size','not-clicked');
        }
     });
    
    //This is code for the Add buton on a clothing description page.
    $('.clothing-size').click(function() {
        localStorage.setItem('.clothing-size','clicked');
    });
            
  //moves the cart number when add is clicked
  function doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
        element.animate({marginTop: '-='+distance}, speed)
        .animate({marginTop: '+='+distance}, speed);
    }
  }
                  
    $('.add').click(function() {
        if(localStorage.getItem('.clothing-size')=='clicked'){
            doBounce($('.cart-value'),3,'5px',100);
                    
            localStorage.setItem('.add','clicked');

            localStorage.setItem('.delete','not-clicked');
            
            var x = parseInt($('.cart-value').text()) + 1;
        
            localStorage.setItem('.cart-value',x);
            $('.cart-value').text(x);
                  
            //localStorage.setItem('.quantity-num',count);
            
            $('.size-icon1').removeClass('size-icon-active');
            $('.size-icon2').removeClass('size-icon-active');
            $('.size-icon3').removeClass('size-icon-active');

            //price = localStorage.getItem('.cart-value').text() * $('.outwear1-price').text();
    
            //$('.outwear1-price').text(price.toFixed(2));
    
            //total += price;
      
            //$('.total-shopping-cart-page').text(total.toFixed(2));
        
            var product = $('img.images').attr('src'); //Get image src
            var descrip = $('.description').text().toUpperCase();
            var color = $('.color').text().toUpperCase();
            var siz = localStorage.getItem('size');
            var amount = $('.amount').text();

            markup = "<hr/><div class=\"sidebar-cart-img\"><img src=\"" + product + "\"></div>" +
            "<div class=\"sidebar-cart-products-div-info\">" + 
            "<div>" + descrip + "</div>" +
            "<div>COLOR: " + color + "</div>" +
            "<div>SIZE: " + siz + "</div>" +
            "<div class=\"items-shopping-cart\">ITEMS:   <div class=\"increment\">\<</div>"+"   "+"<div class=\"item-count\">1</div>"+"   "+"<div class=\"decrement\">\></div></div>" +
            "<div>PRICE: " + amount + "</div>" +
            "<div class=\"delete\">DELETE</div></div>";

            localStorage.setItem('.new-row',markup);
        } else {
           alert('Pick a size please.');
        }
    });
                  
    //if add is clicked then show the item on cart page
    $(function() {
      if(localStorage.getItem('.add')=='clicked') {
        $('.cart-value').text(localStorage.getItem('.cart-value'));

        if(localStorage.getItem('.size')=='S') {
          $('.sidebar-cart-products-div').append(localStorage.getItem('.new-row'));
        } else if(localStorage.getItem('.size')=='M') {
          $('.sidebar-cart-products-div').append(localStorage.getItem('.new-row'));
        } else if(localStorage.getItem('.size')=='L') {
          $('.sidebar-cart-products-div').append(localStorage.getItem('.new-row'));
        }
      }
    });

    //upload image from computer and on to the site
    $("#imgInp1").change(function() {
      readURL1(this);
    });

    function readURL1(input) {

      if (input.files && input.files[0]) {
        var reader = new FileReader();
    
        reader.onload = function(e) {
          $('#image-description-js1').attr('src', e.target.result);
        }
    
        reader.readAsDataURL(input.files[0]);
      }
    }
    $("#imgInp2").change(function() {
      readURL2(this);
    });

    function readURL2(input) {

      if (input.files && input.files[0]) {
        var reader = new FileReader();
    
        reader.onload = function(e) {
          $('#image-description-js2').attr('src', e.target.result);
        }
    
        reader.readAsDataURL(input.files[0]);
      }
    }

    //When form is submitted, display alert
    $("#form1").submit(function(){
      alert("Form submitted. Reload webpage to see updates.");
  });
});