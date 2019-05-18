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
            <img src="Graphics/p1.jpg" alt="Girl in forest.">
            <img src="Graphics/p2.jpg" alt="Three women's backs with their arms around each other.">
            <img src="Graphics/p3.jpg" alt="Man and woman holding hands.">
        </div>
        
        <div class="slide-desc-div">
            <div id="intro-slideshow-desc1">SUNDRESSES ON SALE!</div>
            <div id="intro-slideshow-desc2">DENIM TO MAKE MEMORIES IN.</div>
            <div id="intro-slideshow-desc3">SWEATSHIRTS FOR $25.</div>
        </div>
        
        <div class="top">
            <a class="logo" href="turtle.php">TURTLE</a>

            <div class="search">
                <input type="text" name="search" class="searchBox" placeholder="Search...">

                <button type="button" value="Submit" class="searchButton">GO</button>
            </div>
            
            <a href="cart_page.php"><div class="cart-div description-page-cart-icon">
                <!--<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>!-->
                <div class="cart-image"><input type="image" class="cart" src="Graphics/shopping-bag.png" alt="Image of shopping cart."></div>
                
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
                            <ul><a>CLOTHING</a></ul>
                        </ul>
                    </div>
                </ul>
            </div>
        </div>

        <div class="footer">
            <div class="socialmedia">
                <img src="Graphics/facebook.png" class="social-pic" alt="Facebook icon">
                
                <img src="Graphics/instagram.png" class="social-pic" alt="Instagram icon, details about source below">
                <!--
                <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                -->
                
                <img src="Graphics/twitter.png" class="social-pic" alt="Twitter icon">
            </div>
            
            <small class="copy">&copy; TURTLE by Diana Arita</small>
        </div>
    </div>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

    <script src="turtle.js"></script>

</body>
    
</html>
