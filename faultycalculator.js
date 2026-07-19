let random=Math.random()
console.log(random)


let no1=prompt("enter first no")
let opt=prompt("enter operator")
let no2=prompt("enter second no")

let obj={
    "+": "-",
    "-": "/",
    "/": "**",
    "*": "+"
}

if(random<0.1){console.log(`${no1} ${opt} ${no2}`);
    console.log(`The result is ${eval(`${no1} ${opt} ${no2}`)}`);
    alert(`The result is ${eval(`${no1} ${opt} ${no2}`)}`);
}
else{ opt=obj[opt]
    console.log(`the faulty reslut is ${eval(`${no1} ${opt} ${no2}`)}`);
    alert(`the faulty result is ${eval(`${no1} ${opt} ${no2}`)}`);
}