// implement a function to return the string "Hôm nay là thứ tư ngày 05 tháng 09 năm 2019" from today's date.
const thu = ["Thứ hai", "Thứ ba","Thứ tư","Thứ năm","Thứ sáu","Thứ bảy","Chủ nhật"];
// implement a function to return the string "Hôm nay là thứ tư ngày 05 tháng 09 năm 2019" from today's date.

let dayOfWeek = {
  0: 'Chủ nhật',
  1: 'thứ hai',
  2: 'thứ ba',
  3: 'thứ tư',
  4: 'thứ năm',
  5: 'thứ sáu',
  6: 'thứ bảy'
}
function printDate() {
  let now = new Date();
  return `Hôm nay là ${dayOfWeek[now.getDay()]} ngày ${now.getDate() < 10 ? now.getDate().toString().padStart(2, '0') : now.getDate()} tháng ${now.getMonth() + 1} năm ${now.getFullYear()}`
}
console.log(printDate());



//Từ hôm nay cách ngày 8/3 bao nhiêu ngày
const now = Date.now();
console.log(now);
const then = new Date('2019-03-08T05:45:00+07:00')

const duration = now - then; // ms Từ ngày hôm nay đến ngày 8/3 bao nhiêu milisecond
//Lấy số milisecond của số ngày-> 8/3 / số milisecond trong 1 ngày
console.log(Math.floor(duration / 86400000) + ' days'); //86400000 Số milisecond trong 1 ngày
// how many days between now and then
console.log(Math.floor((duration % 86400000) / 3600000) + ' hours');
console.log(Math.floor((((duration % 86400000) % 3600000)) / 60000) + ' minutes');
console.log(Math.floor(((((duration % 86400000) % 3600000)) % 60000) / 1000) + ' seconds');
