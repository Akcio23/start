function deleteObject(object,propertiesDelete){
    const copia = Object.assign({}, object)
     delete copia[propertiesDelete]

    return console.log(copia)
}

deleteObject({a:1, b:2}, 'a')

deleteObject({
    id:20,
    name:"Caneta",
    description:`Not filled`

},'description')




