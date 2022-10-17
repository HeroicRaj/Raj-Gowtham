// serverInfo = {
// 	"levelshotsArray": [
// 	  "https://picsum.photos/200",
// 	  "https://picsum.photos/200/300?grayscale", "https://picsum.photos/200"
// 	]
//   }
  
//   serverInfo.levelshotsArray.map(res => {
// 	var imge = document.createElement('img');
// 	imge.src = res;
// 	imge.height = 100;
// 	imge.width = 100;
// 	imge.alt = "dfs";
// 	document.getElementById('img').appendChild(imge);
//   });

let htmltag =``;


fetch(`https://jsonplaceholder.typicode.com/photos/`).
then(res=>res.json()).
then(data=> {
   for(let i=0; i<5; i++){
    if(i == 0){
        htmltag+=`
        <div class="carousel-item active">
        <img src=${data[i].url} alt = "" width="100%" height="500">
       
          <h3>${data[i].title}</h3>
          <p>${data[i].thumbnailUrl}</p>
        </div> `
    }  
    else{
        htmltag+=`
        <div class="carousel-item ">
        <img src= ${data[i].url} alt = ""  width="100%" height="500">
       
          <h3>${data[i].title}</h3>
          <p>${data[i].thumbnailUrl}</p>
        </div> `
    }
}

document.getElementsByClassName("carousel-inner")[0].innerHTML=htmltag;    
})

.catch((error)=>console.log(error));

//List Group

let listGroup = '';
fetch('https://jsonplaceholder.typicode.com/users').
then(response => response.json()).
then(data => 
   data.slice(0,3).forEach((test)=>{
       listGroup += `<div class="container">
       <ul style="list-style:none; margin:50px;border:1px solid #000fff;">
       <li style=" color:#fff000; padding:6px 0px;font-size:14px; ">${test.id }</li>
       <li style=" color:#ff0000; font-size:25px; padding:20px ;text-transform:uppercase;">${test.name}</li>
       <li style="color:#ffff00; font-size:15px; padding:20px;">${test.username }</li>
       <li style="color:#000066; font-size:15px; padding:20px;">${test.email }</li>
       <li style="color:#00ff40; font-size:15px; padding:20px;">${test.phone }</li>
       <li style="color:#0080ff; font-size:15px; padding:20px ;">${test.website }</li>
       </ul></div>`;
       document.getElementsByClassName('list-group')[0].innerHTML = listGroup;
   })
   ).catch(error => console.log(error));

//Form

let form = " ";
fetch(`https://jsonplaceholder.typicode.com/users`).
then(response => response.json()).
then(java =>
        java.slice(0,3).forEach(item =>{
          form += `
            <div class="container">
            <h5> ${item.id} </h5>

            <div class="form-group">
                <label for="Name"> Name: </label><br>
                <input type="text"  placeholder= "Enter Name" id="userid" value = ${item.name}> </input>
            </div>
            <div class="form-group">
                <label for="UserName"> UserName: </label><br>
                <input type="text"  placeholder= "Enter UserName" id="UserName" value =  ${item.username}> </input>
            </div>
            <div class="form-group">
                <label for="phone"> phone: </label><br>
                <input type="phone"  placeholder= "Enter phone number" id="phone" value =${item.phone}>  </input>
            </div>
            <div class="form-group">
            <label for="email"> Email address: </label><br>
            <input type="email"  placeholder= "Enter email" id="email" value =${item.email} >  </input>
        </div></div>`;
        document.getElementsByClassName('form')[0].innerHTML = form;
    })
).
catch(error => console.log(error));

//Card

let card = ' ';
fetch(`https://jsonplaceholder.typicode.com/photos`)
.then(response => response.json())
.then(java => 
  java.slice(0,3).forEach (item =>{
    card +=`<div class="container" >
    <h3>${item.id}</h3>
    <div class="card mt-3" style="width:200px;padding:20px;">
    <img src="${item.thumbnailUrl}" alt="" title="Card" />
    <h4>${item.title}</h4>
    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the .</p>
    <a href="javascript:;" class="btn btn-primary">Click</a>
    </div>
    </div>`;
    document.getElementsByClassName('card')[0].innerHTML = card;
  })
  )
