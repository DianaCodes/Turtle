<?php
//PHP for editor.php
//Include the database configuration file
include 'dbConfig.php';
$statusMsg = '';

// File upload path

$targetDir = "";
$fileName1 = basename($_FILES["file1"]["name"]);
$targetFilePath1 = $targetDir . $fileName1;
$fileType1 = pathinfo($targetFilePath1,PATHINFO_EXTENSION);

$fileName2 = basename($_FILES["file2"]["name"]);
$targetFilePath2 = $targetDir . $fileName2;
$fileType2 = pathinfo($targetFilePath2,PATHINFO_EXTENSION);

//Uploading database
if(isset($_POST["submit"]) && !empty($_FILES["file1"]["name"])){
    // Allow certain file formats
    $allowTypes = array('jpg','png','jpeg','gif','pdf');
    if(in_array($fileType1, $allowTypes)){
        // Upload file to server
        if(move_uploaded_file($_FILES["file1"]["tmp_name"], $targetFilePath1)){
            // Insert image file name into database
            $insert = $db->query("UPDATE clothingdetails SET Image1 =\"".$fileName1."\" WHERE clothingId = 1");
            if($insert){
                $statusMsg = "The file ".$fileName1. " has been uploaded successfully.";
            }else{
                $statusMsg = "File upload failed, please try again.";
                echo $db->error;
            } 
        }else{
            $statusMsg = "Sorry, there was an error uploading your file.";
        }
    }else{
        $statusMsg = 'Sorry, only JPG, JPEG, PNG, GIF, & PDF files are allowed to upload.';
    }
}else{
    $statusMsg = 'Please select a file to upload.';
}

if(isset($_POST["submit"]) && !empty($_FILES["file2"]["name"])){
    // Allow certain file formats
    $allowTypes = array('jpg','png','jpeg','gif','pdf');
    if(in_array($fileType2, $allowTypes)){
        // Upload file to server
        if(move_uploaded_file($_FILES["file2"]["tmp_name"], $targetFilePath2)){
            // Insert image file name into database
            $insert = $db->query("UPDATE clothingdetails SET Image2 =\"".$fileName2."\" WHERE clothingId = 1");
            if($insert){
                $statusMsg = "The file ".$fileName2. " has been uploaded successfully.";
            }else{
                $statusMsg = "File upload failed, please try again.";
                echo $db->error;
            } 
        }else{
            $statusMsg = "Sorry, there was an error uploading your file.";
        }
    }else{
        $statusMsg = 'Sorry, only JPG, JPEG, PNG, GIF, & PDF files are allowed to upload.';
    }
}else{
    $statusMsg = 'Please select a file to upload.';
}

if(isset($_POST["submit"]) && isset($_POST["clothingName"])) {
    if(preg_match("/[^A-Za-z'-\s]/",$_POST['clothingName'])) {
        die ("Clothing can only consist of letters and spaces.");
    }
    
    // Insert into database
    $insert = $db->query("UPDATE clothingdetails SET ClothingName =\"".$_POST['clothingName']."\" WHERE clothingId = 1");
    if($insert){
        $statusMsg = "Uploaded successful.";
    }else{
        $statusMsg = "Upload failed, please try again.";
        echo $db->error;
    } 
}

if(isset($_POST["submit"]) && isset($_POST["amount"])) {
    if(preg_match("/[^0-9,\.]/",$_POST['amount'])) {
        die ("Price can only consist of numbers, commas, and decimals.");
    }
    
    // Insert into database
    $insert = $db->query("UPDATE clothingdetails SET Price =\"".$_POST['amount']."\" WHERE clothingId = 1");
    if($insert){
        $statusMsg = "Uploaded successful.";
    }else{
        $statusMsg = "Upload failed, please try again.";
        echo $db->error;
    } 
}

if(isset($_POST["submit"]) && isset($_POST["color"])) {
    if(preg_match("/[^A-Za-z]/",$_POST['color'])) {
        die ("Color can only consist of letters.");
    }
    
    // Insert into database
    $insert = $db->query("UPDATE clothingdetails SET Color =\"".$_POST['color']."\" WHERE clothingId = 1");
    if($insert){
        $statusMsg = "Uploaded successful.";
    }else{
        $statusMsg = "Upload failed, please try again.";
        echo $db->error;
    } 
}

if(isset($_POST["submit"]) && isset($_POST["description"])) {
    // Insert into database
    $insert = $db->query("UPDATE clothingdetails SET Description =\"".$_POST['description']."\" WHERE clothingId = 1");
    if($insert){
        $statusMsg = "Uploaded successful.";
    }else{
        $statusMsg = "Upload failed, please try again.";
        echo $db->error;
    } 
}

if(isset($_POST["submit"]) && isset($_POST["modelHeight"])) {
    if(preg_match("/[^0-9\'\"]/",$_POST['modelHeight'])) {
        die ("Height can only consist of numbers, \', and \".");
    }
    
    // Insert into database
    $insert = $db->query("UPDATE clothingdetails SET ModelHeight =\"".$_POST['modelHeight']."\" WHERE clothingId = 1");
    if($insert){
        $statusMsg = "Uploaded successful.";
    }else{
        $statusMsg = "Upload failed, please try again.";
        echo $db->error;
    } 
}
?>