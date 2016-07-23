var students = { "MIT" : [
{ "name" : "Reymar", "gender" : "Male" },
{ "name" : "Cindy", "gender" : "Female" },
{ "name" : "Kevin", "gender" : "Male" }
]
} 

var htmlStudents = "<thead><tr>"
htmlStudents+="<th>Name</th><th>Gender</th></tr></thead><tbody>";

for(i=0;i<students.MIT.length;i++)
{
htmlStudents+="<tr><td width=50>"+ students.MIT[i].name+"</td>";
htmlStudents+="<td width=50>"+ students.MIT[i].gender +"</td></tr></tbody>";
}

var _table2 = document.getElementById('myTable2');
_table2.innerHTML = htmlStudents;