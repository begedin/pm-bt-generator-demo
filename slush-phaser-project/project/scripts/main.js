import Analytics from 'utils/analytics';

import Boot from 'states/boot';
import Preload from 'states/preload';
import Menu from 'states/menu';
import Game from 'states/game';

var game, App = {};

App.start = function() {
    game = new Phaser.Game(
        960, 640,
        Phaser.AUTO,
        'game-container'
    );

    game.analytics = new Analytics('ms-community-slush-game');

    game.state.add('boot', Boot);
    game.state.add('preload', Preload);
    game.state.add('menu', Menu);
    game.state.add('game', Game);

    game.state.start('boot');

    return game;
};

export default App;
