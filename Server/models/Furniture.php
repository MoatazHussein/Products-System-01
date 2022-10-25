<?php

class Furniture implements ProductType
{

    public function insertProduct(Product $product, $arr)
    {
        $furnitureHeight = (float)$arr[5];
        $furnitureWidth = (float)$arr[6];
        $furnitureLength = (float)$arr[7];

        $description = "Dimensions " . $furnitureHeight . "*" . $furnitureWidth . "*" . $furnitureLength;

        return  $description;
    }
}
