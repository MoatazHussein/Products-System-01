<?php

require(__DIR__ . "/API_Requests.php");
require(__DIR__ . "/../services/productService.php");
require(__DIR__ . "/../factory/Product.php");

spl_autoload_register(function ($class) {
    require(__DIR__ . "/../models/". $class . ".php");
});


class productApi extends API
{

    public function getRequest()
    {

        ProductService::getProducts();
    }

    public function postRequest()
    {

        $items = file_get_contents('php://input');
        ProductService::addNewProduct($items);
    }

    public function deleteRequest()
    {

        $itemsToDelete = file_get_contents('php://input');
        $deletedItems = json_decode($itemsToDelete, true);

        ProductService::delete($deletedItems);
          
    }
}

$productApi = new productApi();
$productApi->requestHandler();
?>