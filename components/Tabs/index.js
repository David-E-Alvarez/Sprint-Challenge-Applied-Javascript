// Step 2: Create Tabs
// -----------------------
// [x]Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// [x]Once the data is returned console.log it and review the structure.
// []Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//how do i add Tab component to DOM under .topics element?
const topic = document.querySelector('.topics');

function Tab(string){
    //element
    const tab = document.createElement('div');
    //add class
    tab.classList.add('tab');
    //assign values to tabs by iterating through array i get from GET request promise
    tab.textContent = string;
    console.log("tab.textContent: " + tab.textContent);
    return tab;
}

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(response => {
    console.log("response.data: ",  response.data);
    response.data.topics.forEach(element => {
        console.log("element: ",element);
        topic.append(Tab(element))
    });

})
.catch(error => {
    console.log("the data was not returned", error)
})

//var axiosTestVar = axios.get("https://lambda-times-backend.herokuapp.com/topics");
//console.log("axiosTestVar: " + axiosTestVar);