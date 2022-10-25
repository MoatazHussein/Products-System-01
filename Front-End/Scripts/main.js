
head_call("Product List","button","MASS DELETE","submitBtn","deleteSelectedItems()",'a',"ADD","buttonsArea","addProduct.php",1);
//////////////Show all products///////////////
function getAllProducts() {
    $.ajax({
      url: "Server/api/productHandler.php",
      type: "GET",
      success: function (data) {
        let divMain = document.createElement("div");
        divMain.setAttribute("class", "container");
        document.body.appendChild(divMain);
        Object.values(data).forEach((val) => {
          let divTemp = document.createElement("div");
          divTemp.setAttribute("class", "box");
          divTemp.innerHTML =
            `<input id=" ${val.ID}" class="delete-checkbox" type="checkbox"> ` +
            `<p> ${val.SKU} </p>` +
            `<p> ${val.Name} </p>` +
            `<p> ${val.Price} </p>` +
            `<p> ${val.Description} </p>`;
          divMain.appendChild(divTemp);
        });
      },
  
      dataType: "json",
    });
  }
  //////////////////////////////////////////////////////
  //////////////search for checked products///////////////
  var checkedArray = [];
  function isChecked() {
    checkboxes = document.getElementsByClassName("delete-checkbox");
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked == true) {
        checkedArray.push(checkboxes[i].id.trim());
      }
    }
  }
  //////////////////////////////////////////////////////
  //////////////delete checked products///////////////
  function deleteSelectedItems() {
    isChecked(); 
    var json = JSON.stringify(checkedArray);
    var xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === xhr.DONE) {
        if (xhr.readyState == 4 && xhr.status == 200) {
          window.location.href = "index.php";
        }
      }
    };
    xhr.open("DELETE", "Server/api/productHandler.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(json);
  }
  //////////////////////////////////////////////////////
  window.onload = function() {
    getAllProducts();
  };
  //////////////////////////////////////////////////////