// export const topla = function(a,b){    // export bu sekildede tanımlanabilir.
//     return a + b;
// }
// export const hello =()=>{
//     console.log("selamke")
// };
 const topla = function(a,b){
    return a + b;
}
 const hello = (name) =>{
    console.log("selamke" + name)
    console.log(`Merhaba ${name}`)
};

const cikar = (a,b) => a-b ;
// export default topla;// yazılan fonksiyonu dısa aktarmıs olduk.
// ayrı ayrı başlarına export yazmakytansa;Aşağıdaki gbide yazdırabiliriz.

export{
    hello,
    topla,
    cikar
}

/**************************************************************** */
 const divFunc = (a,b) => a/b;
 export default divFunc;

 export const text= "text";
 export const  user = {
     name:"ayse",
    surname:"ilkay" }
export const users = [
    {
        name:"Ali",
    surname:"Birinci"
    },{
    name:"Ayse",
    surname:"İlkay"}
]

// exportları teker teker tanımlamak yerine aşağıdaki şekildede tanımlayabiliriz.

// export{
//     divFunc,
//     text,
//     user,
//     users
// }