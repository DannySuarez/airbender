import Component from './Component.js';

class AirbenderItem extends Component {

    renderTemplate() {
        const character = this.props.character;

        const enemyLink = new URLSearchParams();
        enemyLink.set('enemies', character.name);

        const allyLink = new URLSearchParams();
        allyLink.set('allies', character.name);

        const src = character.photoUrl || './assets/placeholder.jpg';

        return /*html*/ `
            <li class="airbender-item">
                <img src="${src}" alt="${character.name}">
                <h2>${character.name}</h2>
                <a href="#${enemyLink.toString()}">Enemies</a>
                <a href="#${allyLink.toString()}">Allies</a>
            </li>
        `;
    }
}

export default AirbenderItem;