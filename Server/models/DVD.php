<?php

class DVD implements ProductType
{

    public function insertProduct(Product $product,$arr)
    {

      $description = "Size " . (float)$arr[4] . " MB";

        return $description;
    }
}
?>