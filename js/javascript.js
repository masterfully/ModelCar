createAdmin();
// định dạng số tiền thành VND
function currency(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " VND";
}

// function showMenu() {
//   var menuList = ["TOYOTA", "LAMBORGHINI", "MCLAREN" , "PORSCHE" , "FERRARI"];
//   var ul = document.getElementById("navmenu");
//   var li = '<li class="navBtn"><a  href="index.html">TRANG CHỦ</a></li>';
//   for (var i = 0; i < menuList.length; i++) {
//     li +=
//       `<li class="navBtn" onclick="showBrandProducts('${menuList[i]}')"><a>` +
//       menuList[i] +
//       `</a></li>`;
//     ul.innerHTML = li;
//   }
// }
function showMenuMobile(){
	var btn = document.getElementById("btnmenu");
	if(btn.className==""){
		document.getElementById('btnmenu').classList.add('show');
		document.getElementById('btnmenu').innerHTML = '&times;' ;
		document.getElementById('navmenu').classList.add('active') ;

	}else {
		document.getElementById('btnmenu').classList.remove('show');
		document.getElementById('btnmenu').innerHTML = '&#9776;' ;
		document.getElementById('navmenu').classList.remove('active') ;
	}

}



function createAdmin(){
	if(localStorage.getItem('user')===null){
		var userArray = [];
		var user = {username: 'admin', password: 'admin', fullname: 'ĐÀO PHÚ DUY TÂN', address: '273 An Dương Vương, P3, Quận 5, TPHCM', phone: '0566490523' , datesignup: '23-11-1999'};
		userArray.push(user);
		localStorage.setItem('user',JSON.stringify(userArray));
	}
}
function showform(){
	var userform = document.getElementById('user');
	userform.style.display = 'block';
}
function closeform(){
	var userform = document.getElementById('user');
	userform.style.display = 'none';
}
function showSignUp(){
	document.getElementById('login').style.display = 'none';
	document.getElementById('signup').style.display = 'block';
}
function showLogin(){
	document.getElementById('signup').style.display = 'none';
	document.getElementById('login').style.display = 'block';
}
document.getElementById('signupform').addEventListener('submit', createUser);
document.getElementById('loginform').addEventListener('submit', login);
function createUser(e){
	e.preventDefault();
	var fullname = document.getElementById('fullname');
	var address = document.getElementById('address');
	var phone = document.getElementById('phone');
	var username = document.getElementById('usernameSignUp');
	var password = document.getElementById('passwordSignUp');
	var password2 = document.getElementById('passwordSignUp2');
	var flag = true;
	if(!fullname.value){
		document.getElementById('fullnameerror').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('fullnameerror').style.display = 'none';
	}
	if(!address.value){
		document.getElementById('addresserror').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('addresserror').style.display = 'none';
	}
	if(!phone.value){
		document.getElementById('phoneerror').style.display = 'block';
		flag = false;
	}else{
		if(isNaN(Number(phone.value))){
			document.getElementById('phoneerror').style.display = 'block';
			document.getElementById('phoneerror').innerHTML = 'Số điện thoại không hợp lệ';
			flag = false;
		}else{
			if(Number(phone.value)<100000000 || Number(phone.value)>999999999){
				document.getElementById('phoneerror').style.display = 'block';
				document.getElementById('phoneerror').innerHTML = 'Số điện thoại không đúng';
				flag = false;
			}else{
				document.getElementById('phoneerror').style.display = 'none';
			}
		}
	}
	if(!username.value){
		document.getElementById('usererror').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('usererror').style.display = 'none';
	}
	if(!password.value){
		document.getElementById('passworderror').style.display = 'block';
		flag = false;
	}else{
		if(password.value.length<8){
			document.getElementById('passworderror').style.display = 'block';
			document.getElementById('passworderror').innerHTML = 'Mật khẩu phải trên 8 ký tự';
			flag = false;
		}else {
			document.getElementById('passworderror').style.display = 'none';
		}
	}
	if(password2.value != password.value){
		document.getElementById('password2error').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('password2error').style.display = 'none';
	}
	if(flag==false){
		return false;
	}
	var d = new Date();
	var datesignup = d.getDate()+'-'+(d.getMonth()+1)+'-'+d.getFullYear();
	var user = {username: username.value, password: password.value, fullname: fullname.value, address: address.value, phone: phone.value , datesignup: datesignup};
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(user.username==userArray[i].username){
			document.getElementById('usererror').style.display = 'block';
			document.getElementById('usererror').innerHTML = 'Tên đăng nhập đã có người sử dụng';
			username.focus();
			return false;
		}
	}
	userArray.push(user);
	localStorage.setItem('user',JSON.stringify(userArray));
	customAlert('Bạn đã đăng ký thành công!','success');
	showLogin();
}
function login(e){
	e.preventDefault();
	var username = document.getElementById('usernameLogin').value;
	var password = document.getElementById('passwordLogin').value;
	var flag=true;
	if(!username){
		document.getElementById('usernameerror').style.display = 'block';
		flag = false;
	}else {
		document.getElementById('usernameerror').style.display = 'none';
	}
	if(!password){
		document.getElementById('passwordloginerror').style.display = 'block';
		flag = false;
	}else {
		document.getElementById('passwordloginerror').style.display = 'none';
	}
	if(flag==false){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(username==userArray[i].username){
			if(password==userArray[i].password){
				closeform();
				localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
				window.location.reload(true);
				return true;
			}
		}
	}
	document.getElementById('passwordloginerror').style.display = 'block';
	document.getElementById('passwordloginerror').innerHTML = 'Sai thông tin đăng nhập';
	return false;
}
function logout(url){
	localStorage.removeItem('userlogin');
	localStorage.removeItem('cart');
	location.href=url;
}