.catch(error => console.log(error));

//media object

// let media = " ";

// fetch(`https://jsonplaceholder.typicode.com/photos`).
// then(response => response.json()).
// then(java =>
//         java.slice(0,5).forEach(item =>{
//           media +=  `<div class="container">
//           <div class="media border mt-3">
//             <img src="${item.thumbnailUrl}" alt="John Doe" class="mr-3 mt-3 rounded-circle" style="width:100px">
//             <div class="media-body">
//               <h4>${item.title}</h4>
//               <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly</p>
//             </div>
//           </div></div>`;

//   document.getElementsByClassName('media')[0].innerHTML = media;

//   })
//  ).
//   catch(error => console.log(error));

let media = " ";

fetch(`https://jsonplaceholder.typicode.com/photos`).
then(response => response.json()).
then(data =>
        data.slice(0,3).forEach(item =>{
          media +=  `<div class="container">
          <h5>Media object</h5>
          <div class="media border mt-3">
            <img src="${item.thumbnailUrl}" alt="John Doe" class="mr-3 mt-3 rounded-circle" >
            <div class="media-body">
              <h4>${item.title}</h4>
              <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly</p>
            </div>
          </div><br></div>`;

  document.getElementsByClassName('media')[0].innerHTML = media;
  })
 ).
  catch(error => console.log(error));
//Collapse

let htmlSeg = ' ';
fetch(`https://jsonplaceholder.typicode.com/comments`)
.then(response => response.json())
.then(data => 
  data.slice(0,5).forEach((detail , index )=>{
      htmlSeg += `<h2>${detail.id}</h2>
      <h5 style="display:none;">${detail.name}</h5>
      <button  class="btn btn-info btnclick"  data-toggle="collapse" data-target="#demo">${detail.email}</button>
      <div id="demo-${index}" class="collapse">${detail.body}</div>`;
    document.getElementsByClassName('Collapse')[0].innerHTML = htmlSeg;

    let btn = document.querySelectorAll('.btnclick');
  //  console.log(btn);
    let  collapse = document.querySelectorAll('[id^="demo-"]');
    // console.log(collapse);
    for(let i=0; i<btn.length;i++){
      btn[i].addEventListener('click' ,function (event){          
        collapse[i].classList.toggle('show');
      });
    }
  })
  )
.catch(error => console.log(error));

//Model

let model ='';
fetch(`https://jsonplaceholder.typicode.com/users`)
.then(response => response.json())
.then(data => 
    data.slice(0,3).forEach(item  => {
      model += `<div class="container" style="padding:20px">
      <h3>${item.id}</h3>
      <h4>Model</h4>
      <!-- Button to Open the Modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal-${item.id}">
        ${item.username}
      </button>
      <!-- The Modal -->
      <div class="modal" id="myModal-${item.id}">
        <div class="modal-dialog">
          <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header">
              <h4 class="modal-title ">${item.name}</h4>
              <button class="close" data-dismiss="modal">&times;</button>
            </div>
            <!-- Modal body -->
            <div class="modal-body">
            ${item.email}
            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
              <button class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    document.getElementsByClassName('model')[0].innerHTML = model;
    })
  )
 .catch(error => console.log(error));
    // console.log(mail);
    // for(let i=0; i<title.mail.length; i++);{
    //     // let getAttr = item;
    //     // alert(getAttr)
    //     console.log(title.mail[i]);
    //         }
   // })
  //)
  // for(let i=0; i<10; i++){
  //   let getAttr = item;
  //   alert(getAttr)
  //   console.log(data[i]);

  //       }
        // .catch(error => console.log(error));