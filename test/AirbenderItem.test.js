import AirbenderItem from '../src/components/AirbenderItem.js';

const test = QUnit.test;

QUnit.module('Airbender Item');

test('render template from data', assert => {
    const character = {
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235',
        name: 'Aang',
        weapon: 'Air'
    };

    const airbenderItem = new AirbenderItem({ character });
    const rendered = airbenderItem.renderTemplate();

    assert.htmlEqual(rendered, /*html*/`
        <li class="airbender-item">
            <h2>Aang</h2>
            <img src="https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235" alt="Aang">
            <p>Weapon: Air</p>
        </li>
    `);
});