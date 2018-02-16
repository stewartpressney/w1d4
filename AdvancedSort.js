var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b){
    var nameA=a.name, nameB=b.name;
    var dateA=new Date(a.age), dateB=new Date(b.age)
    if (nameA < nameB) //sort string ascending
        return -1
    if (nameA > nameB)
        return 1
    if (nameA === nameB)
      return dateB-dateA
    return 0 //default return value (no sorting)
})


console.log(students);