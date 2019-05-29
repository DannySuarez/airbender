import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const airbenderList = new AirbenderList();
        const airbenderListDOM = airbenderList.render();
        main.appendChild(airbenderListDOM);
    

        return dom;

    }

    renderTemplate() {
        return /*html*/ `
        <div>
            <main>
            </main>
        </div>
        `;

    }

}

export default App;