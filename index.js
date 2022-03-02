// Code your solution here
function findMatching(drivers, name){
    return drivers.filter((string) => string.toUpperCase() === name.toUpperCase())
}
function fuzzyMatch(drivers, letters){
    
    return drivers.filter((string) => string.substring(0, 2) === letters)
}
function matchName(drivers, name){
    return drivers.filter((string) => string.name === name)
}
findMatching(drivers, bobby)