
function currency(num) {

    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
/*ADMIN*/
function hello(){
    var user = JSON.parse(localStorage.getItem('userlogin'));
    document.getElementById('hello').innerHTML= user.fullname + '<button onclick="logout()">Đăng xuất</button>';
}
function logout(){
    localStorage.removeItem('userlogin');
    localStorage.removeItem('cart');
    location.href='../index.html';
}
// function showProductList(vitri){
//     var productArray = JSON.parse(localStorage.getItem('product'));
//     var s='<tr><th>#ID</th><th>Ảnh</th><th>TÊN SẢN PHẨM</th><th>THƯƠNG HIỆU</th><th>GIÁ</th><th></th></tr>';
//     var dem = 0;
//     for(var i=vitri;i<productArray.length;i++){
//         s+='<tr>'+
//             '<td>'+productArray[i].productId+'</td>'+
//             '<td><img src="../'+productArray[i].img+'"></td>'+
//             '<td>'+productArray[i].name+'</td>'+
//             '<td>'+productArray[i].brand.toUpperCase()+'</td>'+
//             '<td>'+currency(productArray[i].price)+'</td>'+
//             '<td>'+
//             '<button class="delete" onClick="deleteproduct(\''+productArray[i].productId+'\')">&times;</div>'+
//             '<button class="change" onClick="showchangeproductbox(\''+productArray[i].productId+'\')">Sửa</div>'+
//             '</td>'+
//             '</tr>';
//         dem++;
//         if(dem==10){
//             break;
//         }
//     }
//     document.getElementById('productlist').innerHTML=s;
//     setPagination();
// }
function changeimg(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('imgafter').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}
function changeimgadd(input){
    var reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('imgadd').src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
}
function closechangebox(){

    document.getElementById('modal1').style.display = 'none';
}
function addProduct(){
    var productArray = JSON.parse(localStorage.getItem('product'));
    var productid = productArray[0].productId+1;
    var productname = document.getElementById('productname');
    var brand = document.getElementById('brand');
    var price = document.getElementById('productprice');
    if(!brand.value || !productname.value || !price.value){
        customAlert('Bạn chưa nhập đủ thông tin sản phẩm','warning');
        return false;
    }
    if(isNaN(Number(price.value))){
        customAlert('Giá không hợp lệ','warning');
        return false;
    }
    var producttemp = {productId: productid, brand: brand.value, img:'images/product/temp.jpg', name: productname.value, price: price.value};
    productArray.unshift(producttemp);
    localStorage.setItem('product',JSON.stringify(productArray));
    showProductList(0);
    customAlert('Thêm sản phẩm thành công','success');
}


const primaryColor = '#4834d4'
const warningColor = '#f0932b'
const successColor = '#6ab04c'
const dangerColor = '#eb4d4b'

const themeCookieName = 'theme'
const themeDark = 'dark'
const themeLight = 'light'

const body = document.getElementsByTagName('body')[0]

function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires="+d.toUTCString()
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

function getCookie(cname) {
    var name = cname + "="
    var ca = document.cookie.split(';')
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

loadTheme()

function loadTheme() {
    var theme = getCookie(themeCookieName)
    body.classList.add(theme === "" ? themeLight : theme)
}

function switchTheme() {
    if (body.classList.contains(themeLight)) {
        body.classList.remove(themeLight)
        body.classList.add(themeDark)
        setCookie(themeCookieName, themeDark)
    } else {
        body.classList.remove(themeDark)
        body.classList.add(themeLight)
        setCookie(themeCookieName, themeLight)
    }
}

function collapseSidebar() {
    body.classList.toggle('sidebar-expand')
}

window.onclick = function(event) {
    openCloseDropdown(event)
}

function closeAllDropdown() {
    var dropdowns = document.getElementsByClassName('dropdown-expand')
    for (var i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('dropdown-expand')
    }
}

function openCloseDropdown(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        //
        // Close dropdown when click out of dropdown menu
        //
        closeAllDropdown()
    } else {
        var toggle = event.target.dataset.toggle
        var content = document.getElementById(toggle)
        if (content.classList.contains('dropdown-expand')) {
            closeAllDropdown()
        } else {
            closeAllDropdown()
            content.classList.add('dropdown-expand')
        }
    }
}

var ctx = document.getElementById('myChart')
ctx.height = 500
ctx.width = 500
var data = {
    labels: ['January', 'February', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        fill: false,
        label: '2023',
        borderColor: successColor,
        data: [120, 115, 130, 100, 123, 88, 99, 66, 120, 52, 59],
        borderWidth: 2,
        lineTension: 0,
    }, {
        fill: false,
        label: '2022',
        borderColor: dangerColor,
        data: [66, 44, 12, 48, 99, 56, 78, 23, 100, 22, 47],
        borderWidth: 2,
        lineTension: 0,
    }]
}

var lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        maintainAspectRatio: false,
        bezierCurve: false,
    }
})