document.getElementById("calculate").addEventListener("click", () => {
    const distance = document.getElementById("distance").value;
    const time = document.getElementById("time").value;
    // console.log(distance)
    // console.log(time)

    const speed = distance / (time / 60);

    document.getElementById("output").innerHTML = 'Din hastighed er ' + speed + ' km/t';
})

const name = 'Philip';
const anotherName = "Sofie"
const myAge = 45.65;
const isOfLegalAge = true;
if (myAge > 50) {
    alert("YES")
}

//let = variabel
//const = constant

 //object { } - js gør det til et objekt
const student = { 
    name: 'Philip', 
    email: 'philip@world.dk', 
    hairColor: 'Green' ,
    age: 45.65
}
const student2 = {
    name: 'Aiden',
    email: 'aiden@world.dk',
    hairColor: 'Black w. green',
    age: 25
}
const students = [student, student2];


student.shoeColor = 'Red';
console.log(student);

// array i javascript defineres med [] 
const names = ["Aiden", "Sofie", "Philip", "Dillan"];
names.push("Sinan");
console.log(names);
console.log(names[4])

const cats = [
    { name: "Charlie", color: "Brown"},
    { name: "Monty", color: "White"}
]



students.forEach((student) => {

    let temp = document.getElementById("studentTemplate");
    let clon = temp.content.cloneNode(true);
    clon.querySelector(".name").innerHTML = student.name;
    clon.querySelector(".email").innerHTML = student.email;
    clon.querySelector(".hairColor").innerHTML = student.hairColor;

    clon.querySelector(".btnAge").addEventListener("click", () => {
        alert("Hello from " + student.name + " my age is " + student.age );
    })

    document.getElementById("output").appendChild(clon);
})
