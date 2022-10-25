head_call("Product Add",'button',"Save","submitBtn","addRequest()",'a',"Cancel","buttonsArea","index.php",0);
////Show Selected product type///////////////
function display_div(show){
    document.getElementById('DVD').style.display = "none";
    document.getElementById('Furniture').style.display = "none";
    document.getElementById('Book').style.display = "none";
    document.getElementById(show).style.display = "block"; 
 }
/////////////////////////////////////////////
   function fieldShape(condition,id){
      if(condition){
        document.getElementById(id).style.borderColor = "red";
      } 
      else  document.getElementById(id).style.borderColor = "#ccc";
    } 
///////////////////////////////////////////////////////////////////
////////////////validation tools////////////////////////////////
///////////////Check if the input is empty or not///////////////
function validateInput(x) {
if (typeof x === 'string' && x.trim().length === 0) return false; 
else  return true;
    }
///////////Check if the input is a number or not////////////////
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
//////////////////////////Check if String contains any Letters/////////////
function containsAnyLetters(x){   
    return /[a-zA-Z]/.test(x);
}
/////////////////check the minimum acceptable price////////////////////////
    function invalidValue(parameter,x){
      var checkedValue = document.getElementById(parameter).value;
      if (checkedValue < x) return true;    
      else  return false;
  }
/////////////////////////Check for the SKU existence///////////////////////
let existedSKUNum;
let existedSKU;
function skuExistenceCheck() {
     existedSKUNum=0;
     existedSKU=true;
    var skuValue = document.getElementById("sku").value;
    $.ajax({
      url: "Server/api/productHandler.php",
      type: "GET",
      dataType: "json",
      success: function (data) {      
        Object.values(data).forEach((val) => {
      if(skuValue.trim()==val.SKU){
        existedSKUNum+=1;   
      }
      });  
      },
      async: false 
    });
   if(existedSKUNum==0){
    existedSKU=false;
   }
   else {
    existedSKU=true;  
   }
  }
///////////////////////////validation Process////////////////////////////////////////////
/////////////////////////////////////////////
let skuError,nameError,priceError,productTypeError;
let sizeError,heightError,widthError,lengthError,weightError;
///////////////////////////////
function error_show (elemendID,errorFound,errorID,errorMessage){
    fieldShape(errorFound,elemendID);
    if(errorFound){
        document.getElementById(errorID).innerHTML = `${errorMessage}`;
    }
    else {
        document.getElementById(errorID).innerHTML = "";      
         }
}
let requiredMSG ="Please, submit required data";
let invalidTypeMSG="Please, provide the data of indicated type";
let existedSKUMSG ="This SKU is already assigned to another product.Please, provide another SKU... ";
let invalidNameMSG="This Name doesn't contain any character. Please, provide another name with at least one character";
//////////////////////////////
/////////////Test Validation////////////////////////////
function value_validation(productTypeID,requiredValueID,elementName,validation_value,unit,errorID,product){
   let productTypeValue = document.getElementById(productTypeID).value;
   let requiredValue = document.getElementById(requiredValueID).value;
   let errorValue_1=(product=="any" || (productTypeValue ==  elementName)) && !validateInput(requiredValue);
   let errorValue_2=(product=="any" || (productTypeValue ==  elementName)) &&  !(isNumeric(requiredValue)) ;
   let errorValue_3=(product=="any" || (productTypeValue ==  elementName)) && invalidValue(requiredValueID,validation_value);
   let errorValue= errorValue_1 || errorValue_2 ||  errorValue_3 ;
   fieldShape(errorValue,requiredValueID);
    
    if(errorValue_1){
        document.getElementById(errorID).innerHTML = requiredMSG;
    }
    else if(errorValue_2){
        document.getElementById(errorID).innerHTML = invalidTypeMSG;
    }
   else if(errorValue_3){
        document.getElementById(errorID).innerHTML = `This specification is invalid.`+ 
        ` Please, provide another value greater than or equal to ${validation_value +" "+ unit} `+`
        for the ${elementName +" "+ requiredValueID} `;
    }
    else {
        document.getElementById(errorID).innerHTML = "";
    }
    
    return errorValue;
  }
  //////////////////////////////////////////////////////
  function naming_Validation(requiredValueID,errorFound,errorID,errorMSG){
    let requiredValue = document.getElementById(requiredValueID).value;
    errorValue_1=!validateInput(requiredValue);
    errorValue_2=errorFound;
    errorValue = errorValue_1|| errorValue_2 ;
    fieldShape(errorValue,requiredValueID);
    if(errorValue_1){
        document.getElementById(errorID).innerHTML = requiredMSG;
      
    }
    else if(errorValue_2){
        document.getElementById(errorID).innerHTML = errorMSG;
    }
    else {
        document.getElementById(errorID).innerHTML = "";
    }  
    return errorValue;
  }
