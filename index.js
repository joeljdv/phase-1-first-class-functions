function liftWeight(){
    console.log('Lift some weight')
}
function swim(){
    console.log('Go for a Swim')
}
function runFiveMiles() {
    console.log('Go for a five-mile run');
  } 

function receivesAFunction(liftWeight){
    liftWeight()
}

function returnsANamedFunction(greeting, msg){
    return function fn(name, lang){
        return `${greeting}, ${name}, ${msg} ${lang}`
    }
}

function returnsAnAnonymousFunction(color,message='my favorite color is'){
    return (hello)=>`${hello}, ${message} ${color}`
}