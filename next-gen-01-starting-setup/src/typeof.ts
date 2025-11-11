const userName = 'Max';

type UserName = typeof userName;


const settings = {
    difficulty: 'easy',
    level: 1,
    didStart: false,
    players: ['Max', 'Anna'],
}

type Settings = typeof settings;

function loadData(s: typeof settings) {
    //...
}

loadData(settings);