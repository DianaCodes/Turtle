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

    //array to store size for clothing item, this will help prevent duplicate sizes in the cart
    var addedSizes = [];
    
    $('.sidebar-cart-products-div').on('click','.delete', (function () {
        $(this).closest('tr').remove();
    }));

    $('.sidebar-cart-products-div').on('click','.deleteS',(function () {
      //remove row from local storage
      localStorage.removeItem('.new-row-s');

      //subtract quantity from cart value and set
      var x = parseInt($('.cart-value').text()) - 1;
        
      localStorage.setItem('.cart-value',x);
      $('.cart-value').text(x);

      //set quantity to 0
      var quantity = localStorage.getItem('.item-count-s');

      var val = localStorage.getItem('.item-count-s') - quantity;
      localStorage.setItem('.item-count-s',val);
    }));

    $('.sidebar-cart-products-div').on('click','.deleteM',(function () {
      //remove row from local storage
      localStorage.removeItem('.new-row-m');

      //subtract quantity from cart value and set
      var x = parseInt($('.cart-value').text()) - 1;
        
      localStorage.setItem('.cart-value',x);
      $('.cart-value').text(x);

      //set quantity to 0
      var quantity = localStorage.getItem('.item-count-m');

      var val = localStorage.getItem('.item-count-m') - quantity;
      localStorage.setItem('.item-count-m',val);
    }));

    $('.sidebar-cart-products-div').on('click','.deleteL',(function () {
      //remove row from local storage
      localStorage.removeItem('.new-row-l');

      //subtract quantity from cart value and set
      var x = parseInt($('.cart-value').text()) - 1;
        
      localStorage.setItem('.cart-value',x);
      $('.cart-value').text(x);

      //set quantity to 0
      var quantity = localStorage.getItem('.item-count-l');

      var val = localStorage.getItem('.item-count-l') - quantity;
      localStorage.setItem('.item-count-l',val);
    }));
    
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
            
            //adding 1 to cart
            if(parseInt($('.cart-value').text()) < 3){
              var x = parseInt($('.cart-value').text()) + 1;
          
              localStorage.setItem('.cart-value',x);
              $('.cart-value').text(x);
            }
                  
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

            if (localStorage.getItem('size') == 'S') {
              if(localStorage.getItem('.item-count-s') == null){
                localStorage.setItem('.item-count-s','0');
              }

              //Setting local storage values for the 3 sizes
              var itemCounter = parseInt(localStorage.getItem('.item-count-s')) + 1;
            
              localStorage.setItem('.item-count-s',itemCounter);
              
              var quantity = localStorage.getItem('.item-count-s');

              markup = "<tr><td colspan=\"2\"><hr class=\"cart-hr>\">" +
              "</td></tr><tr class=\"sidebar-content-div small-row\">" +
              "<td><img class=\"sidebar-cart-img\" src=\"" + product + "\"></td>" +
              "<td class=\"sidebar-cart-products-div-info\">" + 
              "<div>" + descrip + "</div>" +
              "<div>COLOR: " + color + "</div>" +
              "<div>SIZE: " + siz + "</div><br>" +
              "<div class=\"items-shopping-cart\">ITEMS: <div class=\"increment\">\<</div>"+
              "<div class=\"item-count-s\" value=\"0\">" + quantity + 
              "</div>"+"<div class=\"decrement\">\></div></div>" +
              "<div>PRICE: " + amount + "</div>" +
              "<button class=\"delete deleteS\">DELETE</button></td></tr>";

              localStorage.setItem('.new-row-s',markup);

              var sizeCheck = 's';
              var index = $.inArray(sizeCheck,addedSizes);

              //if there's already a size small in the cart then don't add another row
              if(index < 0) {
                $('.sidebar-cart-products-div tr:last').after(localStorage.getItem('.new-row-s'));
                addedSizes.push(sizeCheck);
              }

            } else if (localStorage.getItem('size') == 'M') {
              if(localStorage.getItem('.item-count-m') == null){
                localStorage.setItem('.item-count-m','0');
              }

              //Setting local storage values for the 3 sizes
              var itemCounter = parseInt(localStorage.getItem('.item-count-m')) + 1;
            
              localStorage.setItem('.item-count-m',itemCounter);
              
              var quantity = localStorage.getItem('.item-count-m');

              markup = "<tr><td colspan=\"2\"><hr class=\"cart-hr>\">" +
              "</td></tr><tr class=\"sidebar-content-div medium-row\">" +
              "<td><img class=\"sidebar-cart-img\" src=\"" + product + "\"></td>" +
              "<td class=\"sidebar-cart-products-div-info\">" + 
              "<div>" + descrip + "</div>" +
              "<div>COLOR: " + color + "</div>" +
              "<div>SIZE: " + siz + "</div><br>" +
              "<div class=\"items-shopping-cart\">ITEMS: <div class=\"increment\">\<</div>"+
              "<div class=\"item-count-m\" value=\"0\">" + quantity + "</div>"+"<div class=\"decrement\">\></div></div>" +
              "<div>PRICE: " + amount + "</div>" +
              "<button class=\"delete deleteM\">DELETE</button></td></tr>";

              localStorage.setItem('.new-row-m',markup);

              var sizeCheck = 'm';
              var index = $.inArray(sizeCheck,addedSizes);

              //if there's already a size medium in the cart then don't add another row
              if(index < 0) {
                $('.sidebar-cart-products-div tr:last').after(localStorage.getItem('.new-row-m'));
                addedSizes.push(sizeCheck);
              }

            } else if (localStorage.getItem('size') == 'L') {
              if(localStorage.getItem('.item-count-l') == null){
                localStorage.setItem('.item-count-l','0');
              }

              //Setting local storage values for the 3 sizes
              var itemCounter = parseInt(localStorage.getItem('.item-count-l')) + 1;
            
              localStorage.setItem('.item-count-l',itemCounter);
              
              var quantity = localStorage.getItem('.item-count-l');

              markup = "<tr><td colspan=\"2\"><hr class=\"cart-hr>\">" +
              "</td></tr><tr class=\"sidebar-content-div large-row\">" +
              "<td><img class=\"sidebar-cart-img\" src=\"" + product + "\"></td>" +
              "<td class=\"sidebar-cart-products-div-info\">" + 
              "<div>" + descrip + "</div>" +
              "<div>COLOR: " + color + "</div>" +
              "<div>SIZE: " + siz + "</div><br>" +
              "<div class=\"items-shopping-cart\">ITEMS: <div class=\"increment\">\<</div>"+
              "<div class=\"item-count-l\"> value=\"0\"" + quantity + "</div>"+"<div class=\"decrement\">\></div></div>" +
              "<div>PRICE: " + amount + "</div>" +
              "<button class=\"delete deleteL\">DELETE</button></td></tr>";

              localStorage.setItem('.new-row-l',markup);

              var sizeCheck = 'l';
              var index = $.inArray(sizeCheck,addedSizes);

              //if there's already a size large in the cart then don't add another row
              if(index < 0) {
                $('.sidebar-cart-products-div tr:last').after(localStorage.getItem('.new-row-l'));
                addedSizes.push(sizeCheck);
              }
            }
        } else {
           alert('Pick a size please.');
        }
    });
                  
    //this function sets the cart number
    $(function() {
      if(localStorage.getItem('.add')=='clicked') {
        $('.cart-value').text(localStorage.getItem('.cart-value'));

        $('.item-count-s').text(localStorage.getItem('.item-count-s'));
        $('.item-count-m').text(localStorage.getItem('.item-count-m'));
        $('.item-count-l').text(localStorage.getItem('.item-count-l'));

        //add row to table if size is small and there is not already a small in the cart
        var sizeCheck = 's';
        var index = $.inArray(sizeCheck,addedSizes);

        //if there's already a size small in the cart then don't add another row
        if(index < 0) {
          $('.sidebar-cart-products-div tr:last').after(localStorage.getItem('.new-row-s'));
          addedSizes.push(sizeCheck);
        }

        //set text for small quantity in cart
        $('.item-count-s').text(localStorage.getItem('.item-count-s'));
        
        //add row to table if size is medium and there is not already a medium in the cart
        var sizeCheck = 'm';
        var index = $.inArray(sizeCheck,addedSizes);

        //if there's already a size small in the cart then don't add another row
        if(index < 0) {
          $('.sidebar-cart-products-div tr:last').after(localStorage.getItem('.new-row-m'));
          addedSizes.push(sizeCheck);
        }

        //set text for medium quantity in cart
        $('.item-count-m').text(localStorage.getItem('.item-count-m'));
      
        //add row to table if size is large and there is not already a large in the cart
        var sizeCheck = 'l';
        var index = $.inArray(sizeCheck,addedSizes);

        //if there's already a size small in the cart then don't add another row
        if(index < 0) {
          $('.sidebar-cart-products-div tr:last').after(localStorage.getItem('.new-row-l'));
          addedSizes.push(sizeCheck);
        }

        //set text for large quantity in cart
        $('.item-count-l').text(localStorage.getItem('.item-count-l'));
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
        };
    
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
        };
    
        reader.readAsDataURL(input.files[0]);
      }
    }

    //When form is submitted, display alert
    $("#form1").submit(function(){
      alert("Form submitted. Reload webpage to see updates.");
    });

    //Search bar
    $('.searchButton').click(function (){
      var searchValue = $('.searchBox').val().toLowerCase();

      //if the string contains dress. indexOf returns -1 if the string isn't found
      if(searchValue.indexOf("dress") >= 0){
          window.location.href="woman-1-description-page.php";
      } else {
        alert("Item not found.");
      }
    });
});