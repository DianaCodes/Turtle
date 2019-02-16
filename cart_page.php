<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
<html>
    
<head>
    
    <meta charset="utf-8">
    <title>Turtle Shopping Site</title>
    <link rel="stylesheet" href="turtle.css">
    
</head>
    
<body class="cart-page-body">
    <div class="container">
        
        <div class="top">
            <a class="logo" href="turtle.php">TURTLE</a>
        </div>

        <div class="cart-middle">
            <div class="cart-page-div">

                <h2 id="shopping">SHOPPING CART</h2>

                <table class="top-table">
                    <thead>
                        <tr class="table-head">
                            <th>PRODUCT</th>
                            <th>DESCRIPTION</th>
                            <th>COLOR</th>
                            <th>SIZE</th>
                            <th>ITEMS</th>
                            <th>AMOUNT</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>

                    <tbody class="table-body"></tbody>
                </table>
            </div>

            <div class="cart-page-totals">
                <table>
                    <tfoot>
                        <tr>
                            <th colspan="6" scope="row">Total:</th>
                            <td headers="priceHeader">
                                <div class="total-shopping-cart-page">
                                    100
                                </div>
                                <div>
                                    USD
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td headers="priceHeader" class="before-taxes"><em>* Before taxes</em></td>
                        </tr>
                    </tfoot>
                </table>

                <button type="submit" class="checkout">CHECKOUT</button>

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
