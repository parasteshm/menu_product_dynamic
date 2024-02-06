async function product(){
    let data= await fetch("http://localhost:3000/product")
    let res=await data.json("")
    let html=res.map(elem=>{
        return`<div class="card col-4">
        <img src="${elem.imge}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${elem.title}</h5>
          <p class="card-text">${elem.text}</p>
          <a href="#" class="btn btn-primary">${elem.link}</a>
        </div>
      </div>`
    })
    document.querySelector(".row").innerHTML=html.join("")
}
export default product