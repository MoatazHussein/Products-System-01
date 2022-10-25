<?php

require(__DIR__ . "/DB_conn.php");

abstract class ProductService
{

  public static function addNewProduct($items)
  {


    $productElements = json_decode($items, true);

    $sku = $productElements[0];
    $name = $productElements[1];
    $price = (float)$productElements[2] . " $";
    $type = $productElements[3];


    $product = new Product();
    $product->setType($type);

    $description = $product->selectProduct($productElements);

    $insertedData = new DB_conn();
    $insertedData->insert($sku, $name, $price, $type, $description);
    $insertedData->closeConnection();
  }

  public static function delete($deletedItems)
  {

    $database = new DB_conn();

    for ($i = 0; $i < sizeof($deletedItems); $i++) {

      $database->delete($deletedItems[$i]);
    }

    header("Location:  ../../index.php");
  }

  public static function getProducts()
  {


    $products_arr = array();

    $database = new DB_conn();

    $result = $database->getData();
    while ($row = mysqli_fetch_array($result)) {
      $ID = $row['ID'];
      $SKU = $row['SKU'];
      $Name = $row['Name'];
      $Price = $row['Price'];
      $Description = $row['Description'];

      $products_arr[] = array(
        "ID" => $ID,
        "SKU" => $SKU,
        "Name" => $Name,
        "Price" => $Price,
        "Description" => $Description
      );
    }


    echo json_encode($products_arr);
  }
}
