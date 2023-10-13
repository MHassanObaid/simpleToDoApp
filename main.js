let form = document.getElementById("form");

let input = document.getElementById("input");

let msg = document.getElementById("msg");


let posts = document.getElementById("posts");

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log("dsa");
formValidation();

});


  let formValidation = ()=>
  {
   
    let vn = input.value;
    if(vn === "")
    {
      console.log("empty")
      //let ele = document.getElementById("eror");
      //ele.textContent="Please enter something in field"
      msg.innerHTML="Post cannt be blank";
    }
    else
    {
      msg.innerHTML="";
      acceptData();
      console.log("Success");
    }


  }


  let data = {};

  let acceptData = ()=>{
    data["text"] = input.value;
    console.log(data);
    createPost();
  }

  //formValidation();  RUN ONETIME


  let createPost = ()=>{



    posts.innerHTML += `
    <div class="div_posts">
    <p>${data.text}</p>
    <span class="options" >
     <button onClick="editpost(this)"><i class="fas fa-edit"></i></button>
     <button onClick="deletePost(this)"><i class="fas fa-trash-alt"></i></button>
    </span>
  </div>
    `;
    input.value = "";

  }


  

  let deletePost = (e)=>{
               e.parentElement.parentElement.remove();


  }

  let editpost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };
  

  // let editPost = (err)=>{
   
  //   console.log("dsaadd");
  //   if (err.parentElement && err.parentElement.previousElementSibling) {
  //     input.value = err.parentElement.previousElementSibling.innerHTML;
  //     err.parentElement.parentElement.remove();
  //   } else {
  //     console.log("Unable to edit post: Element not found.");
  //   }

    
    



  // }

