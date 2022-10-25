<?php

require(__DIR__ . "/../config/DB_config.php");

class DB_conn
{

    public $DB_SERVER;
    public  $DB_USER;
    public  $DB_PASS;
    public $DB_NAME;
    public $tablename;
    public $conn;

    // class constructor
    public function __construct(
        $DB_SERVER = host,
        $DB_USER = user,
        $DB_PASS = password,
        $DB_NAME = DB_Name,
        $tablename = table_Name
    ) {
        $this->DB_SERVER = $DB_SERVER;
        $this->DB_USER = $DB_USER;
        $this->DB_PASS = $DB_PASS;
        $this->DB_NAME = $DB_NAME;
        $this->tablename = $tablename;

        $this->conn = mysqli_connect($DB_SERVER, $DB_USER, $DB_PASS, $DB_NAME);


        // Check connection
        if (mysqli_connect_errno()) {
            echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
    }

    public function insert($a, $b, $c, $d, $e)
    {
        $sql = "INSERT INTO $this->tablename (SKU,Name,Price,Type,Description) VALUES
    ('$a','$b','$c','$d','$e')";
        $ret = mysqli_query($this->conn, $sql);
        return $ret;
    }

    public function getData()
    {


        $sql = "SELECT ID, SKU, Name,Price,Type,Description FROM $this->tablename";

        $result = mysqli_query($this->conn, $sql);

        if (mysqli_num_rows($result) > 0) {
            return $result;
        }
    }

    public function delete($unrequiredID)
    {



        if ($unrequiredID != "") {
            $sql = "DELETE FROM $this->tablename WHERE ID='$unrequiredID'";
            $result = mysqli_query($this->conn, $sql);
        }
    }

    public function rowCount()
    {

        $sql = "SELECT * from $this->tablename";

        if ($result = mysqli_query($this->conn, $sql)) {

            // Return the number of rows in result set
            $rowcount = mysqli_num_rows($result);

            // Return result
            return $rowcount;
        }
    }


    public function closeConnection()
    {
        $this->conn->close();
    }
}
