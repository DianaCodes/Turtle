<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">

<!--Credentials for remote server-->
<?php
//Include the database configuration file
include 'dbConfig.php';
?>

<html>
    
<head>
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Turtle Shopping Site</title>
    <link rel="stylesheet" href="turtle.css">
    
</head>
    
<body class="clothing-page-body">
    <?php
        $query1 = "SELECT Image1 FROM clothingdetails WHERE ClothingID = 1";
        $query2 = "SELECT Image2 FROM clothingdetails WHERE ClothingID = 1";
        $query3 = "SELECT ClothingName FROM clothingdetails WHERE ClothingID = 1";
        $query4 = "SELECT Price FROM clothingdetails WHERE ClothingID = 1";
        $query5 = "SELECT Color FROM clothingdetails WHERE ClothingID = 1";
        $query6 = "SELECT `Description` FROM clothingdetails WHERE ClothingID = 1";
        $query7 = "SELECT ModelHeight FROM clothingdetails WHERE ClothingID = 1";

        $result1 = $db->query($query1);
        $result2 = $db->query($query2);
        $result3 = $db->query($query3);
        $result4 = $db->query($query4);
        $result5 = $db->query($query5);
        $result6 = $db->query($query6);
        $result7 = $db->query($query7);

        $result1Sidebar = $db->query($query1);
        $result3Sidebar = $db->query($query3);
        $result4Sidebar = $db->query($query4);
    ?>

    <div class="w3-sidebar w3-bar-block w3-border-left w3-large" style="display:none" id="mySidebar">
        <button class="w3-bar-item w3-large w3-close">Close &times;</button>
        <div class="sidebar-title">SHOPPING CART</div>
        <table class="sidebar-cart-products-div">
            <tr class="sidebar-product-top">
                <th>PRODUCT</th>
                <th>DESCRIPTION</th>
            </tr>
        </table>

        <div class="">
            <div>Total: $<span class="cart-total">0</span></div>
        </div>

        <button type="submit" class="">CHECKOUT</button>
    </div>

    <div class="main-body">
        <div class="container">
            
            <div class="top clothing-description-user-top">
                <div class="logo-clothing-desciption">
                    <div class="hamburger">
                        <span class="bar1"></span>
                        <span class="bar2"></span>
                        <span class="bar3"></span>
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
                                    <ul><a>CLOTHING</a></ul>
                                </ul>
                            </div>
                        </ul>
                    </div>

                    <div class="logo-clothing-page">
                        <a href="turtle.php">TURTLE</a>
                    </div>
                </div>

                <div class="search clothing-page-search">
                    <input type="text" name="search" class="searchBox" placeholder="Search...">

                    <button type="button" value="Submit" class="searchButton">GO</button>
                </div>
                
                <div class="cart-div description-page-cart-icon w3-button">
                    <!--<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>!-->
                    <div class="cart-image"><input type="image" class="cart" src="Graphics/shopping-bag.png" alt="Image of shopping cart."></div>
                    
                    <div class="cart-value cart-number-top-right" value="0">0</div>
                </div>
            </div> 
            
            <div class="clothing-description-image-div clothing-description-css">
                <div>
                    <?php
                    while($row = $result1->fetch_assoc()){
                        $field = $row["Image1"];

                        echo '<img src="Graphics/'.$field.'"class="javascript-img images" alt="Woman wearing coat. Source is https://www2.hm.com/en_us/productpage.0650122001.html." class="outerwear-1">';
                    }
                    ?>
                </div>

                <div>
                    <?php
                    while($row = $result2->fetch_assoc()){
                        $field = $row["Image2"];

                        echo '<img src="Graphics/'.$field.'"class="javascript-img images" alt="Woman wearing coat. Source is https://www2.hm.com/en_us/productpage.0650122001.html." class="outerwear-1">';
                    }
                    ?>
                </div>

                <div class="clothing-page-descriptions">
                    <p>
                        <?php
                            while($row = $result3->fetch_assoc()){
                                $field = $row["ClothingName"];

                                echo '<div class="description">'.$field.'</div>';
                            }
                        ?>
                        <br><br>
                        <?php
                            while($row = $result4->fetch_assoc()){
                                $field = $row["Price"];

                                echo '<div class="amount">'.$field.'</div>';
                            }
                        ?>
                        <br><br>
                        <?php
                            while($row = $result5->fetch_assoc()){
                                $field = $row["Color"];

                                echo '<div class="color">'.$field.'</div>';
                            }
                        ?>
                        <br><br>
                        <?php
                            while($row = $result6->fetch_assoc()){
                                $field = $row["Description"];

                                echo '<div>'.$field.'</div>';
                            }
                        ?>
                        <br><br>
                        <?php
                            while($row = $result7->fetch_assoc()){
                                $field = $row["ModelHeight"];

                                echo '<div>Model Height: '.$field.' cm</div>';
                            }
                        ?>
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
        </div>
    </div>

    <?php
    mysqli_close($db);
    ?>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

    <script src="turtle.js"></script>

</body>
    
</html>
        
