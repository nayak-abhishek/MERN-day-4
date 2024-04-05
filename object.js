//for collective information
let studentInfo={
    rollno:1,
    name:"Ravi Kumar",
    course:"MCA",
    college:"KIET",
    marks:[10, 23, 45, 78, 97],
    music:()=>console.log("Play music"),
    play:function playfun(){console.log("Play Cricket")},
}
let arrayvalue=[studentInfo,studentInfo, studentInfo];
arrayvalue.forEach(item=>console.log(item.name));
// console.log(studentInfo.music());
// console.log(studentInfo.play());