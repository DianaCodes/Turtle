<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html>
    
<head>
    
    <meta charset="utf-8">
    <title>Turtle Shopping Site</title>
    <link rel="stylesheet" href="turtle.css">
    
</head>
    
<body class="clothing-page-body">
    <div class="container">
        
        <div class="top-clothing-page">
            <div class="logo-clothing-desciption">
                <div class="hamburger">
                    <span class="bar1"></span>
                    <span class="bar2"></span>
                    <span class="bar3"></span>
                </div>

                <div class="logo-clothing-page">
                    <a href="turtle.php">TURTLE</a>
                </div>
            </div>

            <div class="search clothing-page-search">
                SEARCH: <input type="text" name="search">

                <button type="button" value="Submit">GO</button>
            </div>
            
            <a href="cart_page.php"><div class="cart-div">
                <div class="cart-image-div"><input type="image" class="cart" src="https://static.zara.net/stdstatic/1.88.1-b.2/images/icon-32-shopping-bag.svg" alt="Image of shopping cart provided by ZARA.com"></div>
                
                <div class="cart-value cart-number-top-right" value="0">0</div>
            </div></a>
        </div>
        
        <div class="hidden-menu">
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
        
        <div class="clothing-description-image-div">
            <div>
                <img src="outerwear-2.jpeg" alt="Woman wearing coat. Source is https://www2.hm.com/en_us/productpage.0626587010.html.">
            </div>

            <div>
                <img src="outerwear-2-2.jpeg" alt="Woman wearing coat. Source is https://www2.hm.com/en_us/productpage.0626587010.html">
            </div>

            <div class="clothing-page-descriptions">
                <p>
                    Parka<br><br>$39.99<br><br>Black<br><br>Coat to warm you up this winter.<br><br>Model Height: 5' 8".
                </p>

                <div class="clothing-size clothing-sizes-description-page">
                    <div class="size-icon1">S</div>
                    <div class="size-icon2">M</div>
                    <div class="size-icon3">L</div>
                </div>

                <br><br><div class="size-guide"><a href="">Size Guide</a></div>

                <br><br><button type="button" class="clothing-description-add-button add">Add</button>
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
        