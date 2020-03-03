export function JSONtoCSS(json){
    let cssText = ``;
    Object.entries(json).forEach(([name,value])=>{
        cssText += `${name}:${value};`
    })
    return cssText;
}

export function cssBeautifer(plainCSS){
    let modifedCSS = `
        #element{
            ${plainCSS}
        }
    `
    return modifedCSS;
}