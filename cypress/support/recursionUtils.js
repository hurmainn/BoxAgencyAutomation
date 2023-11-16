module.exports={recurse};
const recurse=(commandsFn,checkFn)=>{
    commandsFn.then(x=>{
        if(checkFn(x)){
            cy.console.log(("Nice"));
            return
        }
        recurse(commandsFn,checkFn)
    })
}