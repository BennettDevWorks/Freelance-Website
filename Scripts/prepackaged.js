const offerToggle = document.getElementById('offerToggle');
const offerGrid = document.getElementById('offerGrid');
const toggleLabel = document.getElementById('toggleLabel');


const websiteOfferSet= [
	{
		title: "Basic", 
		price: "£500", 
		description: "Getting yourself out there<br>A splash website getting yourself out there and telling the world who you are and how to contact you with your own personal design."},
	{
		title: "Premium",
		price: "£1,000",
		description: "A main website with more complexities like a shop for your products or services but limits on the amount of products in the shop."
	},
	{
		title: "FlagShip",
		price: "£2,000",
		description: "Your flagship website showing you own your industry not just work in it, with all your products and services on show for the purchase and all the pages you could need for you and your customers."
	}
];

const appOfferSet = [
	{
		title: "Basic",
		price: "From £4,000",
		description: "Your very own custom app another pillar to your ecosystem so your customers know you have them at every turn.(On going maintenance cost: £15/month)"
	},
	{
		title: "Premium",
		price: "From £8,000",
		description: "Putting some of those turns inside the same box with API's, more pages, more complexity taken away to give you and you customers simplicity.(On going maintenance cost: £15/month)"
	},
	{
		title: "FlagShip",
		price: "From £12,00",
		description: "We'll put all the turns in one box and put a pretty bow on top that matches your design and style, your one stop shop, your ecosystem held in one hand accesssible in seconds.(On goin maintenance cost: £20/month)"
	}
];


function renderOffers(offers){
	offerGrid.innerHTML = "";
	offers.forEach(offer => {
		const div = document.createElement('div');
		div.className = 'grid-item';
		div.innerHTML = `
			<h3>${offer.title}</h3>
			<p><strong>${offer.price}</strong></p>
			<p>${offer.description}</p>
		`;
		offerGrid.appendChild(div);
	});
}


renderOffers(websiteOfferSet);

offerToggle.addEventListener('change', () => {
	if (offerToggle.checked){
		renderOffers(appOfferSet);
		toggleLabel.textContent = "App Offers";
	} else {
		renderOffers(websiteOfferSet);
		toggleLabel.textContent = "Website Offers";
	}
});
