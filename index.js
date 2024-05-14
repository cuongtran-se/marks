function Tinhdiemtb() {
  var x1Values = [];
  var x1Elements = document.getElementsByName("KTTX");
  for (var i = 0; i < x1Elements.length; i++) {
    var value = parseFloat(x1Elements[i].value.trim());
    if (!isNaN(value)) {
      x1Values.push(value);
    }
  }
  var x2 = parseFloat(document.getElementById("KTGK").value.trim());
  var x3 = parseFloat(document.getElementById("KTCK").value.trim());

  var sum = 0;
  var count = x1Values.length;
  for (var i = 0; i < count; i++) {
    sum += x1Values[i];
  }
  var tb = (sum + x2 * 2 + x3 * 3) / (count + 2 + 3);
  var tbfix = tb.toFixed(2);
  var xltb = document.getElementById("xeploai");
  if (tbfix >= 8) {
    xltb.innerText = "Giỏi";
  } else if (tbfix >= 6.5) {
    xltb.innerText = "Khá";
  } else if (tbfix >= 5) {
    xltb.innerText = "Trung bình";
  } else {
    xltb.innerText = "Kém";
  }
  console.log(tbfix);
  return tbfix;
}
