
function newArray(arrayOld){
    let fistElement = arrayOld.shift()
    let lastElement= arrayOld.pop()
    const array = [fistElement,lastElement]
    console.log(array)
}


newArray([7,14,"ola"])
newArray([-100, "Aplicativo",16])
