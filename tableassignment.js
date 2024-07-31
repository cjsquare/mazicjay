
const Jones = [
    { name: 'Kelechi', age: 10, group: 'o+', gender: 'male', id: 1},
    { name: 'Kelec', age: 10, group: 'o+', gender: 'male', id: 2},
    { name: 'Kelhi', age: 10, group: 'o+', gender: 'male',id: 3},
]
document.addEventListener('DOMContentLoaded' , function(){
    
    const table = document.querySelector('#tableContain tbody')

    // table.innerHTML = ''

    Jones.forEach((data, a)=> {
        const row = document.createElement("tr")
        row.classList.add(data.id)
        // alert(data.name)

        row.innerHTML = `
            <td > ${a + 1} </td>
            <td > ${data.name} </td>
            <td > ${data.age} </td>
            <td > ${data.group} </td>
            <td > ${data.gender} </td>
        `
            
        table.appendChild(row)
    })

    header.style.backgroundColor = "red"
    footer.style.backgroundColor = "pink"
    contain.style.border ="3px solid"
    tableContain.style.width = "100%"
    tableContain.style.border  = "3px solid green"
    tableContain.border = "1px solid blue"
})