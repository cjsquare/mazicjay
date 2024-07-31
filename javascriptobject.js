    document.addEventListener('DOMContentLoaded', function(){
    //object name

    const obj = {
        surname: 'Jimmy',
        age: 10,
        address: {
        street: "Alor 40",
        // bons: 'jones'
        }
        }

        .getElementById('container') .textContent = obj .surname
        .getElementById('contain').innerHTML = obj .age
        .getElementById('pie').innerText = obj['address']['street']
        // .getElementById('tie').innerHTML = obj .address .bons

    })
    
    

