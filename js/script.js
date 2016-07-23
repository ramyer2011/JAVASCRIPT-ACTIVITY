var _title = document.getElementById('myTitle');
_title.innerHTML = "My New Title";

var _subtitle = document.getElementById('mySubTitle');
_subtitle.innerHTML = "My New SubTitle";

var _table = document.getElementById('myTable');
var row = 3;
var col = 1;
var arrNames = ['Reymar', 'Cindy', 'Kevin'];
var arrGender = ['Male', 'Female', 'Male'];
var index = 0;
var html = "<thead><tr><th>Name</th><th>Gender</th></tr></thead>";
html += "<tbody>";
for(x=0;x<row;x++){
  html+="<tr>";
  for(y=0;y<col;y++){
  html+="<td>"+arrNames[index]+"</td>";
  html+="<td>"+arrGender[index]+"</td>";
  }
  html+="</tr>";
  index++;
}
html += "</tbody>";
_table.innerHTML = html;