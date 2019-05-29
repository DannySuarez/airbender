import Component from './Component.js';

class AirbenderItem extends Component {

    renderTemplate() {
        return /*html*/ `
            <li class="airbender-item">
                <h2></h2>
                <img src="" alt="">
                <p>Weapon: </p>
            </li>
        `;
    }
}

export default AirbenderItem;