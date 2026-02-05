const offerToggle = document.getElementById('offerToggle');
const offerGrid = document.getElementById('offerGrid');
const toggleLabel = document.getElementById('toggleLabel');


const offerSet1 = [
	"Basic Offer",
	"Premium Offer",
	"FlagShip Offer"
];

const offerSet2 = [
	"Basic Offer",
	"Premium Offer",
	"FlagShip Offer"
];


function renderOffers(offers){
	offersGrid.innerHTML = "";
	offers.forEach(offer => {
		const div = document.createElement('div');
		div.className = 'grid-item';
		div.textContent = offer;
		offersGrid.appendChild(div);
	});
}


renderOffers(offerSet1);

offerToggle.addEventListener('change', () => {
	if (offerToggle.checked){
		renderOffers(offerSet2);
		toggleLabel.textContent = "Website Offers";
	} else {
		renderOffers(offerSet1);
		toggleLabel.textContent = "App offers";
	}
});
