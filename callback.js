/***************************  setTimeout ******************************************************/

//verecegimiz parametredeki süre tamamlandıktan sonra bir kere çalışıyor 
// bu setTimeout 2 adet parametre alır. Birinci fonksiyon, ikincisi de milisaniye cinsinden bir değer alır.
// setTimeout(()=>{
// console.log("2 sn ye gecince bu kısım calısacak.")
// },2000)

// Yuakarıya baktıgımızda 2000 milisaniye yani 2 snye sonra fonksiyonda ne yapılması isteniyorsa o çalışacak.

/************************************ setInterval ***************************************************/
// verilen parametrede ne veriliyrsa o periyotta çalışmaya devam eder.
// setInterval(() => {
//     console.log("her 2 sn de 1 calısacak")
// }, 2000);

/*************************************************************************************** */

// islemleri sıraya koymak için iç ice olacak sekilde fetchleri calıstırdık.
 import fetch from "node-fetch"
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) =>response.json())
// .then(responseJson => {

//     console.log("Users yüklendi" ,responseJson);

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((responseJson) =>{
//      console.log("Post1 yüklendi",responseJson);

//      fetch("https://jsonplaceholder.typicode.com/posts/2")
//      .then((response) => response.json())
//      .then((responseJson) => console.log("post 2 yüklendi",responseJson));
// });
// });

// Yukardaki yapıyı daha kolay hale getirebiliriz ***** ONEMLİ  ***

// async function getData(){// await olunca fetchi yapmasını bekler ve sonra devam eder.
// const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
// console.log("Users",users);
// const posts1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
// console.log("Posts1",posts1);
// const posts2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
// console.log("Posts2",posts2);
// }

// getData()

// Anonim fonksiyon nasıl olustururuz? Aşağıda bir örneğini görebiliriz.

// ( async () =>{
// const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
// console.log("Users",users);
// const posts1 = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
// console.log("Posts1",posts1);
// const posts2 = await (await fetch("https://jsonplaceholder.typicode.com/posts/2")).json();
// console.log("Posts2",posts2);
// })();



/***YUKARIDAKI FETCH YAPISININ AXIOS KULLANIMIYLA ASAGIDA YAZACAGIZ */
// AXİOS kütüphanesini fetch e alternatif olarak kullanabiliriz./ -->   npm i axios
 import axios from "axios";
// ( async () =>{
//     const {data:users} = await axios ("https://jsonplaceholder.typicode.com/users");
   
//     const {data:posts1} = await axios("https://jsonplaceholder.typicode.com/posts/1");
   
//     const {data:posts2} = await axios ("https://jsonplaceholder.typicode.com/posts/2");
//     console.log("Users",users);
//     console.log("Posts1",posts1);
//     console.log("Posts2",posts2);
//     })();

    // data yapısıyla cagırmalıyız. Esmascripte yer alan data: ile yeniden isimlendirme yapabiliyoruz.
    


    /*************************************PROMISES****************************************************/

    // const getComments = () => {
    //     return new Promise((resolve,reject)=>{
    //         resolve({text:"Ayse"})
    //     })
    // }
    // getComments().then((data)=> console.log(data)).catch(e => console.log(e))

    //*** getComment e 1 gönderildiginde resolve 2 gönderildiginde reject olsun. */

    //   const getComments = (variable) => {
    //     return new Promise((resolve,reject)=>{
    //        variable == 1 ? resolve("resolve etti") : reject("reject etti")
    //     })
    // }
    // getComments(2).then((data)=> console.log(data)).catch(e => console.log(e))

    ///************* *************************************************************/
    //NOT : AWAIT mutlaka async bir fonk içinde olmalıdır.
    
      const getUsers = (variable) => {
        return new Promise(async(resolve,reject)=>{
           const {data} = await axios("https://jsonplaceholder.typicode.com/users")
           resolve(data)
        })
    }
    // getUsers().then((data)=> console.log(data)).catch(e => console.log(e))

    const getPost = (postid) => {
        return new Promise(async(resolve,reject)=>{
           const {data:post1} = await axios("https://jsonplaceholder.typicode.com/posts/" + postid)
           resolve(post1)
        //    reject("bir sorun olustu")
        })
    }
    // getPost(1).then((post1)=> console.log(post1)).catch(e => console.log(e))

    // Dikkat : Yukarıdaki sekilde bu verilerimizi almak istediğimizde sıralı calısmazlar.
    // Bunun için yine anonim bir fonksiyon yazabiliriz.Ve sıraya koymak içinde async keywordunu anonim fonksiyonun basına yazalım.
// Asagıdak, yapıyla birlikte artık hep sıralı sekilde verileri çekecek.


    // (async()=> {
    //    await getUsers().then((data)=> console.log(data)).catch(e => console.log(e))
    // await getPost(1).then((post1)=> console.log(post1)).catch(e => console.log(e))

    // })();



    // Yukarıdaki yapıyı daha düzgün sekilde yazmak istersek.

    // (async()=> {
    //   const users =  await getUsers();
    //   const post = await getPost(1);

    //   console.log(users);
    //   console.log(post);
    //  })();

     // Yukarıdaki yapıda hata oldugunda bunu nasıl yakalarız.
    //  (async()=> {
    //      try{
    //         const users =  await getUsers();
    //         const post = await getPost(1);
    //         console.log(users);
    //         console.log(post);
    //      } catch(e){
    //         console.log(e)
    //      }
    //    })();

       // Bütün promiseları calıstırıp sonucu bekleyebiliriz.Bütün promiseları arrayin icinde veriyoruz.
       Promise.all([getUsers(),getPost(1)]).then(console.log).catch(console.log)