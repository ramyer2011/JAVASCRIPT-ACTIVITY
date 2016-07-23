var students = { "MITResume" : [
{ "name" : "Reymar", "fullname" : "Reymar Taleon", "address" : "Mati City",  "gender" : "Male" },
{ "name" : "Cindy", "fullname" : "Cindy Lasco", "address" : "Mati City",  "gender" : "Female" },
{ "name" : "Kevin", "fullname" : "Kevin John Rivera", "address" : "Davao City",  "gender" : "Male" },
{ "name" : "Danver", "fullname" : "Danver Palmiano", "address" : "Mati City",  "gender" : "Male" },
{ "name" : "Ed", "fullname" : "Eduardo Santiago", "address" : "Tagum City",  "gender" : "Male" },
{ "name" : "Glester", "fullname" : "Glester Dionaldo", "address" : "Bukidnon City",  "gender" : "Male" },
{ "name" : "Jeffrey", "fullname" : "Jeffrey Mocoy", "address" : "Davao City",  "gender" : "Male" }
]
} 

var htmlResume = ""; 

for(i=0;i<students.MITResume.length;i++)
{

  htmlResume += "<div class='modal fade' id='"+students.MITResume[i].name+"' role='dialog'>";
  htmlResume += "<div class='modal-dialog'>";
  htmlResume += "<div class='modal-content'>";
  htmlResume += "<div class='modal-header'>";
  htmlResume += "<button type='button' class='close' data-dismiss='modal'>&times;</button>";
  htmlResume += "<h4 class='modal-title'> "+students.MITResume[i].name+" Resume</h4>";
  htmlResume += "</div>";
  htmlResume += "<div class='modal-body'>";
   
  htmlResume += '<div class="row">';
  htmlResume += '<div class="col-sm-12">';
  htmlResume += '<div class="panel panel-warning">';
    htmlResume += '<h3 class="panel-title">Personal Information</h3>';
    htmlResume += '<div class="panel-body">';
      htmlResume += '<div class="col-sm-3" >';
      htmlResume += 'Name:';
      htmlResume += '</div>';
      htmlResume += '<div class="col-sm-8 col-md-2 col-lg-9">'+
            students.MITResume[i].fullname+
            '</div>'+
            '<div class="col-sm-3" >'+
            'Address:'+
            '</div>'+
            '<div class="col-sm-8 col-md-2 col-lg-9">'+
            students.MITResume[i].address+
            '</div>'+
            '<div class="col-sm-3" >'+
            'Gender:'+
            '</div>'+
            '<div class="col-sm-8 col-md-2 col-lg-9">'+
            students.MITResume[i].gender+
            '</div>';
      htmlResume += '</div>';
      htmlResume += '</div>';
    htmlResume += '</div>';
  htmlResume += '</div>';
  htmlResume += "</div>";
  htmlResume += "<div class='modal-footer'>";
  htmlResume += "<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
  htmlResume += "</div>";
  htmlResume += "</div>";
  htmlResume += "</div>";
  htmlResume += "</div>";

}

var divgetresume = document.getElementById('getresume');
divgetresume.innerHTML = htmlResume;