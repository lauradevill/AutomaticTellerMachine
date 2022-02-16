//Associative array
let images = [];
images[50] = "billete50.png";
images[20] = "billete20.png";
images[10] = "billete10.png";

//Define Bill Class
class Bill{
    constructor(value, quantity){
        this.image = new Image();//Image instance
        this.value = value;
        this.quantity = quantity;
        this.image.src = images[this.value];
    }
    show(){
        document.body.appendChild(this.image);
    }
}

let box = [];//Saving bills in the ATM
box.push( new Bill(50, 10) );
box.push( new Bill(20, 30) );
box.push( new Bill(10, 10) );
console.log(box);

function deliverMoney(){
    let textBox = document.getElementById("money");
    money = parseInt(textBox.value);
    for (let i = 0; i < box.length; i++){
        if (money > 0){
            div = Math.floor(money / box[i].value);
            if (div > box[i].quantity){
                bills = box[i].quantity;
            } else {
                bills = div;
            }
            delivered.push( new Bill(box[i].value, bills) );
            money = money - (bills * box[i].value);
            box[i].quantity= box[i].quantity - bills
        }      
    } 
    if (money > 0 ){
        result.innerHTML = "Sorry, there is not enough cash in the ATM";
    } else{        
        for (let d of delivered){
            result.innerHTML = "<strong>You will receive:</strong><br />";
            if (d.quantity > 0){
                result.innerHTML = result.innerHTML + "Bill: " + d.value + ", Quantity: " + d.quantity + " " + "<br />" ;
                for (let i = 1; i <= d.quantity; i++)
                {
                  result.innerHTML += "<img src=" + d.image.src + " />";
                }
            }            
        }    
    }
    console.log("Bill delivered: ", delivered);    
    console.log("Bill in the box: ", box);
}

let money;
let delivered = [];//Saving delivered bill
let div;
let bills;

let result = document.getElementById("message");

let wButton = document.getElementById("withdraw");//Getting the button
wButton.addEventListener("click", deliverMoney);



