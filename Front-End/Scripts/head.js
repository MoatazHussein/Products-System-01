function head_call(x1, x2, x3, x4, x5, x6, x7, x8, x9, x10) {
  let divHead = document.createElement("div");

  document.head.appendChild(divHead);

  divHead.setAttribute("class", "headStyle");

  let divHeadTitle = document.createElement("header");
  divHeadTitle.innerHTML = `<h2> ${x1} </h2>`;
  divHeadTitle.setAttribute("class", "headStyleTitle");
  divHead.appendChild(divHeadTitle);

  let btn1 = document.createElement(x2);
  var btn1Text = document.createTextNode(x3);
  btn1.setAttribute("class", x4);
  btn1.setAttribute("onclick", x5);
  btn1.appendChild(btn1Text);

  let btn2 = document.createElement(x6);
  var btn2Text = document.createTextNode(x7);
  btn2.setAttribute("class", x8);
  btn2.href = x9;
  btn2.appendChild(btn2Text);

  if (x10) {
    divHead.appendChild(btn2);
    divHead.appendChild(btn1);
  } else {
    divHead.appendChild(btn1);
    divHead.appendChild(btn2);
  }
}
////////////////////////////////////////////////////////////
