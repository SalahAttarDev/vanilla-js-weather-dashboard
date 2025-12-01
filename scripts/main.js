import { navigation } from './components/navigation.js';
import { footer } from './components/footer.js';
import { renderWeatherPage } from './pages/renderWeatherPage.js';

function initializeRoot() {
    let root = document.createElement("root");
    root.id="root";
    document.body.appendChild(root);
}




function init() {
    initializeRoot();
    document.getElementById("root").innerHTML = `
        ${navigation()}
        <main>

            ${renderWeatherPage()}
        </main>
        ${footer()}
    `
}



init();