let memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezhce'
}
console.log("memberObject.designer : ", memberObject.designer);
console.log("memberObject['designer'] : ", memberObject['designer']);
// memberObject.designer :  leezhce
// memberObject['designer'] :  leezhce

memberObject.designer = 'leezche';
console.log("memberObject.designer : ", memberObject.designer);
console.log("memberObject['designer'] : ", memberObject['designer']);
// memberObject.designer :  leezche
// memberObject['designer'] :  leezche

console.log("before delete :", memberObject.manager);
// before delete : egoing
delete memberObject.manager;
console.log("after delete : ", memberObject.manager);
// after delete :  undefined



