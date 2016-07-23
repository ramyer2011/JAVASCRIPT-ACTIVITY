var students = { "MIT" : [
{ "name" : "Reymar", "gender" : "Male" },
{ "name" : "Cindy", "gender" : "Female" },
{ "name" : "Kevin", "gender" : "Male" },
{ "name" : "Danver", "gender" : "Male" },
{ "name" : "Ed", "gender" : "Male" },
{ "name" : "Glester", "gender" : "Male" },
{ "name" : "Jeffrey", "gender" : "Male" },
]
} 

var htmlStudents = "<thead><tr>"
htmlStudents+="<th>Name</th><th>Gender</th><th>Action</th></tr></thead><tbody>";

for(i=0;i<students.MIT.length;i++)
{
htmlStudents+="<tr><td width=50>"+ students.MIT[i].name+"</td>";
htmlStudents+="<td width=50>"+ students.MIT[i].gender +"</td>";
htmlStudents+="<td width=50>"+"<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#"+students.MIT[i].name+"'>View Resume</button></td></tr></tbody>";
}
 
var _table2 = document.getElementById('myTable3');
_table2.innerHTML = htmlStudents;

