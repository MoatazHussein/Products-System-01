<?php

abstract class API
{

    public $method;


    public function requestHandler()
    {

        $method = $_SERVER['REQUEST_METHOD'];

        switch ($method) {

            case "GET":
                $this->getRequest();
                break;

            case "POST":
                $this->postRequest();
                break;

            case "DELETE":
                $this->deleteRequest();
                break;
        }
        return $method;
    }
    
    abstract function  getRequest();
    abstract function  postRequest();
    abstract function  deleteRequest();
}
?>