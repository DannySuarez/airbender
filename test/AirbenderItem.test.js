import AirbenderItem from '../src/components/AirbenderItem.js';

const test = QUnit.test;

QUnit.module('Airbender Item');

test('render template from data', assert => {
    const character = {
        photoUrl: 'https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235',
        name: 'Aang',
    };

    const airbenderItem = new AirbenderItem({ character });
    const rendered = airbenderItem.renderTemplate();

    assert.htmlEqual(rendered, /*html*/`
        <li class="airbender-item">
        <img src="https://vignette.wikia.nocookie.net/avatar/images/7/79/Pilot_-_Aang.png/revision/latest?cb=20120311133235" alt="Aang">
        <h2>Aang</h2>
        <a href="#enemies=Aang">Enemies</a>
        <a href="#allies=Aang">Allies</a>
        </li>
    `);
});