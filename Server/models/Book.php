<?php

class Book implements ProductType
{

    public function insertProduct(Product $product,$arr)
    {

    $description = "Weight " .(float)$arr[8] . " KG";
     
        return  $description;
    }
}
?>