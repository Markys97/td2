let table= document.querySelector('.table');
let btn= document.querySelector('.button')

let data=[
    {
        name:'maman',
        age:40
    },
    {
        name:'papa',
        age:60
    },
    {
        name:'child',
        age:15
    },
]


btn.addEventListener('click',e=>{
    data.forEach(element => {
       let td1= document.createElement('td')
       let td2= document.createElement('td')
       let tr= document.createElement('tr');

       td1.textContent=element.name
       td2.textContent=element.age

       tr.appendChild(td1)
       tr.appendChild(td2)
       table.appendChild(tr)
    });
})
