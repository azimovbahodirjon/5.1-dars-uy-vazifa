// AMALIYOT1

/* 1) promptdan ism va yosh kiritilsa kiritilgan yosh orqali ushbu malumotlar hisoblanib berilishi kerak:
tugilgan yil (2009), yashagan oy, hafta, kun, soat, daqiqa, sekund*/

// const ism = prompt("Ismingizni kiriting");
// const yosh = +prompt("Yoshingizni kiriting");

// let tugilganyil = 2025 - yosh;
// let oy = yosh * 12;
// let hafta = ((yosh * 365) / 7).toFixed(0);
// let kun = yosh * 365;
// let soat = kun * 24;
// let daqiqa = soat * 60;
// let sekunt = daqiqa * 60;

// const result = `Qadrli ${ism}. Siz ${tugilganyil} yilda tugilgansiz. Va siz ${oy} oy, ${hafta} hafta, ${kun} kun, ${soat} soat, ${daqiqa} daqiqa, ${sekunt} sekund yashagansiz! 😊`;
// alert(result);

/* 2) Ismlar arrayi ichidan promptdan soralyotgan ism bolsa unda ha bunday ism bor agar bolmasa afsus bunday ism yoq degan yozuv chiqarilishi kerak.*/

// const ism = prompt("Ism kiriting:");

// const ismlar = ["Bahodirjon", "Jasur", "Jorabek"];

// if (ismlar.includes(ism)) {
//   alert(`Ha ${ism} mavjud ✔`);
// } else {
//   alert(`Afsus ${ism} mavjud emas`);
// }

/* 3) array ichidagi ismlarning oxiriga bek qoshimchasini qoshing, va Console ga chiqaring */

// const ismlar = ["Bahodirjon", "Jasur", "Jorabek"];

// for (let i = 0; i < ismlar.length; i++) {
//     let result = ismlar[i] + 'bek'
//     console.log(result)
// }

/* 4) promptda kiritilgan viloyat nomi orqali osha viloyatda qancha aholi borligini chiqaring */
// const viloyatNomi = prompt('Qaysi viloyat kerak ?')
// const (viloyatNomi) {
//     case "Fargona":
//         alert("Fargona viloyatida 2mln aholi bor")
//         break
//     case "Andijon":
//         alert("Andijon viloyatida 1.5 mln aholi bor")
//         break
//     case "Namangan ":
//         alert('Namangan viloyatida 1 mln aholi bor')
//     default:
//         alert(`Hozirgacha bazada ${viloyatNomi} viloyat mavjud `)
// }

/* 5) promptga kiritilgan belgilar soni meyoridan oshsa qancha oshgani va qancha yozgani, agar meyyoridan kam yozilgan bolsa qancha yozgani va qancha yana belgi kiritilishi kerakligini aytishi kerak.  */

// const belgilar = prompt('Nimadirlar yozing...😊')

// let meyor = 30

// if (belgilar.length > meyor) {
//     alert(`Siz ${meyor} ta belgi kiritishingiz mumkin, lekin xozirda siz ${belgilar.length} ta belgi kiritdingiz. Bu meyoridan ${meyor - belgilar.length }ta kop.`)
// } else {
//     alert(`Siz ${meyor} ta belgi kiritishingiz mumkin, va siz xozirda ${belgilar.length} ta belgi kiritdingiz. yana ${meyor - belgilar.length }ta belgi kiritishingiz mumkin.`)
// }

// AMALIYOT3

//JavaSkript Masalalari:

//MASALA1

/*Ushbu arraydagi stringni indexini toping. */
// const myArray = [[false, true], [1, 2], 99, "yaxshi"];

// // For
// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] == "string") {
//     console.log("String index:", i);
//   }
// }

//MASALA2

/* Array ichidagi faqat arraylarni elementlarini ajratib oling. 
Kutilyotgan natija: [1,2,3,4,5,6]*/

// const data = [
//     [1, 2, 3], "qizil", [4, 5, 6], true, false
// ];
// const newData = []
// data.forEach((item) => {
//     const res = Array.isArray(item);
//     if (res) {
//         item.forEach((num) => {
//             newData.push(num)
//         })
//     }
// })
// console.log(newData)

// MASALA3
/* [null, 0, "", false, udefined, NaN]  qiymatlarini ajratib oladigan cod yozing.  */

// const checkData = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// const falsey = []

// checkData.forEach((item) => {
//     if (!item) {
//         falsey.push(item)
//     }
// })
// console.log(falsey)

//MASALA4
/*Berilgan qiymat: 'Samarqand' */
//Kutilyotgan qiymat: dnaqramas => elementlarni teskari qilib beradigan cod yozing.

// const word = 'samarqand'

// const splitWord = word.split('').reverse()

// let newWord = ''
// for (let i = 0; i < splitWord.length; i++) {
//     newWord += splitWord[i]
// }
// console.log(newWord)

//MASALA5
/*promtda kiritilgan istalgan sozlarni misol uchun. */
//Kiritilgan: "AsSSalomu ALAyKUM YaxSHimisiz" sozi kiritilgan bolsa. Uni:
//Javob: "aSSALOMU aLAYKUM yAXSHIMISIZ" korinishida qaytaring

// const word = 'AsSSalomu ALAyKUM YaxSHimisiz'
// const splitWord = word.split(' ')
// let newWord = ''

// splitWord.forEach((item) => {
//     const boshi = item.charAt().toLocaleLowerCase()
//     const davomi = item.slice(1).toLocaleUpperCase()

//     newWord += ' ' + boshi + davomi
// })

// console.log(newWord.trimStart())

//MASALA6

// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9]
// let naturalNumbers = 0

// numbers.forEach((num) => {
//     if (num >= 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
//         naturalNumbers += num
//     }
// })
// console.log(naturalNumbers)

// Malasa7

// const words = "Qalesiz yaxshimisiz ? Yaxshimi ishlar ?";
// let splitWord = words.split("");
// let counter = 0;

// splitWord.forEach((word) => {
//   if (word == "a" || word == "A") {
//     counter++;
//   }
// });
// console.log(`So'ralayotgan harf: ${counter}marta ishtirok etgan.`);