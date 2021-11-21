const users = ["Ayse","Ali","İkra"]
/**
 * push
 * map
 * find
 * filter
 * some
 * every
 * includes
 */
//push : arrayin sonuna ekleme yapar.
const newArray = users.push("Abdullah")
console.log("User:",users)

// map : arrayi dönmemizi saglar. Aynı zamanda dönerken arrayin elemanlarında istedigimiz degisikligi yaptırtabiliriz

const mapUsers = users.map((item)=>{
    console.log(item)
})

// find : arrayin icinde verilen kosullarla bir arama islemi yapar.Kosullara uyanı getirir.Kosullara uyan bir ifade yoksa undefined döner

const findUsers = users.find((item)=>item=== 'Ayse')
console.log("Kosullara uyan kullanıcı :",findUsers)

const userNew = [{
    name: "Ayse",
    age:26
},
{
    name: "İkra",
    age:23
},
{
    name: "Ece",
    age:25
},
{
    name: "Ali",
    age:29
}]
// find da direk kosulu buldugunda onu bize döndürür. Buldugunda aramaya devam etmez.
const findUser2 = userNew.find((item)=> item.name=== 'Ayse' && item.age > 20)
console.log(findUser2)

//filter : filtreleme fonksiyonudur.
const filtered = userNew.filter((item)=>item.name === 'Ali')
console.log(filtered)

// Filter ile find arasındaki fark nedir?
// Filter bize bir array döndürür. Find ise bize array içerisinden bir  bir eleman döndürür.Yani kısacası find tek bir deger döner filter ise brden fazla değeri dönebilir.

// some : array icerisindeki bilgilerle ilgili verdigimiz kosul uyuyorsa true ,uymuyorsa false döner.
//Örnegin yası 25 olan var mı ? kosulunu kontrol etmek istiyoruz.

const someUsers = userNew.some((item)=>item.age==25)
console.log("Yası 25 'e esit olan kullanıcı var mı ?",someUsers)

// every : arrayin bütün elemanlarının şarta uymasını bekler.
const everUsers= userNew.every((item)=>item.age > 20)
console.log("Tüm userların yaşı 20 den büyüktür",everUsers)

// includes

let meyveler = ["elma","armut","erik","muz"]

const isIncluded = meyveler.includes("erik")
console.log(isIncluded)