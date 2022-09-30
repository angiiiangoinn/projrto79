menuListArray = ["Pizza Vegetariana","pizza calabresa","pizza extraveganza","pizza de bacon","pizza de frango"];

function getMenu(){
var htmldata="";
menuListArray.sort();
    For(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHtml = htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
var htmldata;
var imgtags='img id="img1" src="images/pizzaImg.png"/<'
var item=document.getElementById("addItem").value;
menuListArray.sort();
var htmldata=""

For(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+imgtags+menuListArray[i] + 'br'
}
document.getElementById("displayAddedMenu").innerHtml = htmldata;
}

function addTop(){
 var item=document.getElementById("addItem").value;
 menuListArray.push(item);
 addItem();
}