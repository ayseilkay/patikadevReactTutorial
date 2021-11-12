console.log("You are did it")

// projenin oldugu dizine git 
// npm init   komutunu calıstır
// bir dosya ac (index.js )
// node index.js  yada node index dediginde dosyanı bult etmis oluyorsun.


// package.json icerisindeki scripte start  diye birsey ekledi.
// içerisinede node index dedik
// console dan geldigimizde ise;
// npm start dediğimizde yine 'You are did it' komutu calısır.
// Peki buna niye ihtiyac duyarız?
// Bazen scriptlerimiz çok uzun olabiliyor.Her defasında uzun olarak yazmak yerine aslında script tagi içerisinde kullanacğımız yapılarla(keylerle) daha kolay bir şekilde istediğimiz scripti çalıştırabiliyoruz.

//https://www.npmjs.com/ bu sitede bütün kütüphaneleri bulabiliriz.
//npm i slugify kopyalayıp cmd üzerinde npm install slugify yaptıgımızda kütüphaneyi projeye eklemis oluruz.

// bu kütüphaneyi kurdugumuzda package.json içerisinde dependencies alanlarının içerisinde slugify modlünün ismini ve version bilgisini görebiliriz.
// Yani artık bu modul proje için dependencies (bagımlılık) haline gelmis oluyor.

//******/ asağıdaki require ile tanımlanan kısımda ESMASCRIPT6 dan önceki import işlemidir.*****
// var slugify = require('slugify') // kullanabilmem için bunu dahil etmem gerekiyor.

// package json içerisine type: module diye bir tanımlama yaptık. Bu tanımlamayı yaptıktan sonra artık kutuphaneleri required ile tanımlamak yerine import yaparak tanımlama yapmalıyız.
import slugify from 'slugify'
// import topla from './myModule.js'
let title = slugify('some string')
console.log(title)
let title2 =slugify('lorem ipsum some string try catch','**')
console.log(title2)


// node_modules klasörünü sildigimizde , sonrasında console a gelip npm install dediğimizde,
// node_modules klasörü tekrardan projeye dahil olmus olur.Bu dosyayı kaybetmemiz bir sorun yaratmayacaktır.

// kendimi myModule isminde bir module yazdık ve onu dısarı aktararak bu sayfada kullanılmasını sagladık.Şimdi o yazdıgımız modulu buraya import edecegiz.

// import myModule from './myModule.js' bu sekilde bir import yapabiliriz.

import divFunc, {hello, topla, cikar, text, user,users } from './myModule.js'

console.log(topla(3,5))
console.log(hello('Ayse'))
console.log(cikar(9,6))
console.log(divFunc(8,2))
console.log(text)
console.log(user)
console.log(users)