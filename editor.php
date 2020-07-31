<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">

<html>
<?php
//Include the database configuration file
include 'dbConfig.php';
?>
    
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
        $query6 = "SELECT Description FROM clothingdetails WHERE ClothingID = 1";
        $query7 = "SELECT ModelHeight FROM clothingdetails WHERE ClothingID = 1";

        $result1 = $db->query($query1);
        $result2 = $db->query($query2);
        $result3 = $db->query($query3);
        $result4 = $db->query($query4);
        $result5 = $db->query($query5);
        $result6 = $db->query($query6);
        $result7 = $db->query($query7);
    ?>

    <div class="main-body">
            <div class="editor-header">
                <h1>Update and Save!</h1>
            </div>

            <!--Using iframe to avoid having to use ajax to stay on the same page when form is submitted,
            data is still sent to the action url! Avoiding ajax, because I couldn't find a simple solution
            to send data to the action url without redirecting the page.-->
            <iframe name="hiddenFrame" class="hide" style="display:none"></iframe>
            
            <form id="form1" method="POST" action="processForm.php" enctype="multipart/form-data" class="ajaxform" target="hiddenFrame">
                <div class="clothing-description-image-div">
                    <div class="image-description-div">
                            <input type="file" size="20" id="imgInp1" value="" name="file1" id="file1">

                            <?php
                            /*display image from database*/
                            while($row = $result1->fetch_assoc()){
                                $field = $row["Image1"];

                                echo '<img id="image-description-js1" src="Graphics/'.$field.'"class="javascript-img images" alt="Woman wearing coat. Source is https://www2.hm.com/en_us/productpage.0650122001.html." class="outerwear-1">';
                            }
                            ?>
                    </div>

                    <div class="image-description-div">
                            <input type="file" size="20" id="imgInp2" name="file2" id="file2">

                            <?php
                            while($row = $result2->fetch_assoc()){
                                $field = $row["Image2"];

                                echo '<img id="image-description-js2" src="Graphics/'.$field.'"class="javascript-img images" alt="Woman wearing coat. Source is https://www2.hm.com/en_us/productpage.0650122001.html." class="outerwear-1">';
                            }
                            ?>
                    </div>

                    <div class="clothing-page-descriptions">
                        <p>
                            <?php
                                while($row = $result3->fetch_assoc()){
                                    $field = $row["ClothingName"];

                                    echo '<div>Clothing Name<input type="text" name="clothingName" class="description" value="'.$field.'"></div>';
                                }
                            ?>
                            <br><br>
                            <?php
                                while($row = $result4->fetch_assoc()){
                                    $field = $row["Price"];

                                    echo '<div>Price<input type="text" name="amount" class="amount" value="'.$field.'"></div>';
                                }
                            ?>
                            <br><br>
                            <?php
                                while($row = $result5->fetch_assoc()){
                                    $field = $row["Color"];

                                    echo '<div>Color<input type="text" name="color" class="color" value="'.$field.'"></div>';
                                }
                            ?>
                            <br><br>
                            <?php
                                while($row = $result6->fetch_assoc()){
                                    $field = $row["Description"];

                                    echo '<div>Description<input type="text" name="description" value="'.$field.'"></div>';
                                }
                            ?>
                            <br><br>
                            <?php
                                while($row = $result7->fetch_assoc()){
                                    $field = $row["ModelHeight"];

                                    echo '<div>Model Height in cm <input type="text" name="modelHeight" value="'.$field.'"></div>';
                                }
                            ?>
                        </p>

                        <div class="clothing-size clothing-sizes-description-page">
                            <div class="size-icon1">S</div>
                            <div class="size-icon2">M</div>
                            <div class="size-icon3">L</div>
                        </div>

                        <br><br><div class="size-guide"><a href="">Size Guide</a></div>

                    </div>
                </div>

                <input type="submit" id="submit" name="submit" value="SUBMIT" class="editor-submit">
            </form>

    </div>

    <?php
    mysqli_close($db);
    ?>
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    
    <script src="turtle.js"></script>

</body>
    
</html>
        
