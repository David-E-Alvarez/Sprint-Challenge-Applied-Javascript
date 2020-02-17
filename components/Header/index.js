// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
const header = document.querySelector('.header-container');
header.append(Header());
function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    //add text to date
    date.append("SMARCH 28, 2019");
    const title = document.createElement('h1');
    //add text to h1
    title.append("Lambda Times");
    const weather = document.createElement('span');
    //add text to temp span
    var degreeSymbol = "\xB0";
    weather.append(`98${degreeSymbol}`);
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(weather);
    header.classList.add('header');
    date.classList.add('date');
    weather.classList.add('temp');
    return header;
}
