//  const backgroundChanger=document.getElementById("backgroundChanger")
//  backgroundChanger.addEventListener("click",()=>{
//     alert("buttonclick")
//     window.document.body.style. background="grey"
//  });
//      const changetext=document.getElementById("changetext");
//      changetext.textContent="hello world"
//     const changetext=document.getElementById("changetext")
//     changetext.addEventListener("click",() =>{
//         window.document.body.style.background="white"

  //  });
  
  const submitBtn=document.getElementById("submitBtn");
  const output=document.getElementById("output");
  console.log(username)
    submitBtn.addEventListener("click",(e)=>{
      const username=document.getElementById("username").value;
      e.preventDefault();
      output.innerHTML=username
    });
  