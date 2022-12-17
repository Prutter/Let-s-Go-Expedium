let objdata= [
    {
        i: 1,
        location: "New-Delhi",
        price: "5500",
        description: "A chain of Radison Blu provided world class facilities of foods, rooms and themes. ",
        image: [
            "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/64515cdf.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/0358f6e5.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/3d223221.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/2000000/1530000/1528800/1528788/2efe040f.jpg?impolicy=resizecrop&rw=455&ra=fit"
        ],
        city: "New-Delhi",
        title: "Radison Blu",
        rating: "4.2",
        offer: "10% on royal suits"
    },
    {
        i: 1,
        location: "Delhi",
        price: "9500",
        description : "Inspired By Krishna Theme. Feel the Vrindavan vibes. ",
        image : [
            "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/aaba7f62.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/c1013ae8.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/88c9a427.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/bada04cf.jpg?impolicy=resizecrop&rw=455&ra=fit"
        ],
        city: "New-Delhi",
        title: "Leela Palace",
        rating: "5",
        offer: "None"
    },
    {
        i: 1,
        location: "Delhi",
        price: "11000",
        description : "Luxury hotel By Hyatt, near New-Delhi offering spa, bar, transport.",
        image: [
            "https://images.trvl-media.com/hotels/7000000/6390000/6382300/6382233/f90787dd.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/7000000/6390000/6382300/6382233/f64dcecd.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/7000000/6390000/6382300/6382233/9dc59db2.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/7000000/6390000/6382300/6382233/870b4bcf.jpg?impolicy=resizecrop&rw=455&ra=fit"
        ],
        city: "New-Delhi",
        title: "Andaaz Hotel",
        rating: "4.7",
        offer: "12% offer on today"
    },
    {
        i: 1,
    	location: "New Delhi",
        price: "12500",
        description: "Taj Hotel is a luxury experience. Royal suits available. Spa, bars, tennis court. ",
        image: [
            "https://images.trvl-media.com/hotels/1000000/470000/465100/465005/a99e1840.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/1000000/470000/465100/465005/13a4747e.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/1000000/470000/465100/465005/a26f2a9b.jpg?impolicy=resizecrop&rw=455&ra=fit",
            "https://images.trvl-media.com/hotels/1000000/470000/465100/465005/60f296fc.jpg?impolicy=resizecrop&rw=455&ra=fit"
        ],
        city: "New-Delhi",
        title: "Taj Hotel",
        rating: "4.9",
        offer: "15% Off on Pre- booking"
    },
	{
		i: 1,
		location : "Lajpat Nagar",
		price: "3500",
		description: "Special arrangements for holidays",
		image: [
		  "https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/532d599e.jpg?impolicy=resizecrop&rw=455&ra=fit",
		  "https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/495c8d43.jpg?impolicy=resizecrop&rw=455&ra=fit",
		  "https://images.trvl-media.com/hotels/11000000/10220000/10210200/10210101/0a8a9767.jpg?impolicy=resizecrop&rw=455&ra=fit",
		  "https://images.trvl-media.com/hotels/1000000/540000/536600/536519/2525421d.jpg?impolicy=resizecrop&rw=455&ra=fit"
		],
		city: "New-Delhi",
		title: "Roseate House",
		rating: "4",
		offer: "Reserve now and pay later."
	  }
]

let el = (tag)=>{
	return document.createElement(tag);
}

let renderDom = (data)=>{
	let container = document.querySelector(".container")
	data.forEach((ele)=>{	
		let div1 = el("div");
		let image = el("img");
		image.src = ele["image"][1];
		let s1 = el("span");
		s1.innerHTML = "Ad"
		s1.setAttribute("class","arrow adv")
		let s2 = el("span");
		s2.innerHTML = "&#10094;"
		s2.setAttribute("class","arrow prev")
		let j;
		j= ele['i']
		s2.onclick= ()=>{
			console.log(j);
			if(j==0)
			j=3;
			image.src= ele["image"][j];
			j=j-1 

			ele['i'] = j
		}
		let s3 = el("span");
		s3.innerHTML = "&#10095;"
		s3.setAttribute("class","arrow next")
		s3.onclick= ()=>{
			console.log(j);
			j=j +1;
			if(j>=4)
			j=0;
			image.src= ele["image"][j];
			ele['i'] = j;
		}
		let s4 = el("span");
		s4.innerHTML = "&#9825;"
		s4.setAttribute("class","heart");

		let div2 = el("div");
		let title = el("h1");
		title.setAttribute("class","title")
		title.innerHTML = ele.title;
		let location = el("h3");
		location.setAttribute("class","location")
		location.innerHTML = ele.location
		let desc = el("p");
		desc.setAttribute("class","description")
		desc.innerHTML = ele.description
		let rating = el("h2");
		rating.setAttribute("class","rating");
		rating.innerHTML = ele.rating+ " &#9733;"

		let div3 = el("div");
		let off = el("button")
		off.innerHTML = ele.offer;
		off.setAttribute("class","offer")
		let pr = el("h1")
		pr.innerHTML = '&#8377; '+ele.price
		pr.setAttribute("class","price");
		let include = el("p");
		include.innerHTML = "Includes All Taxes And Charges.";

		div1.append(image,s1,s2,s3,s4);
		div1.setAttribute("class","image");
		div2.append(title,location,desc,rating);
		div2.setAttribute("class","div2")
		div3.append(off,pr,include);
		div3.setAttribute("class","div3");

		let main = el("div")
		main.append(div1,div2,div3);
		main.setAttribute("class","con");
		container.append(main);
	})
}

renderDom(objdata);
