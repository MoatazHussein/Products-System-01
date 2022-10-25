<?php

class Product {


    protected $type;

    public function setType($type){
        $this->type = $type;
    }
    
    public function selectProduct($arr)
    {
        $lookupArray = [
            'DVD' => 'DVD',
            'Furniture' => 'Furniture',
            'Book' => 'Book'
        ];

        $className =$lookupArray[$this->type];
        return ( new $className )->insertProduct($this,$arr);
   

}
}
?>