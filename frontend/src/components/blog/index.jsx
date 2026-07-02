import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const blogs = [
  {
    image: "/blog1.jpg",
    date: "25-Aug, 2025",
    title: "Indoor vs Outdoor Weddings: Which Venue is Right for You",
    slug: "indoor-vs-outdoor-weddings-which-venue-is-right-for-you",
    metaDescription: "Compare indoor vs outdoor weddings: pros, cons, and tips to choose the right venue in Jaipur.",
    metaKeywords: [
      "indoor wedding",
      "outdoor wedding",
      "banquet hall in Jaipur",
      "wedding venue Jaipur",
      "indoor vs outdoor weddings",
      "wedding tips"
    ],
    sections: [
      {
        type: "text",
        content:
          "When you plan your wedding, you want to ensure everything is perfect. One of the most important decisions you are going to make is which venue to book. The venue is important because it sets the tone of your celebration and experience from décor to ambience to guest comfort. While couples may love the elegance and climate insulation of hosting an indoor celebration, other couples want the feel of nature and open skies with an outdoor wedding. If you’re looking for the top Banquet Hall in Jaipur for your dream events, knowing the pros and cons of both indoor and outdoor weddings, will help you make your decision.",
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        icon: "🌿",
        content: "INDOOR WEDDINGS"
      },
      {
        type: "text",
        content:
          "Indoor weddings are typically for those types of couples who want to have a glamorous wedding celebration and that typically held in a premier banquet hall. For couples looking for comfort, structure, and elegance, indoor weddings provide a controlled setting that makes planning easier.",
      },
      {
        type: "image",
        src: "/indoor.jpg",
        alt: "Premier Banquet Hall in Jaipur ",
        // caption: "A beautiful wedding venue at Atlantiis Banquet."
      },
      {
        type: "heading",
        content: "Pros of Indoor Weddings"
      },
      {
        type: "text",
        content: "Indoor weddings  come with an advantage of waterproof weddings :- no stress over rain , heat , winds ."
      },
      {
        type: "text",
        content: "Decor Freedom :- In indoor weddings you get the freedom related to decoration as there are no limits in decoration. You can have whatever you want in your decoration to make your event joyful and mesmerizing."
      },
      {
        type: "text",
        content: "No Bugs, No Mess"
      },
      {
        type: "text",
        content: "Year-Round Availability:- No matter what the season is , indoor venues maintain stable temperatures and comfort for guests."
      },
      {
        type: "text",
        content: "Convenience for guests :- Easy seating conditions  and air conditioning arrangements made it easy for everyone."
      },
      {
        type: "heading",
        content: "Cons of Indoor Weddings"
      },
      {
        type: "text",
        content: "Limited space :- Indoor venues may have limited or fixed capacity so you have to decide a place according to the capacity only that can feel restricted for your guest list ."
      },
      {
        type: "text",
        content: "Less natural appeal :- Unlike open gardens indoor venues rely so much on  decoration to make it more appealing."
      },
      {
        type: "heading",
        icon: "🌿",
        content: "OUTDOOR WEDDINGS"
      },
      {
        type: "text",
        content: "An outdoor wedding is generally for the couples who appreciate the beauty of nature , in which mother nature is the guest of honor and it’s easy to keep the decor easy and simple as it  creates a truly enchanting atmosphere."
      },
      {
        type: "image",
        src: "/outdoor.jpg",
        alt: "Premier Banquet Hall in Jaipur ",
        // caption: "A beautiful wedding venue at Atlantiis Banquet."
      },
      {
        type: "heading",
        content: "Pros of Outdoor Weddings"
      },
      {
        type: "text",
        content: "Scenic Backdrops:- Premier Banquet Hall locations like gardens, offer stunning views, and elegance to your event  by minimizing the need for extra decoration and setup."
      },
      {
        type: "text",
        content: "Natural lighting:- Outdoor events provide you additional lighting that allow you to have Perfect wedding photos."
      },
      {
        type: "text",
        content: "SPACIOUS SITTING :- Outdoor weddings come with the most special advantage that is spacious sitting for your guest as it can comfortably  host a larger group of hosts quite  easily."
      },
      {
        type: "text",
        content: "Lawn Games :- To keep our guests busy and entertained we can organise some fun activity in between the events too. The outdoor areas are super kind friendlly , as the little ones can run around freely while their parents sit back and enjoy the festivities."
      },
      {
        type: "heading",
        content: "Cons of Outdoor Weddings"
      },
      {
        type: "text",
        content: "Weather concerns :- Outdoor events come with an unexpected rain , intense heat and many other problems that can cause a serious concern to your event ."
      },
      {
        type: "text",
        content: (
          <>
            Logistical issue :- Outdoor venues that might need extra arrangements for seating, sound systems, and lighting. So choosing a
            <a href="https://atlantiisbanquet.com/gallery" target="_blank" rel="noopener noreferrer"> PERFECTLY CRAFTED VENUES FOR EVERY OCCASION</a>
            {" "}is very important that can satisfy all your needs.
          </>
        )
      },
      {
        type: "text",
        content: "Bring on the bad-weather backup plan:-To play it safe, find out what the weather forecast is for your event day, Always keep a backup plan …so choose a right Premier Banquet Hall that has both the indoor and outdoor area separated so that you can enjoy your event to the fullest ."
      },
      {
        type: "heading",
        content: "How to Choose the Right Option?"
      },
      {
        type: "text",
        content: "SEASON AND WEATHER:- Perfect season to organise your events in outdoor spacing is spring and summer .Where indoor spacing is comfortable during colder months."
      },
      {
        type: "text",
        content: "Guest Comfort: If you have older guests or families with young children, indoor venues might provide more suitable facilities."
      },
      {
        type: "text",
        content: "Theme and Style: Outdoor weddings are great for their casual themes , Floral or Garden parties, Fairytales under the stars , while indoor settings are ideal for formal and grand celebrations within a premier banquet hall ."
      },
      {
        type: "heading",
        content: " The Best of Both Worlds - A Venue That Has Both"
      },
      {
        type: "image",
        src: "/head.png",
        alt: "Premier Banquet Hall in Jaipur ",
        // caption: "A beautiful wedding venue at Atlantiis Banquet."
      },
      {
        type: "text",
        content: "Nowadays many couples prefer a venue that offers both space indoors and outdoors. This allows you to have the option of an open-air ceremony and then simply move indoors to an area for the banquet dinner and celebrations."
      },
      {
        type: "text",
        content: "Atlantiis Banquet, known as a Premier Banquet Hall in Jaipur, can offer this flexibility with our elegant indoor menu options and our beautiful outdoor spaces. They are uniquely designed and exceptionally crafted venues for every occasion that engaged couples in Jaipur dream of, so whether you would like to have an indoor royal wedding venue or the natural charm of an outdoor venue, your wedding could be seamless and unforgettable."
      },
      {
        type: "text",
        content: (
          <>
            In closing, selecting a venue for indoor or outdoor wedding needs depends on your vision, the comfort of your guests, and the time of year. Indoor weddings provide elegance, convenience and control; outdoor weddings deliver natural beauty and uniqueness. If you are planning a wedding in Jaipur, find a
            <a href="https://atlantiisbanquet.com/" target="_blank" rel="noopener noreferrer"> Premier Banquet Hall in Jaipur</a>
            {" "}for your dream events that also provides both indoor and outdoor options - essentially the best of both worlds. With venues like Atlantiis Banquet, there is no compromise. From indoor elegance to outdoor grandeur, this is the perfect venue for every occasion in Jaipur! Your special day is sure to be nothing but magical!
          </>
        )
      }
      // Add more sections as needed
    ]
  },
  {
    image: "/blog2.jpg",
    date: "03-Sep, 2025",
    title: "Why Jaipur Is the Perfect Spot for Royal Weddings",
    slug: "Why-Jaipur-Is-the-Perfect-Spot-for-Royal-Weddings",
    metaDescription: "Discover why Jaipur is the ultimate royal wedding destination. Explore culture, luxury, and the best Premier Banquet Hall in Jaipur for your big day.",
    metaKeywords: [
      "Premier Banquet Hall in Jaipur",
      "Luxury banquet hall in Jaipur",
      "Royal wedding venues in Jaipur",
      "Destination wedding Jaipur",
      "Best wedding halls in Jaipur",
      "Jaipur palace wedding venues",
      "Luxury wedding venues Jaipur",
      "Jaipur wedding destination",
      "Heritage wedding halls Jaipur",
      "Jaipur banquet hall for weddings",
    ],
    sections: [
      {
        type: "text",
        content:
          "When couples are planning a wedding, they always want to make their day unique, unforgettable, and magical. Jaipur, the Pink City of India, has become more fashionable as a wedding destination in recent years, not just for desi couples, but also for couples all over the world. Jaipur is a royal bridal destination because of its stunning palaces, rich culture, and varied history. If you want to celebrate your wedding in a fairy tale atmosphere fit for royalty, this city gives you the ideal dream scenario.",
      },
      {
        type: "divider"
      },
      {
        type: "heading",
        // icon: "🌿",
        content: "1. A Royal Setting for Your Big Day"
      },
      {
        type: "text",
        content:
          "Jaipur is unique because of its perfect architecture and timeless charm. Now, imagine the beautiful backdrop of incredible forts, palaces, or heritage venues when you say 'I do'! The ambience of the city will guarantee that your wedding photos won't look like you're part of a crazy storybook!",
      },
      // {
      //   type: "image",
      //   src: "/indoor.jpg",
      //   alt: "Premier Banquet Hall in Jaipur ",
      //   // caption: "A beautiful wedding venue at Atlantiis Banquet."
      // },
      {
        type: "heading",
        content: "2. Exceptional Banquet Halls and Venues"
      },
      {
        type: "image",
        src: "/indoor.jpg",
        alt: "Premier Banquet Hall in Jaipur",
        // caption: "A beautiful wedding venue at Atlantiis Banquet."
      },
      {
        type: "text",
        content: (
          <>
            Jaipur is not short on exquisite banqueting facilities.  Whether looking for an exquisite wedding venue for a small meeting or huge gala event, or wedding, there is no shortage of world-class facilities.  If looking for a
            <a href="https://atlantiisbanquet.com/" target="_blank" rel="noopener noreferrer"> Premier Banque Hall in Jaipur</a>
            , you will have to make a choice from a variety of luxurious banquet halls with a blend of facilities that combine modern-day amenities and with old fashion royal charm. There are wedding venues with venues filled with abundant décor and lavish halls so that your day can be celebrated in the utmost decadence. For couples wishing to remain modern with their wedding but retain the roots of their heritage and culture, we feel Jaipur is the perfect balance of the two.
          </>
        )
      },
      {
        type: "heading",
        content: "3. Colorfulness and Culture"
      },
      {
        type: "image",
        src: "/tune.jpg",
        alt: "luxury venue for your wedding in Jaipur",
        // caption: "A beautiful wedding venue at Atlantiis Banquet."
      },
      {
        type: "text",
        content: "A wedding in Jaipur isn't just luxury - it is a real Rajasthani experience. Traditional shows & performances that include folk music, folk dance (like the Ghoomar and Kalbeliya), and colorful decorations from the fabulous decorative arts of Rajasthan will give unique qualities to every occasion. A luxury venue for your wedding in Jaipur will allow you to add Rajasthani cultural elements to your modern and sophisticated elegance and give guests the royal feeling."
      },
      {
        type: "heading",
        // icon: "🌿",
        content: "4. Luxury Hospitality & Guest Experience"
      },
      {
        type: "text",
        content: (
          <>
            Weddings aren't just about the bride and groom, but about the guests and making sure they have an incredible experience, too. The royal hospitality of
            <a href="https://atlantiisbanquet.com/" target="_blank" rel="noopener noreferrer"> Jaipur's luxury wedding venues </a>
            and hotels is renowned throughout the country. With a traditional welcome with flower showers and tilak ceremonies to personalized hospitality, each guest experiences a level of hospitality fit for royalty. This level of royal hospitality will guarantee the guests remember the wedding for its splendour, but also for the wonderful feeling of hospitality afforded to them all.
          </>
        )
      },
      {
        type: "heading",
        content: "5. A Stunning Mixture of Traditional and Modern"
      },
      {
        type: "text",
        content: (
          <>
            What makes Jaipur unique is that it offers a stunning mixture of traditional cultural identity and modern lifestyles. While Jaipur has remained royal in essence, it can now offer professional planners, professional decorators, and the latest in sound, lighting, and staging options. This is what can make getting married at a
            <a href="https://atlantiisbanquet.com/" target="_blank" rel="noopener noreferrer"> Premier Banquet Hall in Jaipur </a>
            a breeze and memorable!
          </>
        )
      },
      {
        type: "heading",
        content: "6. Foodie Heaven for a Royal Feast"
      },
      {
        type: "image",
        src: "/divider.jpg",
        alt: "luxury banquet hall in jaipur",
        // caption: "A beautiful wedding venue at Atlantiis Banquet."
      },
      {
        type: "text",
        content: (
          <>
            Food can become a colossal part of any Indian wedding experience, but Jaipur takes it to a different level, bringing a variety of foods and diverse culinary traditions. If you pick a royal feast, it will be authentically Rajasthani with all the required trimmings: dal-baati-churma, laal maas, ghewar, and options for international foods that leave all types of palettes satisfied. Choose a heritage palace or
            <a href="https://atlantiisbanquet.com/" target="_blank" rel="noopener noreferrer"> luxury banquet hall in Jaipur </a>
            for your wedding; the food will leave a lasting impression on your wedding guests.
          </>
        )
      },
      {
        type: "heading",
        content: "7. Location Offers Access"
      },
      {
        type: "text",
        content: "Jaipur is well-connected through all possible means of transport, be it air, rail, or road, which makes it accessible to all. The Jaipur International Airport connects Jaipur with the major metros of India and offers access to several International connections for guests originating from everywhere in the world. The ease of access is another factor that makes Jaipur one of the easiest, most accessible destinations for weddings."
      },
      {
        type: "image",
        src: "/out.jpg",
        alt: "luxury banquet hall in jaipur",
        // caption: "A beautiful wedding venue at Atlantiis Banquet."
      },
      {
        type: "heading",
        content: "Final Thoughts"
      },
      {
        type: "text",
        content: (
          <>
            If you have always dreamed of having a royal-style wedding, Jaipur is the outright choice for a royal wedding. Jaipur is known for its royal venues, cultural richness, and unparalleled hospitality, and is the right place for you to create once in a lifetime memories on your special day. Whether it is a palace, a resort, or the best
            <a href="https://atlantiisbanquet.com/" target="_blank" rel="noopener noreferrer"> Premier Banquet Hall in Jaipur </a>
            , Jaipur is sure to host the best wedding that you will surely feel like royalty.
          </>
        )
      },
    ]
  },


  // 💙 BLOG 3
  {
    image: "/blog3.jpg",
    date: "01-Nov, 2025",
    title:
      "Top Reasons to Choose Atlantiis Banquet Hall for a Destination Wedding in Jaipur",
    slug: "top-reasons-to-choose-atlantiis-banquet-hall-for-a-destination-wedding-in-jaipur",
    metaTitle:
      "Top Destination Wedding Venue in Jaipur | Atlantiis Banquet Hall",
    metaDescription:
      "Discover why Atlantiis Banquet Hall is Jaipur’s top destination wedding venue — luxury, space, flexibility & perfect ambience for grand celebrations.",
    metaKeywords: [
      "destination wedding venue Jaipur",
      "Atlantiis Banquet Hall Jaipur",
      "best banquet hall in Jaipur",
      "luxury wedding destination Jaipur",
      "premier banquet hall Jaipur",
      "destination wedding Jaipur",
      "grand celebration venue Jaipur",
    ],
    sections: [
      {
        type: "text",
        content: (
          <>
            Choosing the right venue is one of the most important decisions for
            a destination wedding. If you’re looking for the{" "}
            <a
              href="https://atlantiisbanquet.com/blog/Why-Jaipur-Is-the-Perfect-Spot-for-Royal-Weddings"
              target="_blank"
              rel="noopener noreferrer"
            >
              best destination wedding venue in Jaipur
            </a>
            , then Atlantiis Banquet Hall stands out for many strong reasons.
            Below we’ll walk you through key features that make this space
            perfect when you want a grand celebration venue Jaipur that also
            offers the vibe of a luxury wedding destination Jaipur .
          </>
        ),
      },
      {
        type: "heading",
        content: "1. Prime Location & Easy Access",
      },
      {
        type: "text",
        content:
          "Situated in one of the most accessible areas, Atlantiis Banquet Hall is near many major hotels and transport routes from Jaipur. The venue is centrally located, which makes it convenient for guests coming both from within the city and from other parts of India. The peaceful surroundings of the mansion give it a perfect blend of comfort and luxury for a destination wedding.",
      },
      {
        type: "text",
        content:
          "Why it matters: A well-connected location guarantees no problem in reaching the venue, letting your guests enjoy and celebrate with joy.",
      },
      {
        type: "heading",
        content: "2. Spacious & Flexible Venue Options",
      },
      {
        type: "text",
        content:
          "The facility has a large banquet hall, 13,120 sq ft, with seating for up to 1,000 guests. There is also a smaller banquet/pre-function hall (6,032 sq ft) and a lawn area of 12,825 sq ft with seating capacity for 620 or more.",
      },
      {
        type: "text",
        content:
          "Whether indoors or outdoors, Atlantiis serves its purpose — from an elegant indoor reception to a sprawling lawn ceremony.",
      },
      {
        type: "text",
        content:
          "Why it matters: You can scale the event to fit your guest list, theme, and budget. Having multiple spaces allows flexibility in creating your dream wedding.",
      },
      {
        type: "heading",
        content: "3. Customised for Destination Weddings",
      },
      {
        type: "text",
        content:
          "Atlantiis Banquet is designed for grand celebrations like weddings, receptions, and family gatherings. The layout supports multi-day celebrations with both indoor and outdoor facilities, perfect for Mehendi, Haldi, or Sangeet. It also permits outside catering, decorators, and entertainment partners, giving you full freedom to personalise every event detail.",
      },
      {
        type: "text",
        content:
          "Why this matters: Destination weddings require flexibility and space — Atlantiis offers both, creating an elegant yet customised experience.",
      },
      {
        type: "heading",
        content: "4. Luxury & Professional Service",
      },
      {
        type: "text",
        content:
          "The elegant interiors and vast lawn area make Atlantiis feel like a five-star luxury wedding destination in Jaipur. With ample parking, accessibility features, and event-friendly facilities, it ensures a smooth experience. The venue is often described as a ‘luxury banquet hall in Jaipur’ and a ‘premier banquet hall’ for dream events.",
      },
      {
        type: "text",
        content:
          "Why it matters: Upscale venues elevate the entire celebration — perfect for memorable photos, guest comfort, and ambience.",
      },
      {
        type: "heading",
        content: "5. Value for Money & Practicality",
      },
      {
        type: "text",
        content:
          "While it is a luxury space, Atlantiis offers great value due to its Jaipur location. The indoor-plus-lawn setup allows smart budget allocation between the ceremony and reception. As the venue supports outside vendors, you get more flexibility with catering, décor, and entertainment.",
      },
      {
        type: "text",
        content:
          "Why it matters: Destination weddings include many cost factors — a flexible venue helps you manage your budget while still maintaining a grand, luxurious experience.",
      },
      {
        type: "heading",
        content: "6. The Destination Wedding Vibe",
      },
      {
        type: "text",
        content:
          "Jaipur brings heritage, culture, and colour — the perfect backdrop for a destination wedding. Atlantiis blends this charm with modern comfort, ensuring your guests enjoy every moment. Whether it's a multi-day celebration or a single-day affair, Atlantiis Banquet provides an atmosphere of luxury and joy.",
      },
      {
        type: "text",
        content:
          "Why it matters: A destination wedding is more than just the location — it’s about giving guests an unforgettable experience worth travelling for. Atlantiis helps you create that magic.",
      },
      {
        type: "heading",
        content: "Conclusion",
      },
      {
        type: "text",
        content: (
          <>
            If you are looking for the best destination wedding venue in Jaipur,
            Atlantiis Banquet Hall checks all the boxes — location, space,
            luxury, flexibility, and value. It offers a venue for a grand
            celebration place Jaipur while also delivering the ambiance of a{" "}
            <a
              href="https://atlantiisbanquet.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              luxury wedding destination Jaipur
            </a>
            .
          </>
        ),
      },
      {
        type: "text",
        content: (
          <>
            Additionally, if you need a banquet hall for destination weddings in
            Jaipur , then Atlantiis is one great option to consider. After all,
            your venue sets the tone — with Atlantiis, the base is ready for
            your vision. Now it’s time to bring in the décor, music, guests, and
            memories. A beautiful celebration awaits!
          </>
        ),
      },
    ],
  },
  // 💙 BLOG 4
  {
    image: "/blog4.jpg",
    date: "07-Nov, 2025",
    title:
      "Beyond the Boardroom: 5 Reasons Why Atlantiis is Jaipur's Premier Corporate Event Venue",
    slug:
      "beyond-the-boardroom-5-reasons-why-atlantiis-is-jaipurs-premier-corporate-event-venue",
    metaTitle: "Atlantiis Jaipur: Premier Corporate Event Venue",
    metaDescription:
      "Discover Atlantiis, Jaipur’s top corporate event venue in Sitapura—ideal for meetings, product launches & conferences with premium service & tech facilities.",
    metaKeywords: [
      "Corporate Event Venue Jaipur",
      "Atlantiis Banquet Hall Jaipur",
      "Sitapura Event Venue",
      "Product Launch Venue Jaipur",
      "Business Meeting Venue Jaipur",
      "Conference Hall Jaipur",
      "Best corporate venue Jaipur"
    ],
    sections: [
      {
        type: "text",
        content:
          "Good corporate events leave a certain impression. The choice of venue shapes that impression. Atlantiis in Jaipur is a lot more than a meeting venue; it's an experience tailored to contemporary business needs. For firms looking for a top Corporate Event Venue in Jaipur, Atlantiis stands out for its location, scale, and services.",
      },
      {
        type: "heading",
        content: "1. Prime Sitapura location & easy access",
      },
      {
        type: "text",
        content:
          "Location plays a very important role in the success of an event. In one of the most well-connected areas of Jaipur, Atlantiis is situated in the Sitapura Industrial Area. The venue is quite easily accessible for its clients, business partners, and staff coming from different parts of the city. It is also close to Tonk Road and major hotels, which means traveling and staying are pretty easy to manage for outstation guests also.",
      },
      {
        type: "text",
        content:
          "Additionally, time factor and comfort are added into everything because of this smooth connectivity and nearby amenities. For companies seeking convenience and dependability in a Sitapura Event Venue, Atlantiis offers everything one could want: accessibility, comfort, and professionalism — all in one prime location.",
      },
      {
        type: "heading",
        content: "2. Flexible space for all event sizes",
      },
      {
        type: "text",
        content:
          "Corporate events start from small-sized meetings to grand celebrations. Atlantiis understands this well and offers spacious indoor banquet halls that can be arranged according to any event style. Whether it is a board meeting, seminar, product launch, or an award ceremony, the halls can be customized in theatre, classroom, or banquet layouts.",
      },
      {
        type: "text",
        content:
          "Each space is designed to seat hundreds comfortably while retaining a professional atmosphere. This makes it much easier for organizers to plan an event since they can choose the right setup depending on the purpose of the event and the guest list. Whatever your business needs may be, Atlantiis is an ideal choice for a modern and adaptable Corporate Event Venue in Jaipur.",
      },
      {
        type: "heading",
        content: "3. Ready for product launches and tech needs",
      },
      {
        type: "text",
        content:
          "A product launch is more than an event; it's a moment to impress. Atlantiis offers everything needed to make that moment special. The venue has a fully equipped stage, modern lighting, and powerful sound systems to create the right impact. Its spacious halls can be designed for product reveals, brand showcases, or media interactions.",
      },
      {
        type: "text",
        content:
          "Businesses searching for a Product Launch Venue Jaipur will find Atlantiis ideal for smooth setup and professional presentation. Every small detail, from display arrangements to guest seating and technical support, is taken care of.",
      },
      {
        type: "text",
        content:
          "Many local companies also choose Atlantiis for corporate launches and large-scale business events because it delivers style, convenience, and flawless execution.",
      },
      {
        type: "heading",
        content: "4. Hospitality, catering and professional staff",
      },
      {
        type: "text",
        content:
          "Great service can transform a simple event into a memorable one. Atlantiis realizes this and collaborates with some of the best caterers and event teams to provide an unsurpassed experience. The catering menu is tailor-made for formal corporate dinners, casual buffets, or light snacks for networking sessions. Trained staff take responsibility for guest management, timing, and coordination on site, thus enabling organizers to be more relaxed and achieve event goals.",
      },
      {
        type: "text",
        content:
          "Every little detail is taken care of smoothly to ensure that things happen on time and without any stress. Various event planners have testified to Atlantiis' warm hospitality and professional service, making it one of the most trusted choices as a Corporate Event Venue in Jaipur.",
      },
      {
        type: "heading",
        content: "5. Parking, convenience, and safety",
      },
      {
        type: "text",
        content:
          "Most corporate events involve many guests who arrive with private cars or company vehicles. The Atlantiis ensures that all these are smoothly managed through spacious parking areas and well-managed entry points. The inclusion of valet and parking assistance further adds to the convenience of arrival and departure for your guests. The venue also focuses on the safety and comfort of its guests, including proper security arrangements and generator backup to handle any power problem issues.",
      },
      {
        type: "text",
        content:
          "All these thoughtful features add convenience and reliability to every event. Therefore, for any business searching for a professional and appropriately equipped corporate event venue in Jaipur, the attention to detail at Atlantiis earns it a top recommendation for a smooth, safe, and comfortable experience for its guests from the very beginning to the end.",
      },
      {
        type: "heading",
        content: "Quick Tips for Booking Atlantiis as a Corporate Event Venue in Jaipur",
      },
      {
        type: "text",
        content: (
          <>
            <ul>
              <li>Book in advance during peak months.</li>
              <li>Share technical needs in advance.</li>
              <li>Visit the halls during setup.</li>
              <li>Ask about the parking layout for buses and cars.</li>
              <li>Confirm AV and stage specs for product demos.</li>
            </ul>
          </>
        ),
      },
      {
        type: "heading",
        content: "Conclusion",
      },
      {
        type: "text",
        content:
          "Atlantiis brings together location, scale, tech-readiness, and strong hospitality. These qualities make it a top choice for businesses seeking a Corporate Event Venue in Jaipur. Be it a product reveal, a large conference, or even a company celebration, the setting in Sitapura along with the features of the venue brings value and confidence. For planners looking for a reliable Product Launch Venue in Jaipur or a trustworthy Sitapura Event Venue, one should look closely at Atlantiis.",
      },
      {
        type: "text",
        content:
          "If the next needed details are capacity, AV packages, or menu options, refer to the venue's contact page or event listings for the most up-to-date offerings.",
      },
    ],
  }
  // {
  //   image: "URL_OR_IMPORT_3",
  //   date: "29-Mar, 2025",
  //   title: "How to Plan Last-Minute Travel Deals",
  // },
  // Add 3 more for the second row
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header-row">
        <div className="blog-header-line">
          <span className="blog-line" />
          <h1 className="blog-title">Blogs</h1>
          <span className="blog-line-r" />
        </div>
      </div>
      <div className="blog-grid">
        {blogs.map((blog, idx) => (
          <Link
            to={`/blog/${blog.slug}`}
            key={idx}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="blog-card" style={{ cursor: "pointer" }}>
              <img src={blog.image} alt={blog.title} className="blog-image" />
              <div className="blog-date">
                <span role="img" aria-label="calendar">📅</span> {blog.date}
              </div>
              <div className="blog-title-2">{blog.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
export { blogs };
