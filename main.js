var names=[
 "2. Car: White Octane, Decal: White Mainframe, Wheels: Cristianos", 
 "3. Car: White Fennec, Decal: White Mainframe, Wheels: White Zombas",
 "4. Car: Lime Octane,  Decal: 20XX, Wheels: Black Dieci",
 "5. Car: White Octane, Decal: Dissolver, Wheels: Zomba"
];

var images = [
"Car.jpg",
"Tw Fennec.jpg",
"Amustycow car.jpg",
"Cool Car.png"];
var i=0
function Cars(){
    document.getElementById("one").innerHTML=names[i];
    document.getElementById("Logo").src=images[i];
    i++;
    if(i==4){
      i=0  
    }
}