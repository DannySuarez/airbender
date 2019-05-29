import Component from './Component.js';

class AirbenderItem extends Component {

    renderTemplate() {
        const character = this.props.character;
        const src = character.photoUrl || './assets/placeholder.jpg';
        return /*html*/ `
            <li class="airbender-item">
                <h2>${character.name}</h2>
                <img src="${src}" alt="${character.name}">
                <p>Weapon: ${character.weapon}</p>
            </li>
        `;
    }
}

export default AirbenderItem;