const View = require('./snake-view');

$( () => {
  const view = new View($('.grid'));
  view.setupBoard();
});