import Component from './Component.js';

class AirbenderList extends Component {

    renderTemplate() {
        return /*html*/ `
            <ul class="airbender-list">
                <li>
                    <h2>Aang</h2>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235" alt="Kya">
                    <p>Weapon: Air</p>
                </li>
                <li>
                    <h2>Ran and Shaw</h2>
                    <img src="https://vignette.wikia.nocookie.net/avatar/images/6/62/Ran_and_Shaw.png/revision/latest?cb=20140901163755" alt="Ran and Shaw">
                    <p>Weapon: Claws, teeth, fire</p>
                </li>                
            </ul>
        `;
    }

}

export default AirbenderList;