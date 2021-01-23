let memberArray = ['egoing','graphittie','leezhce'],
    i = 0;

console.group('array loop');
while(i < memberArray.length) {
    console.log(i, memberArray[i]);
    i++
}
console.groupEnd('array loop');
/* array loop
    0 egoing
    1 graphittie
    2 leezhce */


let memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezche'
}

console.group('array loop');
for(name in memberObject) {
    console.log(name, memberObject[name]);
}
console.groupEnd('array loop');
/* array loop
    manager egoing
    developer graphittie
    designer leezche */
