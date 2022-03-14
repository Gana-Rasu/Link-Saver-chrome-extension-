// empty array to take in the types value
let myLeads = [];


// variables for dom 
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-El");
const deletbtn = document.querySelector("#delete-btn");
const tabbtn = document.querySelector("#tab-btn");

// getting myleads from localstorage 
const LeadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(LeadsFromLocalStorage){
    myLeads = LeadsFromLocalStorage
    renderLeads();
    // changing myleads to leads
}

function renderLeads() {
    let listItems = " "; //empty string to make the list in the unordered list
// 
    for(var i = 0 ;i<myLeads.length;i++){
    // new types value goes to a new value every time
    listItems += `
    <li>
    <a target="blank" href="${myLeads[i]}">${myLeads[i]}</a>
    </li>
    `
    // console.log(listItems)
     }
    // adds every new element to the list(newly created by the html)
     ulEl.innerHTML = listItems;
}


// hard codel tabl url eg
// const tab = [
//     {url:"www.gana.com"}
// ]


// this event listener id to save the current tab as the list which we were doing all the way
tabbtn.addEventListener("click",function(){

    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
   
        myLeads.push(tabs[0].url);
            localStorage.setItem("myLeads",JSON.stringify(myLeads));
            renderLeads(myLeads);
    })    
})

// save click event
inputBtn.addEventListener("click",(e)=>{
    // pushing the typed value to the array
    myLeads.push(inputEl.value);
    // console.log(myLeads);
    inputEl.value=" ";

// pushing myleads to local storage also converting the array to string as it doesn't take array
localStorage.setItem("myLeads",JSON.stringify(myLeads));
    renderLeads();
})

deletbtn.addEventListener("click",(e)=>{

    localStorage.clear();
    myLeads = [];
    renderLeads();
})