/////////////SKU Validation////////////////////////////
function SKU_Validation(){
    skuExistenceCheck();
    skuError= naming_Validation("sku",existedSKU,"skuError",existedSKUMSG);
  }
  //////////////////////////////////////////////////////
  /////////////Name Validation////////////////////////////
  function name_Validation(){ 
    let nameValue = document.getElementById("name").value;
    nameError= naming_Validation("name",!containsAnyLetters(nameValue),"nameError",invalidNameMSG);
  }
  //////////////////////////////////////////////////////
  /////////////Price Validation////////////////////////////
function price_Validation(){
    priceError =value_validation("productType","price","product",0.01,"$","priceError","any");   
  }
//////////////////////////////////////////////////////
/////////////Type Validation////////////////////////////
function type_Validation(){
  let productTypeValue = document.getElementById("productType").value;
  productTypeError= productTypeValue == "noProduct"; 
  error_show("productType",productTypeError,"typeError",requiredMSG);
}
//////////////////////////////////////////////////////
/////////////DVD Type Validation////////////////////////////
function DVD_Validation(){
    sizeError =value_validation("productType","size","DVD",0.1,"MB","DVDError");   
  }
  //////////////////////////////////////////////////////

/////////////Furniture Type Validation////////////////////////////
function Furniture_height_Validation(){
  heightError =value_validation ("productType","height","Furniture",20.0,"CM","heightError");   
}

function Furniture_width_Validation(){ 
  widthError =value_validation ("productType","width","Furniture",20.0,"CM","widthError");  
}

function Furniture_length_Validation(){
    lengthError =value_validation ("productType","length","Furniture",20.0,"CM","lengthError"); 
}

function Furniture_Validation(){
    Furniture_height_Validation();
    Furniture_width_Validation();
    Furniture_length_Validation();
}
//////////////////////////////////////////////////////
/////////////Book Validation////////////////////////////
function Book_Validation(){  
    weightError=value_validation ("productType","weight","Book",0.1,"KG","bookError");  
  }
  //////////////////////////////////////////////////////
/////////////////////////////////////////////
function saveProduct(){
    var skuValue = document.getElementById("sku").value;
    var nameValue = document.getElementById("name").value;
    var priceValue = document.getElementById("price").value;
    var productTypeValue = document.getElementById("productType").value;
    var sizeValue = document.getElementById("size").value;
    var heightValue = document.getElementById("height").value;
    var widthValue = document.getElementById("width").value;
    var lengthValue = document.getElementById("length").value;
    var weightValue = document.getElementById("weight").value;
var formData=[skuValue,nameValue,priceValue,productTypeValue,sizeValue,heightValue,widthValue,lengthValue,weightValue];
    var json = JSON.stringify (formData);
    var xhr = new XMLHttpRequest(); 
    xhr.onreadystatechange  = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.readyState  == 4 && xhr.status == 200) { 

             window.location.href='index.php';
            }               
        }
    };
    xhr.open("POST", "Server/api/productHandler.php", true); 
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
}

let generalError;
 function generalValidation(){
   SKU_Validation();
   name_Validation();
   price_Validation();
   type_Validation();
   DVD_Validation(); 
   Furniture_Validation();
   Book_Validation();
   generalError=skuError || nameError || priceError || productTypeError || sizeError || heightError || lengthError || widthError ||weightError;
 }

  function addRequest(){
    generalValidation();   
  if(!generalError){
    saveProduct();
  }
  }
//////////////////////////////////////////////////////////////////////////////////




