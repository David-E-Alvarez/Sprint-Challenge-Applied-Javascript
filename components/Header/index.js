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
    const title = document.createElement('h1');
    const weather = document.createElement('span');
    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(weather);
    header.classList.add('header');
    date.classList.add('date');
    weather.classList.add('temp');
    return header;
}
