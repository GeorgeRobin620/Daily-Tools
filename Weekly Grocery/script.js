const groceryForm = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.querySelector("#grocery");
const submit = document.querySelector(".submit-btn");
const groceryContainter = document.querySelector(".grocery-container");
const groceryList = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

//Edit button variables
let editOption = false;
let editArticleId = "";
let editElement;


groceryForm.addEventListener('submit', addItem, false);

function addItem(event){
  event.preventDefault();
  let id = new Date().getTime().toString();
  let value = grocery.value;
  if(value && !editOption){
    createListItem(id, value);
    groceryContainter.classList.add("show-container");
    displayMessage("Item added to the list", "sucess");
    addToLocalStorage(id, value);
    setDefaults();
  }else if(value && editOption){
    editElement.innerHTML = value;
    displayMessage("item added to the list", "sucess");
    setDefaults();
    //console.log(editArticleId);
    addToLocalStorage(id, value);
  }else{
    displayMessage("Please enter a value", "danger");
  }
}
function createListItem(id, value){
  const article = document.createElement("article");
  let attribute = document.createAttribute("data-id");
  attribute.value = id;
  article.setAttributeNode(attribute);
  article.classList.add("grocery-item");

  article.innerHTML = `<p class="title">${value}</p>
                <div class="btn-container">
                  <!-- edit btn -->
                  <button type="button" class="edit-btn">
                    <i class="fas fa-edit"></i>
                  </button>
                  <!-- delete btn -->
                  <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>
              `;
  groceryList.appendChild(article);
  const editBtn = article.querySelector(".edit-btn");
  editBtn.addEventListener("click", editItem);

  const deleteBtn = article.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteItem);

}
function editItem(event){
  let itemToBeEdited = event.currentTarget.parentElement.parentElement;
  console.log(itemToBeEdited);
}
function deleteItem(event){
  let itemToBeDeleted = event.currentTarget.parentElement.parentElement;
  groceryList.removeChild(itemToBeDeleted);
  displayMessage("Item is removed.", "success");
}
function displayMessage(message, type){
  alert.innerHTML = `<p class="alert-${type}">${message}</p>`;
  //removing this message after 1000 ms.
  setTimeout(()=>{
    alert.textContent="";
    alert.classList.remove(`alert-${type}`)
  },1000)
}
function addToLocalStorage(id, value){
  
}

function editItem(event){
  editOption = true;
  let itemToBeEdited = event.currentTarget.parentElement.parentElement;
  editElement = itemToBeEdited.firstChild;
  editArticleId = itemToBeEdited.dataset.id;
  grocery.value = editElement.innerHTML;
  submit.innerHTML = "edit";
}

function setDefaults() {
  grocery.value = "";
  editOption = false;
  submit.innerHTML = "submit";
  editElement = "";
  editArticleId = "";
}
// function addItem(event){
//     event.preventDefault();
//     let groceryValue = grocery.Value;
//     let itemId = new Data().getTime().toString();
//     console.log(itemId);
//     let article = document.createElement("article");
//     article.setAttribute("data-id", id);
//     article.innerHTML = `<p class="title">${value}</p>
//               <div class="btn-container">
//                 <!-- edit btn -->
//                 <button type="button" class="edit-btn">
//                   <i class="fas fa-edit"></i>
//                 </button>
//                 <!-- delete btn -->
//                 <button type="button" class="delete-btn">
//                   <i class="fas fa-trash"></i>
//                 </button>
//               </div>
//             `;
//     let item = '<article>Lorem isp.</article>';
// }