var a =document.getElementById("ski");
var too = document.getElementById("tools");
var data = document.getElementById("dbkit");
function  skillFun(){
    if(too.style.display != "none"){
        too.style.display = "none";
        a.style.display = "block";
    }
    if(data.style.display != "none"){
        data.style.display = "none";
        a.style.display = "block";
    }
}
function toolKit(){
    if(a.style.display != "none"){
        a.style.display = "none";
        too.style.display = 'block';
    }
    
    if(data.style.display != "none"){
        data.style.display = "none";
        too.style.display = "block";
    }
    
}
function dbFun(){
    if(a.style.display != "none"){
        a.style.display = "none";
        data.style.display = "block";

    }
    if(too.style.display != "none"){
        too.style.display = "none";
        data.style.display = "block";
    }
}
function formDetails() {
        
        var full_name = document.getElementById("nameTag");
        var email = document.getElementById("mailTag");
        var message = document.getElementById("msgTag");
      
        var t = document.getElementById("nameReq");
        var te = document.getElementById("mailReq");
        var tel = document.getElementById("msgReq");
      
        if (full_name.value.length < 3 || !/^[A-Za-z\s]+$/.test(full_name.value)) {
            t.innerHTML =  "Fill Your Name Properly";
            full_name.focus()
            full_name.required = true;
            t.style.display = "block";
            full_name.setCustomValidity(" Fill Your Name Properly");
            return false;
        } else {
            t.innerHTML = "";
            t.style.border = "none";
            t.style.display = "none";
            full_name.required = false;
            full_name.setCustomValidity("");
        }
      
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
            te.innerHTML = "Fill Your Email Id Properly";
            email.focus()
            email.required = true;
            te.style.display = "block";
            email.setCustomValidity(" Fill Your Email Id Properly");
            return false;
        } else {
            te.innerHTML = "";
            te.style.border = "none";
            te.style.display = "none";
            email.focus()
            email.required = false;
            email.setCustomValidity("");
        }
      
        if (message.value.length === 0) {
            tel.innerHTML = " Fill Your meaasge Properly";
            message.focus();
            message.required = true;
            tel.style.display = "block";
            message.setCustomValidity(" Fill Your message Properly");
            return false;
        }
        else {
            tel.innerHTML = "";
            tel.style.border = "none";
            tel.style.display = "none";
            message.focus();
            message.required = false;
            message.setCustomValidity("");
        }
        return true;
      
      }
     
      function  menulist(){
        var a = document.getElementById("showMenu");
        // console.log(bar.style.display);
        if (a.style.display === "block") {
          a.style.display = "none";
        } else {
          a.style.display = "block";
        }
      }
      function closeMenu() {
        var clear = document.getElementById("showMenu");
        if (clear.style.display === "block") {
          clear.style.display = "none";
        } else {
          clear.style.display = "block";
        }
      }