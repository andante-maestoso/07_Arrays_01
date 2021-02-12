
/*** 1.0 Arrays */
/*
let arr;

arr = new Array(); // Konstruktor
arr = [];  //Literal
arr = [2,6,7,12];
arr = [true, false];
arr = ["Ich", "bin", "Holger"];


ausgabe(arr);
ausgabe(arr[0]);
ausgabe(arr[2]);
ausgabe(arr.length);
*/


//ausgabe(getSentence("Ich","bin","Holger", "Plottke"));    // Test
//arr = ["Ich","bin","Holger", "Plottke"];
//ausgabe(getSentence(arr));
function getSentence(arr) {
    let gap = " ";
    let punct = ".";
   
        
     
    //let str = arr[0] + gap + arr[1] + gap + arr[2] + gap + arr[3] + punct;
   // return str;
}



// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}



let arr = ["Ich","bin","Holger", "Plottke"];
let str = "";
let gap = " ";
let punct = ".";
ausgabe(satzMachen2(arr));
    function satzMachen(arr){
        for (let i = 0; i < arr.length; i++) {
            if (i != (arr.length-1)) {
                str += arr[i] + gap;
            } else {
                str += arr[i] + punct;
            }
        }           
    return str;
    }






    function satzMachen2(arr){
        for (let i = 0; i < arr.length-1; i++) {
            str += arr[i] + gap;
            } 
            str += arr[arr.length-1] + punct;       
    return str;
    }
