function checklogin(){
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.username=='admin'){
			s = '<li><button onClick="window.location.href=\'admin/product.html\'"><img src="images/icon/settings.svg"></button></li>'+
				'<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'file/cart.html\'"></button></li>'+
				'<li><button onClick="showSearch()"></button></li>';
		}else{
			s = '<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'file/cart.html\'"></button></li>'+
				'<li><button onClick="showSearch()"></button></li>';
		}
		document.querySelector('.mid-header .user-menu').innerHTML = s;
	}
}
function checklogin2(){
	if(localStorage.getItem('userlogin')){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.username=='admin'){
			s = '<li><button onClick="window.location.href=\'../admin/product.html\'"><img src="../images/icon/settings.svg"></button></li>'+
				'<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'../file/cart.html\'"><img src="../images/icon/carticon.svg"></button></li>'+
				'<li><button onClick="showSearch()"><img src="../images/icon/searchicon.svg"></button></li>';
		}else{
			s = '<li><button>'+user.fullname+'</button><button id="btnlogout" onClick="logout(\'index.html\')">LOGOUT</button></li>'+
				'<li><button onClick="location.href=\'../file/cart.html\'"><img src="../images/icon/carticon.svg"></button></li>'+
				'<li><button onClick="showSearch()"><img src="../images/icon/searchicon.svg"></button></li>';
		}
		document.querySelector('#nav .topnav ul.right').innerHTML = s;
	}
}

//slide

//banner slideshow begin
var slideIndex=0;
automaticSlideshow();
function automaticSlideshow(){
	var i;
	var slide=document.getElementsByClassName("slideShow");
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display="none";
	}
	slideIndex++;
	if(slideIndex>slide.length) {slideIndex=1}
	slide[slideIndex-1].style.display="block";
	setTimeout(automaticSlideshow,2000);
}
//banner slideshow end




//search
function showSearch(){
	document.getElementById("searchsection").style.display="block";
	document.getElementById("searchtext2").focus();
	document.getElementById("searchtext2").value=document.getElementById("searchtext").value;
  }
  function closeSearch(){
	document.getElementById("searchsection").style.display="none";
	document.getElementById("searchtext").value=document.getElementById("searchtext2").value;
  }
  
	
  var searchArray=[];
  function searching(){
	var searchArray1=[];
	var text=document.getElementById("searchtext2").value.toLowerCase();
	var productArray = JSON.parse(localStorage.getItem("product"));
	var brand=document.getElementById("brand").value.toLowerCase();
	var priceform=document.getElementById("pricefrom").value;
	if(priceform==''){priceform=0}
	var priceto=document.getElementById("priceto").value;
	if(priceto==''){
	  priceto=9999999999;
	}
	for(var i=0; i<productArray.length; i++){
		if((productArray[i].productName.toLowerCase().search(text)>-1
		||productArray[i].productID.toLowerCase().search(text)>-1
		||productArray[i].brand.toLowerCase().search(text)>-1)
		&&compare(brand.toLowerCase(),productArray[i].brand.toLowerCase())
		&&(Number(productArray[i].price)>=Number(priceform) && Number(productArray[i].price)<=Number(priceto))){
		  searchArray1.unshift(productArray[i]);
		}
	}
	searchArray=searchArray1;
	showSearchResult(0);
  }
  
  function compare(brand1, brand2){
	if(brand1=='all'){
	  return true;
	}
	return brand1==brand2;
  }
  
  var numProduct=9;
  
  function showSearchResult(selectPage){
	var result='';
	var numPage=Math.ceil(searchArray.length/numProduct);
	var reSultPage='<ul>';
	for(var i=numProduct*selectPage; i<numProduct*(selectPage+1)&&i<searchArray.length; i++){
	  if(location.pathname=='/ModelCar/index.html'){
		result+=  `<li><div class="card" onclick="showProductInfo('${searchArray[i].productID}')">
					<div class="img-container"><img src="images/product/${searchArray[i].productIMG}"></div>
					<p class="name">${searchArray[i].productName}</p>
					<p class="price"> Giá:${searchArray[i].price}$</p>
					</div>
				  </li>`;
	  } else {
		result+=  `<li><div class="card" onclick="showProductInfo('${searchArray[i].productID}')">
					<div class="img-container"><img src="../images/product/${searchArray[i].productIMG}"></div>
					<p class="name">${searchArray[i].productName}</p>
					<p class="price"> Giá:${searchArray[i].price}$</p>
					</div>
				  </li>`;
	  }
	}
	
	for(var i=0; i<numPage; i++){
	  reSultPage+='<li><button onclick="showSearchResult('+i+')">'+(i+1)+'</button></li>';
	}
	document.getElementById("searchPage").innerHTML=reSultPage;
	document.querySelector("#searchresult ul").innerHTML=result;
  }
  
  