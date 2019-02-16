 <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html>
<!--comment-->
<head>
    
    <meta charset="utf-8">
    <title>Turtle Shopping Site</title>
    <link rel="stylesheet" href="turtle.css">
    
</head>
    
<body>
    <div class="container">
        <div class="slideshow">
            <img src="p1.jpeg" alt="Girl in forest.">
            <img src="p2.jpeg" alt="Three women's backs with their arms around each other.">
            <img src="p3.jpeg" alt="Man and woman holding hands.">
        </div>
        
        <div class="slide-desc-div">
            <div id="intro-slideshow-desc1">SUNDRESSES ON SALE!</div>
            <div id="intro-slideshow-desc2">DENIM TO MAKE MEMORIES IN.</div>
            <div id="intro-slideshow-desc3">SWEATSHIRTS FOR $25.</div>
        </div>
        
        <div class="top">
            <a class="logo" href="turtle.php">TURTLE</a>

            <div class="search">
                SEARCH: <input type="text" name="search">

                <button type="button" value="Submit">GO</button>
            </div>
            
            <a href="cart_page.php"><div class="cart-div">
                <div class="cart-image-div"><img type="image" class="cart" src="https://static.zara.net/stdstatic/1.88.1-b.2/images/icon-32-shopping-bag.svg" alt="Image of shopping cart provided by ZARA.com"></div>
                
                <div class="cart-value cart-number-top-right" value="0">0</div>
            </div></a>
        </div>

        <div>
            <div class="categories">
                <ul>
                    <ul><a class="woman">WOMAN</a></ul>
                    <div class="category-divs">
                        <ul id="category-div2">
                            <ul><a href="clothing-woman.php">CLOTHING</a></ul>
                        </ul>
                    </div>

                    <ul><a class="man">MAN</a></ul>
                    <div class="category-divs">
                        <ul id="category-div3">
                            <ul><a href="clothing-man.php">CLOTHING</a></ul>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>

        <div class="footer">
            <div class="socialmedia">
                <img src="facebook.png" class="social-pic" alt="Facebook icon">
                
                <img src="instagram.png" class="social-pic" alt="Instagram icon, details about source below">
                <!--
                <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                -->
                
                <img src="twitter.png" class="social-pic" alt="Twitter icon">
            </div>
            
            <small class="copy">&copy; TURTLE by Diana Arita</small>
        </div>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

    <script src="turtle.js"></script>

</body>
    
</html>
