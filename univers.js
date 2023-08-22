const loadHubs = () =>{
    toggleSpinner(true);
    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then(res=>res.json())
    .then(data => displayLoadHubs(data.data.tools))
}
const displayLoadHubs = (hubs) =>{
 console.log(hubs);
 hubs.map(hub => {
    const hubsContainer = document.getElementById('hubs-container');
    const hubDiv = document.createElement('div');
    hubDiv.innerHTML = `
       <div class="bg-white text-black p-3 ">
         <img src="${hub.image}" />
         <h3 class="text-2xl font-bold">Features<h3>
         <p>1. ${hub.features[0]}</p>
         <p>2. ${hub.features[1]}</p>
         <p>3. ${hub.features[2]}</p>
         <hr class='text-black my-3'>
         <p class="text-1xl font-bold mb-2">${hub.name} </p>
         <div class="flex justify-between items-center">
           <p>${hub.published_in} </p>
           <button onclick="HubDetails('${hub.id}')" class="border-2" data-bs-toggle="modal" data-bs-target="#hubDetailsModal" >
               <img src='images/right-arrow.png'>
           </button>
         </div>
              
       </div>
    `
    hubsContainer.appendChild(hubDiv);
})
toggleSpinner(false);
}

const toggleSpinner = loader =>{
    const spinner = document.getElementById('loader-section');
    if(loader == true){
        spinner.classList.remove('hidden');
    }
    else{
        spinner.classList.add('hidden');
    }
}




const HubDetails =(id)=>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then(res => res.json())
    .then(data => displayHubDetails(data.data))
}

const displayHubDetails = (hub) =>{
    console.log(hub);
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML=`
    <div class='md:flex'>
       <div class='md:w-2/4'><img src='${hub.image_link[0]}'></div>
       <div class='md:w-2/4 p-5'>
          <p class='text-3xl'>${hub.description}</p>
         <div class='md:flex md:justify-between my-4'>
            <div class='border-4 border-cyan-400 p-3 text-center'>
                <p> ${hub.pricing[0].price}</p>
                <p> ${hub.pricing[0].plan}</p>
            </div>
            <div class='border-4 border-cyan-400 p-3 text-center'>
                <p> ${hub.pricing[1].price}</p>
                <p> ${hub.pricing[1].plan}</p>
            </div>
            <div class='border-4 border-cyan-400 p-3 text-center'>
                <p> ${hub.pricing[2].price}</p>
                <p> ${hub.pricing[2].plan}</p>
            </div>
         </div>
         <div class='flex justify-between'>
            <ul>
               <h3 class='text-2xl font-bold'>Features</h3>
               <li>1. ${hub.features[1].feature_name ? hub.features[1].feature_name: "not availabe"}</li>
               <li>2. ${hub.features[2].feature_name ? hub.features[2].feature_name: "not availabe"}</li>
               <li>3. ${hub.features[3].feature_name ? hub.features[3].feature_name: "not availabe"}</li>
           </ul>
           <ul>
               <h3 class='text-2xl font-bold'>Integrations</h3>
               <li>1. ${hub.integrations[0]}</li>
               <li>2. ${hub.integrations[1]}</li>
               <li>3. ${hub.integrations[2]}</li>
           </ul>
         </div>
     </div>
     
    </div>
    `
}





loadHubs();