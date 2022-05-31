function runAlert(){
    //alert('running js code from external file');
    document.getElementById("content").innerHTML = "Updated from javascript function";
    document.getElementById("content").style.color = "orange";
    document.querySelector("p").style.fontSize="2em";
} 