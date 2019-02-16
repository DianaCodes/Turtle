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
    //when delete is clicked on the shopping cart page, remove the tbody row and subtract the quantity from count. Then set count as the value for quantity.
    $('.delete').click(function () {
        localStorage.setItem('.delete','clicked');
        
        localStorage.setItem('.add','not-clicked');
        
        count = parseInt(localStorage.getItem('.cart-value'));
                       
        count -= $('.shopping-cart-page-quantity').html();
        $('.cart-value').text(count);
        localStorage.setItem('.cart-value',parseInt(localStorage.getItem('.cart-value')));
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
            doBounce($('.cart-number-top-right'),3,'5px',100);
                    
            localStorage.setItem('.add','clicked');

            localStorage.setItem('.delete','not-clicked');
            
            var x = parseInt($('.cart-value').text()) + 1;
        
            localStorage.setItem('.cart-value',x);
            $('.cart-value').text(x);
                  
            localStorage.setItem('.quantity-num',count);
            
            $('.size-icon1').removeClass('size-icon-active');
            $('.size-icon2').removeClass('size-icon-active');
            $('.size-icon3').removeClass('size-icon-active');
                    
                    /*
                     "<td class="detail"><a><img src=" + product + "></a></td>" +
                     "<td>" + descrip + "</td>" +
                     "<td>" + color + "</td>" +
                     "<td>" + siz + "</td>" +
                     "<td class="quantity">" +
                     "<button type="button" class="remove"><img src="back.png"></button>" +
                     "<div class="cart-value shopping-cart-page-quantity" value="0">0</div>"
                     "<button type="button" class="shopping-cart-add"><img src="next.png"></button>" +
                     "</td>" +
                     "<td>" + amount + "</td>" +
                     "<td class="delete">" +
                     "<button type="button" class="cart-page-button-delete"><img src="close-button.png"></button>" +
                     "</td>" +
                     "</tr>";
                     
                    //Remove button source
                    <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                    
                    //Add button source
                     <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                     
                     //Delete button source
                     <div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                     */
        } else {
           alert('Pick a size please.');
        }
    });
                  
    //if add is clicked on outerwear1 page, then show the item on cart page
    $(function() {
      if(localStorage.getItem('.add')=='clicked') {
        $('.cart-value').text(localStorage.getItem('.cart-value'));
        /*price = localStorage.getItem('.cart-value').text() * $('.outwear1-price').text();
    
        $('.outwear1-price').text(price.toFixed(2));
    
        total += price;
    
        $('.total-shopping-cart-page').text(total.toFixed(2));
      
          var product = $('.outerwear-1').attr('src'); //Get image src
          var descrip = $(".description").val();
          var color = $(".color").val();
          var siz = localStorage.getItem('size');
          var amount = $(".amount").val();*/
      
          var markup = "<tr>" + "hello"
          "<td><a><img></a></td>" +
          "<td>" + "parka" + "</td>" +
          "<td>" + "color" + "</td>" +
          "<td>" + "siz" + "</td>" +
          "<td>" +
          "<button><img></button>" +
          "<div>0</div>"
          "<button><img></button>" +
          "</td>" +
          "<td>" + "amount" + "</td>" +
          "<td>" +
          "<button><img></button>" +
          "</td>" +
          "</tr>";
      
          $(".table-body").append(markup);
       }
    });
});

/*
 <tr class="order-item">
 <td class="detail"><a alt="Woman wearing coat. Source is https://www2.hm.com/en_us/productpage.0650122001.php."><img src="outerwear-1.jpeg"></a></td>
 <td class="detail-description"><a alt="">Parka</a></td>
 <td class="color">Black</td>
 <td class="size">M</td>
 <td class="quantity">
 <button type="button" class="remove"><img src="back.png"></button>
 
 <!--
 <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
 -->
 
 <div class="cart-value shopping-cart-page-quantity" value="0">0</div>
 
 <!--
 <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
 -->
 
 <button type="button" class="shopping-cart-add"><img src="next.png"></button>
 </td>
 
 <td class="price">
 <div>
 $
 </div>
 <div class="outwear1-price">
 49.99
 </div>
 </td>
 
 <td class="delete">
 <button type="button" class="cart-page-button-delete"><img src="close-button.png"></button>
 <!--
 <div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
 -->
 
 </td>
 </tr>
 
 <tr class="cart-page-line">
 <td colspan="7"></td>
 </tr>
 
 <tbody></tbody>
 
 <tr class="cart-page-line">
 <td colspan="7"></td>
 </tr>
 */
