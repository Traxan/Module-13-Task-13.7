var os = require('os');
var colors = require('colors');
var time = require('./timeconverter');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();
    console.log('System:', type .cyan);
    console.log('Release:', release .red);
    console.log('CPU model:', cpu .blue);
    console.log('Uptime: ~', time.print(uptime) .green);
    console.log('User name:', userInfo.username .yellow);
    console.log('Home dir:', userInfo.homedir .grey);
}

exports.print = getOSinfo;