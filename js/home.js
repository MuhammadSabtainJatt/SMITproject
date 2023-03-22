// alert("Hlo")
let cities=["Faisalabad","Islamabad","Sarghoda","Karachi","Shorkot","Lahore","Multan",]
function printAllCities(){
    document.getElementById("outputResult").innerHTML = ""
    console.log("")
    for(let i=0;i<cities.length;i++)
   {
    console.log(cities[i])
    let num= i+1;
    document.getElementById("outputResult").innerHTML +="<b>"+num +") "+cities[i]+"</b><br>"
   }
}
function addCity(){
    let city=document.getElementById("inPut").value
    if(city=== ""){
        Toastify({
            text: "Enter Your City Name In input Field ",
            duration: 3000,
            destination: "home.html",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, red, darkred",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return ;
    }
   let first=city.charAt(0).toUpperCase();
   let copy=city.slice(1);
   let second=copy.toLowerCase();
   let full= first+second;
   let cityFound =false;
   for(let i=0;i<cities.length;i++){
    if(cities[i]===full)
        cityFound =true
    if (cityFound===true){
        msg="<span style='color:red'><b>"+ full+"</b></span>"+" Is Already in list"     
        document.getElementById("stateMent").innerHTML = msg
    }
   }
   if (cityFound===false){
    cities.push(full);
   msg2="<span style='color:green'><b>"+ full+"</b></span>"+" Is Added in list"
   document.getElementById("stateMent").innerHTML = msg2
}}
// ..........................................................................................//
function findCity(){
    let city =document.getElementById("inPut").value
    if(city.length<3){
        Toastify({
            text: "Enter Your City Name In input field",
            duration: 3000,
            destination: "home.html",
            newWindow: true,
            close: true,
            gravity: "top", 
            position: "center", 
            stopOnFocus: true, 
            style: {
              background: "linear-gradient(to right, red, darkred",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        return ;
    }
    let first =city.charAt(0).toUpperCase();
    let second =city.slice(1)
    LowerCase=second.toLowerCase()

    let full=first +LowerCase;
    // alert(full)

    let cityFound =false;
    for(let i=0;i<cities.length;i++){
    if(cities[i]===full){
        cityFound =true;
        if(cityFound===true)
        document.getElementById("stateMent").innerHTML ="<p style='color:green'>🥳|Congratulations Your City is in list</p>"
    }
}
if(cityFound===false){
    document.getElementById("stateMent").innerHTML ="<p style='color:red'>😔|Sorry We Can't find Your City in List</p>"+"<span style='color:teal'>To Enter Your City in list Click on<br><q>Add city In List</q></span>"
}}
let now=new Date()
let year=now.getFullYear()
document.getElementById("year").innerHTML= year 

function clearInput(){
    document.getElementById("inPut").value = ""
    
}
function clrout(){
    document.getElementById("outputResult").innerHTML = "";
}