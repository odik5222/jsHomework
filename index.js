let students =['Odilbek','Abbos','Xojik','Muxammad']
alert(`
${students[0]}
${students[1]}
${students[2]}
${students[3]}

`)



let name = prompt('deleted')

if(students.includes(name.slice(0,1).toUpperCase()+ name.slice(1).toLowerCase())){
    let index = students.indexOf(name)
    console.log(students);
    students.splice(index,1)
    console.log(students);
} else{
    console.log('Good bye');
}