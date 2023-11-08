
let product = { productID: "", productName: "", productIMG: "", price: "", type: "" };

var productArray = [
    { productID: "P0001", productName: "Bburago F1 Ferrari F1-75 #16 (Charles Leclerc) 2022 Formula 1 Model Car 1/43", productIMG: "ferrari/P0001.png", brand: "Ferrari", price: "£11.99", type: "featured" },
    { productID: "P0002", productName: "Bburago Ferrari Race & Play F8 Tributo 1/43 B18-36054", productIMG: "ferrari/P0002.png", brand: "Ferrari", price: "£6.50", type: "featured" },
    { productID: "P0003", productName: "Bburago Scuderia F1 Ferrari 2022 - SF21 #16 (Charles Leclerc) 2022 Model Car 1/43", productIMG: "ferrari/P0003.png", brand: "Ferrari", price: "£11.99", type: "featured" },
    { productID: "P0004", productName: "Maisto Ferrari Enzo Kit 1/24", productIMG: "ferrari/P0004.png", brand: "Ferrari", price: "£22.00", type: "featured" },
    { productID: "P0005", productName: "Bburago Ferrari Race And Play Monza Sp-1 1/43 Toy Car", productIMG: "ferrari/P0005.png", brand: "Ferrari", price: "£7.95", type: "featured" },
    { productID: "P0006", productName: "Maisto Premium RC F1 Ferrari SF90 2019 Season Leclerc 1/24", productIMG: "ferrari/P0006.png", brand: "Ferrari", price: "£35.00", type: "featured" },
    { productID: "P0007", productName: "Bburago Ferrari Racing 488 Challenge (Formula Ferrari Racing 2017) 1/24 Model Car", productIMG: "ferrari/P0007.png", brand: "Ferrari", price: "£25.00", type: "featured" },
    { productID: "P0008", productName: "Bburago Ferrari Race & Play F12 Tdf 1/24", productIMG: "ferrari/P0008.png", brand: "Ferrari", price: "£20.00", type: "featured" },
    { productID: "P0009", productName: "Bburago Ferrari Signature SF90 Stradale 1/18 Model Car ", productIMG: "ferrari/P0009.png", brand: "Ferrari", price: "£81.99", type: "featured" },
    { productID: "P0010", productName: "Bburago Ferrari Race & Play 488 GTB 1/24 Model Car", productIMG: "ferrari/P0010.png", brand: "Ferrari", price: "£22.00", type: "featured" },
    { productID: "P0011", productName: "Bburago Ferrari Race & Play Laferrari 1/24", productIMG: "ferrari/P0011.png", brand: "Ferrari", price: "£20.00", type: "featured" },
    { productID: "P0012", productName: "Bburago Ferrari Race And Play 488 Pista 1/24 Model Car ", productIMG: "ferrari/P0012.png", brand: "Ferrari", price: "£22.00", type: "featured" },
    { productID: "P0006", productName: "Maisto Premium RC F1 Ferrari SF90 2019 Season Leclerc 1/24", productIMG: "ferrari/P0006.png", brand: "Ferrari", price: "£35.00", type: "featured" },

];
localStorage.setItem('product', JSON.stringify(productArray));







function getIndex(productID) {
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].productID == productID) {
            return i;
        }
    }
}

function closeProductInfo() {
    document.getElementById("productInfor-container").style.display = "none";
}



function quantity_inc(){
    document.getElementById('quantity_value').value++;
}
function quantity_dec(){
    if(document.getElementById('quantity_value').value>1)
        document.getElementById('quantity_value').value--;
}


function showProductInfo(productID) {
    var i = getIndex(productID)
    var str2 = "";
    str2 += `<div id="productInfor">
                            <div class="image-container">
                                <img src="../images/product/${productArray[i].productIMG}" class="product-img">
                            </div>
                            <div class="close-button" onclick="closeProductInfo()">
                                <p>+</p>
                            </div>
                            <div class="infor-container">
                                <h2 class="product-title">${productArray[i].productName}</h2>
                                </h2>
                                <h4 class="product-price">Price: ${productArray[i].price}</h4>
                                <h4 class="quantity">quantity</h4>
                                <button class="quantity-decrease" onclick="quantity_dec()">-</button>
                                <input type="text" value="1" class="quantity-number" id="quantity_number">
                                <button class="quantity-increase" onclick="quantity_inc()">+</button>
                                <button class="addtocart" onclick="addToCart('${productArray[i].productID}')">Add to cart</button>
                            </div>
                        </div>`;
    document.querySelector(".productInfor-container").innerHTML = str2;
    document.getElementById("productInfor-container").style.display = "block";
}

function showSpecialProducts(productType) {
    var str = "";
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].type == productType) {
            str += `<li class= "product" id="${productArray[i].productID}" onclick="showProductInfo('${productArray[i].productID}')">
                            <div class="product-img-container">
                                <img src="./images/product/${productArray[i].productIMG}" alt="" class="product-img">
                                <div class="product-botton" >
                                    <div class="icon"><ion-icon name="cart"></ion-icon></div>
                                    <div class="view-botton">view</div>
                                </div>
                            </div>
                        </a>
                        <div class="product-infor">
                            <h4 class="product-title"><a href="">
                                ${productArray[i].productName}
                                </a>
                            </h4>
                            <p class="product-brand">${productArray[i].brand}</p>
                            <p class="product-price">${productArray[i].price}</p>
                        </div>
                </li >`;

        }
        document.querySelector(".specialProducts-list").innerHTML = str;
    }
}

