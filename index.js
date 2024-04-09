        
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.getElementById('contact-form').addEventListener('submit',function(event){
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formspree.io/f/xvoevand",{
        method:'POST',
        body:data,}).then(Response => {
            if(Response.ok){
                alert('Success');
            } else {
                alert('Error');
            }
        });
        document.getElementById('contact-form').reset();
})
