let longGroup = ""
const myArray = longGroup.split(",");
console.log(myArray)
var longGroupings = "";
for (i=0; i<myArray.length; i++) {
    // console.log(myArray[i])
    let groupings = myArray[i];
    if (i<myArray.length-1) {
        longGroupings += (groupings + ",")
    }else{
        longGroupings += (groupings)
    }
    console.log(longGroupings)
}



