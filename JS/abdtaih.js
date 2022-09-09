// ABDTAIH by Yhvr
// Use this whereever, without permission. I don't care, just don't try to make money off of it.
// Awesome
// But
// Detrimental
// To
// Accessibility
// Internet
// Homepage

const waterfall = document.getElementById("waterfall");

elements.forEach(data => {
	const el = document.createElement("div");
	el.classList.add("item");

	const anchor = document.createElement("a");
	anchor.href = data.link;
	anchor.target = "_blank";
	anchor.rel = "noreferrer noopener";

	const img = document.createElement("img");
	if (data.img) img.src = data.img;

	const desc = document.createElement("div");
	desc.classList.add("desc");

	const title = document.createElement("p");
	title.classList.add("title");
	title.textContent = data.title;

	const descText = document.createElement("p");
	descText.textContent = data.desc;

	if (data.img) anchor.appendChild(img);
	desc.appendChild(title);
	desc.appendChild(descText);
	anchor.appendChild(desc);

	el.appendChild(anchor);
	
	waterfall.appendChild(el);
})

const msnry = new Masonry("#waterfall", {
	columnWidth: 350,
	itemSelector: ".item",
	gutter: 20,
});

msnry.on("layoutComplete", () => {
	msnry.element.style.width = `${msnry.cols * 370 - 20}px`;
});

window.addEventListener("resize", () => {
	let width = document.body.clientWidth;
	width = Math.floor(width / 370);
	msnry.element.style.width = `${width * 370}px`;
	// msnry.element.style.width = "";
	msnry.layout();
});

document.querySelectorAll("img").forEach(el => el.addEventListener("load", () => msnry.layout()));
