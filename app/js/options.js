/* © 2016 NauStud.io
 * @author Thanh
 */

console.log('\'Allo \'Allo! Option');

const settingModal = document.getElementById("settings-modal");
const wallpaper = document.getElementById("wallpaper");
const setting_lang_en = document.getElementById("setting-lang-en");
openSetting = () => {
	settingModal.style.visibility = "visible";
	wallpaper.style.opacity = 0.6;
	settingModal.style.opacity = 0.8;
	settingModal.style.maxWidth = "100%";
	settingModal.style.maxHeight = "100%";
	settingModal.style.height = "68%";
	settingModal.style.background = "black";
	setting_lang_en.checked = true;
}

document.getElementById("settings-btn").addEventListener("click", openSetting);

closeSetting = () => {
	settingModal.style.visibility = "hidden";
	settingModal.style.opacity = 0;
	wallpaper.style.opacity = 1;
}

document.getElementById("settings-close-btn").addEventListener("click", closeSetting);
document.getElementById("wallpaper").addEventListener("click", closeSetting);


//Lấy tất cả các phần tử con của Form
const getFormSetting = Array.from(document.querySelector('#settings-panel').elements);
let dataQuickLinks = [];

// 	trueChecked	  : Các thẻ li được hiển thị trên nav bar
const trueChecked = document.querySelectorAll('#quicklinks > li');

//Gọi hàm kiểm tra //Truyền vào dataQuicklinks: mảng chứa các item đã qua check của user
let getLocalStorageQuickLinks = JSON.parse(localStorage.getItem('dataQuickLinks'));
//Get local storage + xử lý
getTrueQuickLinks(getLocalStorageQuickLinks, trueChecked);

document.querySelector('#settings-panel').addEventListener('change', () => {
	//Duyệt qua form
	let dataOption = getFormSetting.reduce((data, input) => {
		//radio
		if (input.type === 'radio') {
			data[input.name] = data[input.name] || (input.checked && input.value) || '';
		}
		//Collab ID
		else if (input.type === 'text') {
			data[input.placeholder] = input.value || '';
		}
		//Checkbox
		else if (input.type === 'checkbox') {
			data[input.dataset.linkId] = data[input.dataset.linkId] || (input.dataset.linkId && input.checked) || '';
			//Thêm các item vào dataQuickLinks để sử dụng cho việc xét các check và hiển thị
			dataQuickLinks.push([input.dataset.linkId, data[input.dataset.linkId]]);
		}
		//Set local storage
		localStorage.setItem('dataQuickLinks', JSON.stringify(dataQuickLinks));
		return data;
	}, {});
	//Lấy tất cả các thẻ li của ul QuickLink hiện trên nav bar
	//Sau mỗi lần xét và hiển thị đúng item Quicklinks => Xóa mảng để mảng chỉ chứa đúng số lượng item ban đầu
	dataQuickLinks = [];
	console.log('2');
})
//Change
document.querySelector('#settings-panel').addEventListener('change', () => {
	//Get new local storage
	getLocalStorageQuickLinks = JSON.parse(localStorage.getItem('dataQuickLinks'));
	//Xử lý
	getTrueQuickLinks(getLocalStorageQuickLinks, trueChecked);
});

//Hàm kiểm tra và hiển thị các item được check theo giá trị id
function getTrueQuickLinks(data, trueCheck) {
	//Duyệt qua tất cả các thẻ li của ul Quicklinks
	for (let i = 0; i < trueCheck.length; i++) {

		//Không được check và hai id trùng nhau thì ẩn
		if ((!data[i][1]) && ((data[i][0]) == trueCheck[i].id)) {
			trueCheck[i].style.display = "none";
		}
		//Ngược lại thì hiện
		else trueCheck[i].style.display = "block";
	}

}




// obj = {};
// if(obj && obj.noexist && obj.noexist.method());// Gọi an toàn
// noexist: Không tồn tại

// Asynchronous programming in JS is all about callbacks : Bất đồng bộ trong JS
