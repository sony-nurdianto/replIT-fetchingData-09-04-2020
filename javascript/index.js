document.getElementById('getData').addEventListener('click' ,function(){
    
    fetch ('https://ghibliapi.herokuapp.com/films')
.then (response =>{
    return response.json();
})

.then (data =>{
    console.log(data)

    data.forEach(item =>{
         const stringHTML = `
         <tr>
            <td>${item.title}</td>
            <td>${item.director}</td>
            <td>${item.release_date}</td>
            <td>${item.rt_score}</td>
         </tr>
        `
        
        document.getElementById('films').innerHTML += stringHTML
    })
    // const {id,title,description} = data

})

})




// const serverWanderlink ='http://35.240.201.155:3000/';
// fetch (`${serverWanderlink}api/v1/wanderlink/show/idn/destination`)
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     console.log(data);


//     data.forEach(item => {
//         const stringHTML = `
//         <div class="col-sm-6 col-md-4">
//             <img width="100%" height="100px" src="${serverWanderlink}${item.images && item.images[0]}" />
//             ${item.destinationName}
//             <br>
//             ${item.address}
//             <br>
//             ${item.city}
//         </div>
//         `
//         document.getElementById('wanderlink').innerHTML += stringHTML;
//     })
// })