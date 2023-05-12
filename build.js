const exe = require('@angablue/exe');

const build = exe({
    entry: './index.js',
    out: './hi.exe',
    pkg: ['-C', 'GZip'], // Specify extra pkg arguments
    version: '2.4.2',
    target: 'latest-win-x64',
    icon: './assets/icon.ico', // Application icons must be in .ico format
    properties: {
        FileDescription: 'My Cool App',
        ProductName: 'My Cool App',
        LegalCopyright: 'AngaBlue https://anga.blue',
        OriginalFilename: 'My Cool App.exe'
    }
});

build.then(() => console.log('Build completed!'));