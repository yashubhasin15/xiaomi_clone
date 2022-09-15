// Cart
var cart= document.getElementsByClassName('shopping-basket')[0];
var x = document.getElementsByClassName("cart")[0];
var cartDisplay= document.getElementsByClassName("cartDisplay")[0];
var totalDisplay= document.getElementsByClassName("totalDisplay")[0];
cart.addEventListener('click',()=>{
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
})

let productList = [{
        name:'ASUS VivoBook 15',
        price:34990,
		image:"https://rukminim1.flixcart.com/image/416/416/l44hyfk0/computer/b/d/y/-original-imagf39qmdjgesc9.jpeg?q=70",
        inCart:1
    },
    {
        name:'HP Ryzen 3',
        price:34990,
		image:"https://rukminim1.flixcart.com/image/416/416/ktaeqvk0/computer/b/7/4/15s-gy0501au-thin-and-light-laptop-hp-original-imag6z6muntqnzzc.jpeg?q=70",
        inCart:1
    },
    {
        name:'Noise ColorFit Vision 2',
        price:3999,
		image:"https://rukminim1.flixcart.com/image/416/416/l4pxk7k0/smartwatch/f/v/h/-original-imagfjxzk7x88wyq.jpeg?q=70",
        inCart:1
    },
    {
        name:'APPLE HomePod Mini',
        price:8499,
		image:"https://rukminim1.flixcart.com/image/416/416/l2jcccw0/speaker/l/s/v/-original-imagdv2zqs6b49mp.jpeg?q=70",
        inCart:1
    },
    {
        name:'boAt Aavante Bar',
        price:14999,
		image:"https://rukminim1.flixcart.com/image/416/416/kiqbma80-0/speaker/soundbar/l/l/o/aavante-bar-3100d-boat-original-imafygcgjbcerj7f.jpeg?q=70",
        inCart:1
    },
    {
        name:'APPLE iPad Pro',
        price:85900,
		image:"https://rukminim1.flixcart.com/image/416/416/kolsscw0/tablet/n/r/c/mhwd3hn-a-apple-original-imag3yr5xrqchvrg.jpeg?q=70",
        inCart:1
    },
    {
        name:'Canon EOS 3000D',
        price:31499,
		image:"https://rukminim1.flixcart.com/image/416/416/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70",
        inCart:1
    },
    {
        name:'realme Buds Air 3',
        price:3999,
		image:"https://rukminim1.flixcart.com/image/416/416/l15bxjk0/headphone/h/p/w/rma2105-realme-original-imagcsfvjhsygg6x.jpeg?q=70",
        inCart:1
    },
    {
        name:'OPPO Enco Buds',
        price:1699,
		image:"https://rukminim1.flixcart.com/image/416/416/kura1e80/headphone/4/q/c/eti81-eti82-oppo-original-imag7szsu66kqugv.jpeg?q=70",
        inCart:1
    },
    {
        name:'acer Predator Helios',
        price:150490,
		image:"https://rukminim1.flixcart.com/image/416/416/kh0vonk0/computer/f/j/g/acer-na-gaming-laptop-original-imafx4u9yyzuzffx.jpeg?q=70",
        inCart:1
    },
    {
        name:'SanDisk 512 GB Memory Card',
        price:6399,
		image:"https://rukminim1.flixcart.com/image/416/416/kcnp8y80/memory-card/microsdxc/p/g/y/sandisk-sdsqxa1-512g-gn6mn-original-imaftqrr8hdg6faa.jpeg?q=70",
        inCart:1
    },
    {
        name:'D-Link Wireless Router',
        price:5990,
		image:"https://rukminim1.flixcart.com/image/416/416/kbnz8nk0/router/x/y/k/d-link-dir-650in-original-imafsysqj3f3tec5.jpeg?q=70",
        inCart:1
    }
]

var cartadd= document.getElementsByClassName('addToCart');
for(let i=0;i<cartadd.length;i++){
	cartadd[i].addEventListener('click', function(event){
		event.preventDefault();
		alert("Added to Cart");
		AddToCart(productList[i]);
	})
}

var cartTotal= 0;
function AddToCart(y){
	cartDisplay.innerHTML+=`
	<div class="productBar">
		<div class="cartProduct">
			<div>
				<img src="${y.image}" width="120px" height="100px">
			</div>
			<p>${y.name}</p>
		</div>
		<div class="price">₹${y.price}</div>
		<div class="cartQuantity">
			<i class="fas fa-chevron-circle-left"></i>
			<span>${y.inCart}</span>
			<i class="fas fa-chevron-circle-right"></i>
		</div>
		<div class="total">

				₹${y.inCart * y.price}

		</div>
	</div>
	`
	cartTotal+= y.price;

	totalDisplay.innerHTML=`
	<p>Your Total Amount : <b>₹${cartTotal}</b></p>
	<button onclick="alert('Thanks for Shopping !')">Checkout</button>
	`
}