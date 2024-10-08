// if else
var nilai : number = 79;

if (nilai >=90){
    console.log("Grade A");
} else if (nilai >= 60){
    console.log("Grade B");
} else {
    console.log("Grade D");
}

var hero :string = "nana"
switch(hero){
    case "nana":
        console.log("hero kesukaan")
        break
    case "hilda":
        console.log ("hero montok")
        break
    default:
        console.log("hero sing montok")
}

const ipk : number [] = [2,1,3,2];
for (let i=0; i< ipk.length; i++)
    if (i==3){
        console.log(`nilai indexing ke 3 : ${ipk [i]}`); 
    }