<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <title>Products Addition</title>
  <script src="https://code.jquery.com/jquery-latest.js"></script>
  <meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport" />
  <link rel="stylesheet" href="Front-End/Style/style.css">


</head>

<body>

  <div class="formShape">
    <div id="content">
      <form id="product_form" action="" method="post">
        <label class="form-control">SKU</label>
        <input id="sku" name="sku" placeholder="#sku" onchange="SKU_Validation()"><br>
        <div id="skuError" class="errorMSG"></div>
        <label class="form-control">Name</label>
        <input id="name" name="name" placeholder="#name" onchange="name_Validation()"><br>
        <div id="nameError" class="errorMSG"></div>
        <label class="form-control">Price ($)</label>
        <input id="price" name="price" onchange="price_Validation()" placeholder="#price"><br>
        <div id="priceError" class="errorMSG"></div>

        <label class="form-control">Type Switcher</label>
        <select id="productType" name="optionList" onchange="display_div(document.getElementById('productType').value); type_Validation(); ">
          <option selected="selected" value="noProduct"> Type Switcher</option>
          <option value="DVD">DVD-disc</option>
          <option value="Furniture">Furniture</option>
          <option value="Book">Book</option>
        </select> <br>
        <div id="typeError" class="errorMSG"></div>
        <div id="noProduct" style="display:none;">

        </div>

        <div id="DVD" style="display:none;">
          <label class="form-control">Size (MB)</label>
          <input id="size" name="DVDSize" onchange="DVD_Validation()" placeholder="#size"><br>
          <div id="DVDError" class="errorMSG"></div>
          <p><strong> Please, provide disc space in MB</strong></p>
        </div>

        <div id="Furniture" style="display:none;">
          <label class="form-control">Height (CM)</label>
          <input id="height" name="furnitureHeight" onchange="Furniture_height_Validation()" placeholder="#height"><br>
          <div id="heightError" class="errorMSG"></div>
          <label class="form-control">Width (CM)</label>
          <input id="width" name="furnitureWidth" onchange="Furniture_width_Validation()" placeholder="#width"><br>
          <div id="widthError" class="errorMSG"></div>
          <label class="form-control">Lenght (CM)</label>
          <input id="length" name="furnitureLength" onchange="Furniture_length_Validation()" placeholder="#length"><br>
          <div id="lengthError" class="errorMSG"></div>
          <p><strong> Please, provide Height , Width and Length in CM</strong></p>
        </div>

        <div id="Book" style="display:none;">
          <label class="form-control">Weight (KG)</label>
          <input id="weight" name="bookWeight" onchange="Book_Validation()" placeholder="#weight"><br><br>
          <div id="bookError" class="errorMSG"></div>
          <p><strong> Please, provide weight in KG</strong></p>
        </div>
      </form>
    </div>




    <script src="Front-End/Scripts/head.js"></script>
    <script src="Front-End/Scripts/add.js"></script>


    <footer>Scandiweb Test assignment</footer>



</body>

</html>