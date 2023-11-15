
let product = { productID: "", productName: "", productIMG: "", price: "", type: "" };

var productArray = [
    { productID: "P0001", productName: "Bburago F1 Ferrari F1-75 #16 (Charles Leclerc) 2022 Formula 1 Model Car 1/43", productIMG: "ferrari/P0001.png", brand: "Ferrari", price: "11.99", type: "featured" },
    { productID: "P0002", productName: "Bburago Ferrari Race & Play F8 Tributo 1/43 B18-36054", productIMG: "ferrari/P0002.png", brand: "Ferrari", price: "6.50", type: "featured" },
    { productID: "P0003", productName: "Bburago Scuderia F1 Ferrari 2022 - SF21 #16 (Charles Leclerc) 2022 Model Car 1/43", productIMG: "ferrari/P0003.png", brand: "Ferrari", price: "11.99", type: "featured" },
    { productID: "P0004", productName: "Maisto Ferrari Enzo Kit 1/24", productIMG: "ferrari/P0004.png", brand: "Ferrari", price: "22.00", type: "featured" },
    { productID: "P0005", productName: "Bburago Ferrari Race And Play Monza Sp-1 1/43 Toy Car", productIMG: "ferrari/P0005.png", brand: "Ferrari", price: "7.95", type: "featured" },
    { productID: "P0006", productName: "Maisto Premium RC F1 Ferrari SF90 2019 Season Leclerc 1/24", productIMG: "ferrari/P0006.png", brand: "Ferrari", price: "35.00", type: "featured" },
    { productID: "P0007", productName: "Bburago Ferrari Racing 488 Challenge (Formula Ferrari Racing 2017) 1/24 Model Car", productIMG: "ferrari/P0007.png", brand: "Ferrari", price: "25.00", type: "featured" },
    { productID: "P0008", productName: "Bburago Ferrari Race & Play F12 Tdf 1/24", productIMG: "ferrari/P0008.png", brand: "Ferrari", price: "20.00", type: "featured" },
    { productID: "P0009", productName: "Bburago Ferrari Signature SF90 Stradale 1/18 Model Car ", productIMG: "ferrari/P0009.png", brand: "Ferrari", price: "81.99", type: "featured" },
    { productID: "P0010", productName: "Bburago Ferrari Race & Play 488 GTB 1/24 Model Car", productIMG: "ferrari/P0010.png", brand: "Ferrari", price: "22.00", type: "featured" },
    { productID: "P0011", productName: "Bburago Ferrari Race & Play Laferrari 1/24", productIMG: "ferrari/P0011.png", brand: "Ferrari", price: "20.00", type: "featured" },
    { productID: "P0012", productName: "Bburago Ferrari Race And Play 488 Pista 1/24 Model Car ", productIMG: "ferrari/P0012.png", brand: "Ferrari", price: "22.00", type: "featured" },


    // TOYOTAAAAAAAA
    { productID: "P0013", productName: "Solido 1993 Toyota Supra Mk.4 (A80) - Renaissance Red Car Model 1/18", productIMG: "toyota/P0013.png", brand: "Toyota", price: "49.00", type: "new" },
    { productID: "P0014", productName: "CULT Toyota Landcruiser FJ40 Yellow 1977 1/18", productIMG: "toyota/P0014.png", brand: "Toyota", price: "128.29", type: "new" },
    { productID: "P0015", productName: "Solido 2023 Toyota GR Supra Streetfighter - Prominance Red Car Model 1/8", productIMG: "toyota/P0015.png", brand: "Toyota", price: "60.00", type: "new" },
    { productID: "P0016", productName: "Maisto Toyota Supra GR Red 1/24 Scale Model Car", productIMG: "toyota/P0016.png", brand: "Toyota", price: "20.00", type: "new" },
    { productID: "P0017", productName: "Ixo Toyota Yaris Pandem White 1/43 Diecast Scale Model Car", productIMG: "toyota/P0017.png", brand: "Toyota", price: "39.00", type: "new" },
    { productID: "P0018", productName: "Maisto Toyota Tacoma Pick-Up 2.4GHZ 1/16", productIMG: "toyota/P0018.png", brand: "Toyota", price: "33.00", type: "new" },
    { productID: "P0019", productName: "AutoArt Toyota Century Open Black DieCast Car Model 1/18", productIMG: "toyota/P0019.png", brand: "Toyota", price: "300.00", type: "new" },
    { productID: "P0020", productName: "AutoArt 2018 Toyota Century (Black) Composite Model 1/18", productIMG: "toyota/P0020.png", brand: "Toyota", price: "330.00", type: "new" },
    { productID: "P0021", productName: "AutoArt Toyota Celica Liftback 2000GT (RA25) 1973 (Turquoise Blue Metallic) 1/18", productIMG: "toyota/P0021.png", brand: "Toyota", price: "260.00", type: "new" },
    { productID: "P0022", productName: "Maisto RWB Toyota Sprinter Trueno AE86 White/Black 1/24", productIMG: "toyota/P0022.png", brand: "Toyota", price: "330.00", type: "new" },
    { productID: "P0023", productName: "IXO Toyota Celica Turbo 4WD (ST185) #1 Safari Rally 1993", productIMG: "toyota/P0023.png", brand: "Toyota", price: "29.00", type: "new" },
    { productID: "P0024", productName: "IXO Toyota Yaris WRC #69 Rally Ypres 2021 K.Rovanpera/J.Halttunen 1/43", productIMG: "toyota/P0024.png", brand: "Toyota", price: "39.00", type: "new" },


    //LAMBORGHINI----------------------------------------------------------------
    { productID: "P0025", productName: "Bburago Lamborghini Aventador Toy Car 1/64", productIMG: "lamborghini/P0025.png", brand: "Lamborghini", price: "3.00", type: "" },
    { productID: "P0026", productName: "Bburago Lamborghini Sian FKP 37 Red 1/24", productIMG: "lamborghini/P0026.png", brand: "Lamborghini", price: "13.00", type: "" },
    { productID: "P0027", productName: "Bburago Lamborghini Centenario Toy Car 1/64", productIMG: "lamborghini/P0027.png", brand: "Lamborghini", price: "6.00", type: "" },
    { productID: "P0028", productName: "Bburago Lamborghini Centenario Toy Car 1/43", productIMG: "lamborghini/P0028.png", brand: "Lamborghini", price: "18.00", type: "" },
    { productID: "P0029", productName: "Bburago Lamborghini Countach Lpi 800-4 1/24 Model Car", productIMG: "lamborghini/P0029.png", brand: "Lamborghini", price: "17.00", type: "" },
    { productID: "P0030", productName: "Bburago Lamborghini Huracan Performante 1/24 Model Car", productIMG: "lamborghini/P0030.png", brand: "Lamborghini", price: "17.00", type: "" },
    { productID: "P0031", productName: "Maisto Lamborghini Aventador Lp 700-4 Roadster Model Car Kit 1/24", productIMG: "lamborghini/P0031.png", brand: "Lamborghini", price: "21.00", type: "" },
    { productID: "P0032", productName: "Maisto Lamborghini Urus Model Car 1/24", productIMG: "lamborghini/P0032.png", brand: "Lamborghini", price: "18.00", type: "" },
    { productID: "P0033", productName: "Bburago Lamborghini Sian FKP 37 Green 1/24 Model Car", productIMG: "lamborghini/P0033.png", brand: "Lamborghini", price: "17.00", type: "" },
    { productID: "P0034", productName: "Bburago Lamborghini Terzo Millenio 1/24 Model Car", productIMG: "lamborghini/P0034.png", brand: "Lamborghini", price: "16.00", type: "" },
    { productID: "P0035", productName: "Maisto Lamborghini Aventador LP700-4 Assorted Colours Model Car 1/24", productIMG: "lamborghini/P0035.png", brand: "Lamborghini", price: "17.00", type: "" },
    { productID: "P0036", productName: "Maisto RC Racing Lamborghini Centenario 1/14", productIMG: "lamborghini/P0036.png", brand: "Lamborghini", price: "36.00", type: "" },



    // MC Laren----------------------------------------------------------------
    { productID: "P0037", productName: "AutoArt 2017 McLaren 720S (paris blue/metallic blue) 1/18", productIMG: "mclaren/P0037.png", brand: "McLaren", price: "360.00", type: "" },
    { productID: "P0038", productName: "AutoArt 2018 McLaren Senna (trophy kyanos/blue) (composite model) 1/18", productIMG: "mclaren/P0038.png", brand: "McLaren", price: "390.00", type: "" },
    { productID: "P0039", productName: "AutoArt 2019 McLaren 720S GT3 #03 1/18", productIMG: "mclaren/P0039.png", brand: "McLaren", price: "190.00", type: "" },
    { productID: "P0040", productName: "AutoArt McLaren 720S GT3 1/18 Model Car", productIMG: "mclaren/P0040.png", brand: "McLaren", price: "150.00", type: "" },
    { productID: "P0041", productName: "Solido McLaren 600LT Green 2018 1/18 Scale Model", productIMG: "mclaren/P0041.png", brand: "McLaren", price: "90.00", type: "" },
    { productID: "P0042", productName: "Solido McLaren F1 GTR Short Tail #39 - 1996 24H Le Mans Car Model 1/18", productIMG: "mclaren/P0042.png", brand: "McLaren", price: "52.00", type: "" },
    { productID: "P0043", productName: "AutoArt 2018 McLaren Senna (vision victory/grey)(composite model) 1/18", productIMG: "mclaren/P0043.png", brand: "McLaren", price: "55.00", type: "" },
    { productID: "P0044", productName: "AutoArt McLaren P1 GTR (Dark Grey Metallic/Orange Accents) 1/18", productIMG: "mclaren/P0044.png", brand: "McLaren", price: "252.00", type: "" },
    { productID: "P0045", productName: "Minichamps McLaren F1 Team MCL35M - Lando Norris Bahrain GP 2022 1/43", productIMG: "mclaren/P0045.png", brand: "McLaren", price: "72.00", type: "" },
    { productID: "P0046", productName: "Solido McLaren 765 LT Orange 2020 Car Model 1/43", productIMG: "mclaren/P0046.png", brand: "McLaren", price: "52.00", type: "" },
    { productID: "P0047", productName: "Spark Models Mercedes McLaren - F1 MCL35L M12 EQ Power+ P3 Abu Dhabi GP 2021 Daniel Ricciardo 1/43", productIMG: "mclaren/P0047.png", brand: "McLaren", price: "22.00", type: "" },
    { productID: "P0048", productName: "AutoArt 2019 McLaren 600LT (fistral blue) 1/18 Model Car", productIMG: "mclaren/P0048.png", brand: "McLaren", price: "172.00", type: "" },
    { productID: "P0061", productName: "AutoArt 2019 McLaren 600LT (fistral blue) 1/18 Model Car", productIMG: "mclaren/P0061.png", brand: "McLaren", price: "240.00", type: "" },
    { productID: "P0062", productName: "AutoArt 2019 McLaren 600LT (myan orange) Model Car (composite) 1/18", productIMG: "mclaren/P0062.png", brand: "McLaren", price: "222.00", type: "" },
    { productID: "P0063", productName: "AutoArt Mclaren P1 (fire black w/red/black interior) 1/18", productIMG: "mclaren/P0063.png", brand: "McLaren", price: "172.00", type: "" },
    { productID: "P0064", productName: "AutoArt 2019 McLaren 600LT (fistral blue) 1/18 Model Car", productIMG: "mclaren/P0064.png", brand: "McLaren", price: "172.00", type: "" },

    // porsche--------------------------------
    { productID: "P0049", productName: "Maisto Porsche 911 GT2 RS Special Edition 1/24", productIMG: "porsche/P0049.png", brand: "Porsche", price: "72.00", type: "bestselling" },
    { productID: "P0050", productName: "Bburago Porsche 918 Spyder 1/24 Model Car", productIMG: "porsche/P0050.png", brand: "Porsche", price: "12.00", type: "bestselling" },
    { productID: "P0051", productName: "Bburago Porsche 911 Rsr Lemans Model Car 1/43", productIMG: "porsche/P0051.png", brand: "Porsche", price: "15.00", type: "bestselling" },
    { productID: "P0052", productName: "Bburago Porsche 911 Carrera S 1/24 Model Car", productIMG: "porsche/P0052.png", brand: "Porsche", price: "18.00", type: "bestselling" },
    { productID: "P0053", productName: "Bburago Porsche 911 RSR GT 1/24 Model Car ", productIMG: "porsche/P0053.png", brand: "Porsche", price: "72.00", type: "bestselling" },
    { productID: "P0054", productName: "Bburago Porsche Macan 1/24 Model Car", productIMG: "porsche/P0054.png", brand: "Porsche", price: "16.00", type: "bestselling" },
    { productID: "P0055", productName: "Bburago Porsche 918 Spyder 1/24 Model Car", productIMG: "porsche/P0055.png", brand: "Porsche", price: "17.00", type: "bestselling" },
    { productID: "P0056", productName: "Bburago Porsche GT3 RS 4.0 Model Car1/18", productIMG: "porsche/P0056.png", brand: "Porsche", price: "45.00", type: "bestselling" },
    { productID: "P0057", productName: "Bburago Porsche Taycan Dark Blue 1/24 Model Car", productIMG: "porsche/P0057.png", brand: "Porsche", price: "16.00", type: "bestselling" },
    { productID: "P0058", productName: "Maisto Premium Remote Controlled Porsche Taycan 2.4ghz 1/24", productIMG: "porsche/P0058.png", brand: "Porsche", price: "22.00", type: "bestselling" },
    { productID: "P0059", productName: "Solido Porsche 992 GT3 - Python Green 2021 1/43", productIMG: "porsche/P0059.png", brand: "Porsche", price: "29.00", type: "bestselling" },
    { productID: "P0060", productName: "IXO Porsche 919 Hybrid #1 24h Le Mans 2017 Jani/Tandy/Lotterer 1/18", productIMG: "porsche/P0060.png", brand: "Porsche", price: "72.00", type: "bestselling" },
];
localStorage.setItem('product', JSON.stringify(productArray));