function addToCart(productid1){
	var quantity=document.getElementById('quantity_number');
	var productArr=JSON.parse(localStorage.getItem('product'));
	var producttmp={ productID: "", productName: "", productIMG: "", price: "", type: "" ,quantity: "", totalPrice: ""};
	for (var i=0; i<productArr.length;i++) {
		if(productArr[i].productID==productid1) {
			producttmp.productID=productArr[i].productID;
            producttmp.productName=productArr[i].productName;
            producttmp.productIMG=productArr[i].price;
            producttmp.type=productArr[i].type;
            producttmp.quantity=quantity.value;
	    	producttmp.totalPrice=quantity.value*producttmp.price;
		}
	}

	if(localStorage.getItem('cart'===null)) {
		var cartArray = [];
		cartArray.push(producttmp);
		localStorage.setItem('cart',JSON.stringify(cartArray));
	} else {
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		cartArray.push(producttmp);
		localStorage.setItem('cart',JSON.stringify(cartArray));
	}
	closeProductInfo();
}


function showCartTable(){
	if (localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		var s='<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';
		document.getElementById('carttable').innerHTML=s;
		document.getElementById('totalprice').innerHTML=0;
	}else {
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		var s='<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';
		var totalprice=0;
		for (var i = 0; i < cartArray.length; i++){
			s+=  '<tr>'+
					'<td><img src="../'+cartArray[i].productIMG+'"></td>'+
					'<td><div>'+cartArray[i].productName+'</div></td>'+
					'<td>'+currency(cartArray[i].price)+'</td>'+
					'<td>'+
						'<button onClick="increaseQuantity('+cartArray[i].productID+')">-</button>'+
						'<input id="quantity" type="text" disabled value="'+cartArray[i].quantity+'" onchange="updateCart(this.value,'+cartArray[i].productID+')">'+
						'<button onClick="decreaseQuantity('+cartArray[i].productID+')">+</button>'+
					'</td>'+
					'<td>'+currency(cartArray[i].price*cartArray[i].quantity)+'</td>'+
					'<td><button onClick="deletecartitem('+cartArray[i].productID+')">&times;</buttom></td>'+
				'</tr>';
			totalprice+=cartArray[i].price*cartArray[i].quantity;
		}
		document.getElementById('carttable').innerHTML=s;
		document.getElementById('totalprice').innerHTML=currency(totalprice);
	}	
}

function deleteCart_Item(deleteID){
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productID==deleteID){
			cartArray.splice(i, 1);
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}

function deleteCart(){
	localStorage.removeItem('cart');
	showCartTable();
}

function updateCart(quantity,productId){
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productID==productid){
			cartArray[i].quantity=quantity;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}

function increaseQuantity(productid){
	var cartArray=JSON.parse(localStorage.getItem('cart'));
	for(var i=0; i<cartArray.length; i++){
		if(cartArray.productID==productid){
			cartArray.quantity++;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}

function decreaseQuantity(productid){
	var cartArray=JSON.parse(localStorage.getItem('cart'));
	for(var i=0; i<cartArray.length; i++){
		if(cartArray.productID==productid){
			if(cartArray.quantity==1){
				deleteCart_Item(productid);
			}
			else{
				cartArray.quantity--;
			}
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}

function Buy(){
	if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		warning('Giỏ hàng trống');
		return false;
	}
	if(localStorage.getItem('userlogin')===null){
		warning('Đăng nhập để mua hàng');
		return false;
	}
	var cartArray=JSON.parse(localStorage.getItem('cart'));
	var info='';
	var totalprice=0;
	for(var i=0; i<cartArray.length; i++){
		info += '"'+cartArray[i].productName + 'X' + cartArray[i].quantity+'" ; ';
		totalprice += cartArray[i].quantity*cartArray[i].price;
	}
	var user=JSON.parse(localStorage.getItem('userlogin'));
	var time=new Date();
	var date=time.getDate+'-'+(time.getMonth+1)+'-'+time.getFullYear;
	if(localStorage.getItem('bill')===null){
		var billArray=[];
		var bill={ID: billArray.length, Info: info, Totalprice: totalprice, Costumer: user, Date: date, Status: 'unprocessed'};
		billArray.unshift(bill);
		localStorage.setItem('bill',JSON.stringify(billArray));
	}
	else{
		billArray=JSON.parse(localStorage.getItem('bill'));
		var bill={ID: billArray.length, Info: info, Totalprice: totalprice, Costumer: user, Date: date, Status: 'unprocessed'};
		billArray.unshift(bill);
		localStorage.setItem('bill',JSON.stringify(billArray));
	}

	localStorage.removeItem('cart');
	showBill();
}

function showBill(){
	if(localStorage.getItem('bill'===null)){
		document.getElementById('bill').style.display='none';
	}
	else{
		var user=JSON.parse(localStorage.getItem('userlogin'));
		var billArray=JSON.parse(localStorage.getItem('bill'));
		var s='<h2>Đơn hàng đã đặt</h2>';
		for(var i=0; i<billArray.length; i++){
			if(user.username===billArray[i].Costumer.username){
				document.getElementById('bill').style.display='block';
				s+='<div class="billcontent">'+
				'<div>'+billArray[i].Info+'</div>'+
				'<div>'+currency(billArray[i].Totalprice)+'</div>'+
				'<div>'+billArray[i].Date+'</div>'+
				'<div>'+billArray[i].Status+'</div>'+
				'</div>'
			}
		}
		s+='<butto class="bill_button" onclick="deleteBill()">Xóa tất cả</button>';
		document.getElementById('bill').innerHTML=s;
	}
}

function deleteBill(){
	var billArray=JSON.parse(localStorage.getItem('bill'));
	for(var i=0;i<billArray;i++){
		if(billArray[i].Status!='unprocessed'){
			billArray[i].splice(i,1);
		}
	}
	localStorage.setItem('bill',JSON.stringify(billArray));
	showBill();
}