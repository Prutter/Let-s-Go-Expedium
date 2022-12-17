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
        offer: "10% on royal suits",
        main:"Basic Room, 2 Single Rooms, City view, Parking and locker facility"
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
        offer: "None",
        main: "Duluxe Room, 2 Single Rooms, City view, Parking and locker facility"
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
        offer: "12% offer on today",
        main : "Classic Room, 2 Single Rooms, City view, Parking and locker facility"
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
        offer: "15% Off on Pre- booking",
        main : "Premium Room, 2 Single Rooms, City view, Parking and locker facility"
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
		offer: "Reserve now and pay later.",
        main : "Royal Room, 2 Single Rooms, City view, Parking and locker facility"
	  }
]

let el = (tag)=>{
	return document.createElement(tag);
}

let renderdom=(objdata)=>{
    let main = document.querySelector(".reserve");
    main.innerHTML = null;

    objdata.forEach((ele)=>{
        let div= el("div");
        let h3= el("h3");
        h3.innerHTML = ele.main;
        let p1= el("p");
        p1.innerHTML = 'No guest room view.'
        let p2= el("p");
        p2.innerHTML = '&#128719; 3 Beds.'
        let p3= el("p");
        p3.innerHTML = '&#127968; 2 Single Rooms.'
        let p4= el("p");
        p4.innerHTML = '&#127327; Free Parking Slots.'
        let p5= el("p");
        p5.innerHTML = '&#127760; Free Wifi.'
        let p6= el("p");
        p6.innerHTML= '&#127828; Dinner & breakfast included'
        let p7= el("p");
        p7.innerHTML = "&#127749; 2 Days & &#127747; 3 Nights."
        let h2 = el("h2");
        h2.innerHTML = "&#8377; "+ele.price;
        let btn = el("button");
        btn.innerHTML = "Reserve Room";
        btn.onclick = ()=>{
            localStorage.setItem("myroomtype",JSON.stringify(ele))
            window.location.href = "checkout.html";
        }
        let h = el("hr");
        let hr = el("hr")
        div.append(h3,hr,p1,p2,p3,p4,p5,p6,p7,h,h2,btn);


        let div1= el("div");
        let div2= el("div");
        let im = el("img");
        im.src= ele.image[0];
        div2.append(im);
        let s1= el("span");
        s1.innerHTML = '&#10094;'
        s1.setAttribute("id","left");
        let j;
		j= ele['i']
		s1.onclick= ()=>{
			if(j==0)
			j=3;
			im.src= ele["image"][j];
			j=j-1 

			ele['i'] = j
		}
        let s2= el("span");
        s2.innerHTML = '&#10095;';
        s2.setAttribute("id","right")
        s2.onclick= ()=>{
			j=j +1;
			if(j>=4)
			j=0;
			im.src= ele["image"][j];
			ele['i'] = j;
		}
        div1.append(div2,s1,s2);
        div1.setAttribute("class","roomdiv")
        let doc= el("div");
        doc.append(div1,div);
        doc.setAttribute("class","room")

        main.append(doc);
    })
}

renderdom(objdata);