const specialButton = document.querySelectorAll('.specialProducts .specialProducts-tabs li a');
console.log(specialButton);
specialButton.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.clicked')?.classList.remove('clicked');
        btn.classList.add('clicked');
    });
});












function getIndex(productID) {
    productID = String(productID);
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].productID == productID) {
            return i;
        }
    }
}

function closeProductInfo() {
    document.getElementById("productInfor-container").style.display = "none";
}

function showProductInfo(productID) {
    productID = String(productID);
    var i = getIndex(productID)
    var str2 = "";
    str2 += `<div id="productInfor">
                            <div class="image-container">
                                <img src="./images/product/${productArray[i].productIMG}" class="product-img">
                            </div>
                            <div class="close-button" onclick="closeProductInfo()">
                                <p>+</p>
                            </div>
                            <div class="infor-container">
                                <h2 class="product-title">${productArray[i].productName}</h2>
                                </h2>
                                <h4 class="product-price">Price: ${productArray[i].price}</h4>
                                <h4 class="quantity">quantity</h4>
                                <button class="quantity-decrease">-</button>
                                <input type="text" value="1" class="quantity-number">
                                <button class="quantity-increase">+</button>
                                <button class="addtocart" >Add to cart</button>
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
                            <p class="product-price">£${productArray[i].price}</p>
                        </div>
                </li >`;
        }
        document.querySelector(".specialProducts-list").innerHTML = str;
    }
    const specialButton = document.querySelectorAll('#onload');
    specialButton.forEach(btn => {
        document.querySelector('.clicked')?.classList.remove('clicked');
        btn.classList.add('clicked');
    });
}






function showBrandProducts(Pbrand) {
    document.getElementById("closeNav").style.display = "none";
    document.getElementById("specialProducts").style.borderBottom = "0px";
    document.getElementById("banner").style.display = "none";
    Pbrand = Pbrand.toLowerCase();
    var str = "";
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].brand.toLowerCase() == Pbrand) {
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
                            <p class="product-price">£${productArray[i].price}</p>
                        </div>
                </li >`;
        }
        document.querySelector(".specialProducts-list").innerHTML = str;
    }
}
const navButton = document.querySelectorAll('#navmenu li a');
console.log(navButton);
navButton.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.navBtn-click')?.classList.remove('navBtn-click');
        btn.classList.add('navBtn-click');
    });
});