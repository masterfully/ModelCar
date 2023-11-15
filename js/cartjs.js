function addToCart(productid1){
	var quantity=document.getElementById('quantity_number');
	var productArray=JSON.parse(localStorage.getItem('product'));
	var producttmp;
	for (var i=0; i<productArray.length;i++) {
		if(productArray[i].productID==productid1) {
			producttmp=productArray[i];
		}
	}

	var cartArray = JSON.parse(localStorage.getItem('cart'));
	if(cartArray==null){
		var cartArray = [];
		producttmp.quantity=quantity.value;
		producttmp.totalPrice=quantity.value*producttmp.price;
		cartArray.unshift(producttmp);
		localStorage.setItem('cart',JSON.stringify(cartArray));
	} else {
		producttmp.quantity=quantity.value;
		producttmp.totalPrice=quantity.value*producttmp.price;
		cartArray.unshift(producttmp);
		localStorage.setItem('cart',JSON.stringify(cartArray));
	}
	closeProductInfo();
}


function showCartTable(){
	if (localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		var s='<tr><th>Không có sản phẩm nào trong giỏ hàng</th></tr>';
		document.getElementById('carttable').innerHTML=s;
		document.getElementById('totalPrice').innerHTML=0;
	}else {
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		var s='<tr><th></th><th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th></th></tr>';
		var totalprice=0;
		for (var i = 0; i < cartArray.length; i++){
			s+=`<tr>
					<td><img src="../images/product/${cartArray[i].productIMG}"></td>
					<td><div>${cartArray[i].productName}</div></td>
					<td>${cartArray[i].price}</td>
					<td>
					<button onclick="decreaseQuantity('${cartArray[i].productID}')">-</button>
					<input id="quantity" type="text" value="${cartArray[i].quantity}" onchange="updateCart('${cartArray[i].productID}')">
					<button onclick="increaseQuantity('${cartArray[i].productID}')">+</button>
					</td>
					<td>${cartArray[i].price*cartArray[i].quantity}</td>
					<td><button onclick="deleteCart_Item('${cartArray[i].productID}')">&times;</buttom></td>
				</tr>`;
			totalprice+=cartArray[i].price*cartArray[i].quantity;
		}
		document.getElementById('carttable').innerHTML=s;
		document.getElementById('totalPrice').innerHTML=totalprice;
	}	
}

function deleteCart_Item(id){
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productID==id){
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

function updateCart(id){
	var quantity=document.getElementById('quantity');
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productID==id){
			cartArray[i].quantity=quantity.value;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}

function increaseQuantity(id){
	var cartArray=JSON.parse(localStorage.getItem('cart'));
	for(var i=0; i<cartArray.length; i++){
		if(cartArray[i].productID==id){
			cartArray[i].quantity++;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}

function decreaseQuantity(id){
	var cartArray=JSON.parse(localStorage.getItem('cart'));
	for(var i=0; i<cartArray.length; i++){
		if(cartArray[i].productID==id){
			if(cartArray[i].quantity>1){
				cartArray[i].quantity--;			
			}
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartTable();
}

function Buy(){
	if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
		// warning('Giỏ hàng trống');
		return false;
	}
	if(localStorage.getItem('userlogin')===null){
		// warning('Đăng nhập để mua hàng');
		showform();
		return false;
	}
	var cartArray=JSON.parse(localStorage.getItem('cart'));
	var info='';
	var totalprice=0;
	for(var i=0; i<cartArray.length; i++){
		info += '"'+cartArray[i].productName + '*' + cartArray[i].quantity+'" ; ';
		totalprice += cartArray[i].quantity*cartArray[i].price;
	}
	var user=JSON.parse(localStorage.getItem('userlogin'));
	const time=new Date();
	var date=String(time.getDate())+'-'+String(time.getMonth()+1)+'-'+String(time.getFullYear());
	billArray=JSON.parse(localStorage.getItem('bill'));
	if(billArray===null){
		var billArray=[];
		var bill={ID: billArray.length, Info: info, Totalprice: totalprice, Costumer: user.username, Date: date, Status: 'unprocessed'};
		billArray.unshift(bill);
	}
	else{
		var bill={ID: billArray.length, Info: info, Totalprice: totalprice, Costumer: user.username, Date: date, Status: 'unprocessed'};
		billArray.unshift(bill);
		
	}
	localStorage.setItem('bill',JSON.stringify(billArray));
	localStorage.removeItem('cart');
	showCartTable();
	showBill();
}

function showBill(){
	if(localStorage.getItem('bill'===null)){
		document.getElementById('bill').style.display='none';
	}
	else{
		var user=JSON.parse(localStorage.getItem('userlogin'));
		var billArray=JSON.parse(localStorage.getItem('bill'));
		if(billArray!=null){
			var s='<h2>Đơn hàng đã đặt</h2>';
			for(var i=0; i<billArray.length; i++){
				if(user.username===billArray[i].Costumer){
					document.getElementById('bill').style.display='block';
					s+='<div class="billcontent">'+
					'<div>'+billArray[i].Info+'</div>'+
					'<div>'+billArray[i].Totalprice+'</div>'+
					'<div>'+billArray[i].Date+'</div>'+
					'<div>'+billArray[i].Status+'</div>'+
					'<div><button onclick="deleteBill('+billArray[i].ID+')">X</button></div>'+
					'</div>';
				}
			}
		}
		document.getElementById('bill').innerHTML=s;
	}
}


function deleteBill(id){
	var billArray=JSON.parse(localStorage.getItem('bill'));
	for(var i=0; i<billArray.length;i++){
		if(billArray[i].ID==id){
			billArray.splice(i, 1);
			break;
		}
	}
	localStorage.setItem('bill',JSON.stringify(billArray));
	showBill();
}