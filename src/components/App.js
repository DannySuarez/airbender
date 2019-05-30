import Component from './Component.js';
import Header from './Header.js';
import AirbenderList from './AirbenderList.js';
import api from '../services/airbender-api.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();

        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const airbenderList = new AirbenderList({ characters: [] });
        main.appendChild(airbenderList.render());

        function loadEnemies() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
                        
            let searchQuery = '';

            if(searchParams.get('enemies')) {
                searchQuery = 'enemies';
            } else if(searchParams.get('allies')) {
                searchQuery = 'allies';
            }
            const search = searchParams.get(searchQuery);

            api.getCharacters(search, searchQuery)
                .then(characters => {
                    airbenderList.update({ characters });
                })
                .catch(err => {
                    console.log(err);
                });      
        } 


        loadEnemies();

        window.addEventListener('hashchange', () => {
            loadEnemies();
        });
        
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