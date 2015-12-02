var util = require('util');


var styles = {
    //styles
    'bold': ['\033[1m', '\033[22m'],
    'italic': ['\033[3m', '\033[23m'],
    'underline': ['\033[4m', '\033[24m'],
    'inverse': ['\033[7m', '\033[27m'],
    'strikethrough': ['\033[9m', '\033[29m'],
    // 'blink': ['\033[9m', '\033[29m'],
    'blink': ['\033[4m', '\033[24m'],
    //text colors
    //grayscale
    'white': ['\033[37m', '\033[39m'],
    'grey': ['\033[90m', '\033[39m'],
    'black': ['\033[30m', '\033[39m'],
    //colors
    'blue': ['\033[34m', '\033[39m'],
    'cyan': ['\033[36m', '\033[39m'],
    'green': ['\033[32m', '\033[39m'],
    'magenta': ['\033[35m', '\033[39m'],
    'red': ['\033[31m', '\033[39m'],
    'yellow': ['\033[33m', '\033[0m'],
    //background colors
    'whiteBG': ['\033[47m', '\033[49m'],
    'greyBG': ['\033[49;5;8m', '\033[49m'],
    'blackBG': ['\033[40m', '\033[49m'],
    'blueBG': ['\033[44m', '\033[49m'],
    'cyanBG': ['\033[46m', '\033[49m'],
    'greenBG': ['\033[42m', '\033[49m'],
    'magentaBG': ['\033[45m', '\033[49m'],
    'redBG': ['\033[41m', '\033[49m'],
    'yellowBG': ['\033[43m', '\033[49m']
};

function format(args){
    return util.format.apply(this, args);
}

function print(t, message, opts) {
    var style = opts.theme[t] || (styles[t]?t:false) || [styles['grey']];

    if(!util.isArray(style)){
        style = [style];
    }

    var style_start = [];
    var style_end = [];

    style.forEach(function(item){
        if(!styles[item]){
            throw new Error('console-perttify:styles of "'+ item+'" is undefined')
        }
        style_start.push(styles[item][0]);
        style_end.push(styles[item][1]);
    })

    message = format(message);

    var prefix = '';
    if(opts.prefix){
        prefix = format(['%s%s:%s', styles['bold'][0], t,styles['bold'][1]])
    }

    process.stdout.write(format(['%s%s %s %s\n', prefix, style_start.join(''), 
        message, style_end.join('')]));
}

function extraConsole(opts) {
    opts = opts || {};
    var theme = {
            info: ['green'],
            warn: ['yellow'],
            error: ['red','bold'],
            log: ['grey']
        },
        t = opts.theme;

    for (var p in t) {
        theme[p] = t[p];
    }

    opts.theme = theme;
    console.info = function() {
        print('info', arguments || [], opts)
    }
    console.warn = function() {
        print('warn', arguments || [], opts)
    }
    console.error = function() {
        print('error', arguments || [], opts)
    }
    console.log = function() {
        print('log', arguments || [], opts)
    }
    console.blue = function(){
        print('blue', arguments || [], opts)
    }
    console.cyan = function(){
        print('cyan', arguments || [], opts)
    }
    console.green = function(){
        print('green', arguments || [], opts)
    }
    console.magenta = function(){
        print('magenta', arguments || [], opts)
    }


}

// extraConsole({
//     prefix:true,
//     theme:{
//             log: ['underline' ,'green', 'redBG']
//         }
// });
module.exports = extraConsole;

// console.log('log')
// console.info('info')
// console.log('log')
// console.warn('warn')
// console.error('red')