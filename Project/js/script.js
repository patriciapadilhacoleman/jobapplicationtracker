const application = {
  
  position: "",
  date:"",
  interview: false,
  co_name: "",
  hr_name:"",
  hr_phone:"",
  hr_email:"",
  resume: false,
  coverlet: false,
  other: false,
  addNew: function () {
    alert(JSON.stringify(this, null, 4));
    var node = document.createElement("p");                 
   /* var textnode = document.createTextNode(JSON.stringify(this, null, 4));*/
   var textnode = document.createTextNode("New Application");
   node.appendChild(textnode);
   document.getElementById("title").innerHTML = JSON.stringify(this, null, 4);
  


  }                      
};

$.fn.serializeObject = function(){
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$(document).ready(function(){
    
    $('footer').hide();

    $("#intersubmit").click(function(){

       
        addInterview();
        return false;
       
    });

    $("#appsubmit").click(function(){

        addApplication();
       
        return false;
    });
});

function addInterview(){
	
	var narr = getTheObject();

    var s = "<p><strong>HR Contact: </strong>";

    $("#myInter").append("<p><strong>" + narr[0] + "</strong> Interwiew</p>");

    for(var i = 1; i < narr.length; i++){

        if(i === 2){
           $('#myInter').append("<p><strong>Date: </strong>" + narr[i]); 
        }

        else if(i === 3){
           $('#myInter').append("<strong>     Time: </strong>" + narr[i]); 
        }
        else if (i > 4){

           s+= " " + narr[i] + "    ";


        }
        else if (i === narr.length){

          $('#myInter').append("<p>" + narr[i] + "</p>"); 

        }
        
    }

    s+="</br>";

    $("#myInter").append(s);

    dialogWindow("inter");

    footerDisplay();

	 
}

function addApplication(){

 
    
    var narr = getTheObject();

    var s = "<p><strong>HR Contact: </strong>";

    $("#myApps").append("<p><strong>" + narr[0] + "</strong> Application</p>");

    for(var i = 1; i < narr.length; i++){

        if(i === 3){
           $('#myApps').append("<p><strong>Company: </strong>" + narr[i]); 
        }
        if (i > 3){

           s+= " " + narr[i] + "    ";


        }
        
    }

    s+="</br>";

    $("#myApps").append(s);

    dialogWindow("apps");

    footerDisplay();

}

function footerDisplay(){
    
    $('footer').show();

    $('form').slideUp(2000);

    $('form').slideDown(1000);
   
}

function dialogWindow(type) {  

  if(type === "apps"){

    alert (" A new Job Application has been added!\r\n" +  "You can find it at the bottom of your screen");
  } else {

    alert (" A new Interwiew has been scheduled!\r\n" +  "You can find it at the bottom of your screen");

  }

}

function getTheObject(){

    var jsonapp = JSON.stringify($('form').serializeObject());

    var newapp = JSON.parse(jsonapp);

    var narr = Object.values(newapp);

    return narr;
}

function pausecomp(ms) {
ms += new Date().getTime();
while (new Date() < ms){}
} 
