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