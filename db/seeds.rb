# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
demo = User.create({email: 'demo@gmail.com', password:'password', first_name: 'Demo', last_name: 'User', emails_opt_in: true})

Event.destroy_all

freezing = Event.create({
  hero_image: "https://s3.amazonaws.com/sideshow-development/freezing_man.jpg",
  event_start: Date.new(2018,2,3,22),
  event_end: Date.new(2018,2,4,5),
  title: "Freezing Man III: The Yeti Returns",
  description: "A long time ago, in a festival far, far away...

  There many universes and many earths parallel to each-other. There are worlds like yours: where Burning Man happens in Black Rock City, NV the 1st week of September. Then there are worlds like Thunder Gumbo: where Freezing Man happens the 1st week of February in Brooklyn.

  A week long festival that takes place IN ONE NIGHT across four stages of fun at the House of Yes! A volunteer produced, non-profit fundraiser for the legendary BOOGA art car, with support from key members of Uhuru Afrika (Boston) Meso Creso (DC), Junxion (Brooklyn), Future Clear (Equilibrio / Circle), Tender Heckles, Vitamin B, Plug 4, Rubulad, and Wonderland!

  Featuring

  2Melo (Junxion / Cumba Mela)
  Adam Gibbons (Uhuru Afrika / Junxion)
  Anna Morgan (Vitamin B / Junxion)
  Beatkitty (Wonderland NY)
  Casey Skodnek (Junxion)
  Dirty Looks (BangOn)
  HeartJacker (Dévotion)
  Joro Boro (WorldWide)
  Illexxxandra (Vitamin B / Rubulad / Plug 4)
  Mel G (Teklife)
  Mettabbana (Meso Creso)
  Partyfoul5000 (Thunder Gumbo)
  Rasta4Eyes (Stampede)
  Samuel (Thunder Gumbo / Future Clear)
  Shakey (Warper / Rubulad / Plug 4)
  Sunny Quetzacoatl (Cosmic Dream Serpent)

  Plus special acoustic jazz, folk, and covers in the back yard by Matt Namer, Perry, Cameron, Daniel McKleinfeld, and other surprise luminaries

  Also featuring:
  The Freezing Man Effigy Destruction Ritual at 1am
  The Ice Demon Fire Troupe, featuring Torrie Foxcat, Pheonix Feeley, Rushty Sparks, Max, and Wolf Bukiet
  A special fire performance from Christopher Flambeaux, of The Calling / Hearts of Fire
  The Matriarch's Lair by Kate Relish in the Onyx Room, with yeti rituals from Rez, Heather, Bettiesacrd, and other special guests, deco by Laura, tea from Thom, music by Rasta4Eyes + Sunny Quetzacoatl
  Yeti Gogo by Sind-D, Leo Freak, Zoe, Caitlyn, & Lauretta
  Pole dance by Crystelle Reola
  Live tee-shirt printing from Bushwick Print Labs (BYO tee-shirt for $5 off!)
  The Bodypaint All Stars, with live UV blacklight body paint, featuring Christian Diaz, Kirkworx Dupuis and special guest artists
  Outdoor flames to warm your frozen toes
  Effigy by Phil Hollenbeck
  Aerial by the House of Yes All Stars
  Terrifying monsters by Kate Brehm / imnotlost
  Human Hamster Ball Crowd Surfing by Shalin Scupham & Brook Gay Runyan III
  Tinder Gumbo, a real-time 3D interactive experience by Brett Herman
  Tender Heckles heckling porch by Molly Levine, Grace Yang, & Emma K
  AutoTune Megaphone Hollering by Tod Polenberg
  Video by Mojo and DiscoBike
  Food by Queen of Falafel + Guac by Dallas

  Plus more surprises TBA!

  We will be taking coats for the NY Cares Winter Coat drive-- bring your lightly used winter outerwear for $5 off at the door! We've donated over 150 coats to the needy at past Thunder Gumbo events.

  STORY

  Our scientists have, for the third year running, created a trans-dimensional-enviro-shifter that will allow the attendees to party for an entire week in one night and fit 100,000 people into a single Bushwick warehouse. A gathering of tribes from our larger community, a collective pooling of energy where everything happens at once, a gathering around the giant Ice Man effigy destruction ritual, a celebration of human warmth in a frozen era.

  Yet all could be lost! There are dark forces seeking to tame and castrate the free-wheeling spirit of the yearly Yeti bacchanal. The fascism and oppression of the Frozen Empire threatens all. The self serving Ice Kind and Queen have come to bring the peace-loving, long haired yetis to their knees right at the moment of their highest celebration and winter games, The Abominable Snowlympics

  Who will win? Will there be a fire fight? Will there be bobbing for apples in ice cold water? Will the annual High Winter Olympics be allowed to take place? Will the winner be beheaded? Or will the ice empire be overthrown once more?

  There is only one way to find out.

  COSTUME SUGGESTIONS:
  Yeti
  Abdominal Snowman, the workout motivator
  Ice Queen
  Not-So-Vanilla Ice
  Norwegian Metal Band
  Hillary Clinton
  Famous Reggae Superstar Yellow-Snow-Man
  Snowballing Snow Bunnies
  ANYTHING but Llsa, Anna or Olaf... you know what We're talking about. Let it go... just let it go...

  Thunder Gumbo events are non-profit and volunteer-run. Proceeds will go to benefit maintenance and upgrades to BOOGA, our legendary art car, and the cost of bringing the Thunder Gumbo tribal clusterfuck to Burning Man and other festivals.

",
  venue_name: "The Paper Box",
  venue_address: "17 Meadow St, Brooklyn, NY 11206",
  ticket_price: 20,
  tickets_available: 400,
  organizer_id: demo.id,
})

vox = Event.create({
  hero_image: "https://s3.amazonaws.com/sideshow-development/vox_noctem.jpg",
  event_start: Date.new(2018,4,9,1),
  event_end: Date.new(2018,4,9,7),
  title: "Vox Noctem presents :: Winter Spa Series ::",
  description: "» •∆˚ «|» •∆˚ « Çeles†iål §lumber » •∆˚ «|» •∆˚ «


  Step into a steamy lucid dream beneath the midnight moon ~ with saunas to warm your soul, whirlpools reminiscent of your astral travels, and music that trancends the Northern Lights; satisfy your spirits at our ~Celestial Slumber~ party inside The Speakeasy Spa.

  Enjoy Russian & Turkish saunas, aroma steam room, jacuzzi, and cold plunge pool in our 10,000 sq foot oasis. Warm up by the fire or dance away your winter chills. Feast on a decadent ever flowing cornucopia, nourish yourself with health elixirs, and indulge in herbal infused libations.

  Waking dreams, bathing or birthday suits and music makers encouraged. Sirens & Titans we welcome you to our celestial dream world. Radical self expression abound & immersive surprises in store.

  » •∆˚ «|» •∆˚ « » •∆˚ «|» •∆˚ « » •∆˚ «|» •∆˚ «


  :: Slipping from my consciousness to dreams
  There are hidden meanings in there it seems...

  :: Cascading landscapes of colours that don't exist
  A perpetual kaleidoscope of impossible shapes persist...

  :: Noises that can't be recognised are singing in my ear
  And everything that is too far to see, is really near…

  » •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «



  :: Lineup ::


  Medina
  https://soundcloud.com/mmmmmedina/moonlight-mass-vol-2

  Tôn
  https://soundcloud.com/itston/ton-new-years-day-2017-vox-noctem

  Kellam
  https://soundcloud.com/kellam/december2016

  Erica Rhone
  https://soundcloud.com/ericarhone/global-mixx-radio

  Experimen.Tal
  https://soundcloud.com/djexperimental1/never-enough-2016-burning-oplulent-temple-sunrise



  Live Art & Music:

  Cosmic Sound Journey at the Wet Lounge provided by HUMO OMUH of Humo Maya - Cosmic Shamanic Tribal Sound Healing Music Journey. Maya
  https://www.facebook.com/humo.maya

  Celestial Bodies photo studio w DAVID ARONSON
  http://www.david-aronson.com/

  Shamanic live painting by TICO CHANGO
  http://instagram.com/myztico_campo

  Body Painting/Markings by ARMAN MATIN & LANDY GRIFFIN

  Late Night Guided Yoga & Relaxation Session by SEAN FLANAGAN

  Live drumming, didgeridoo and mermaids by DAN BAILEY TRIBE

  Live painting by KYLE BLOCK & ANGELINE CHEN
  www.theartrising.com

  » •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «


  Inclusive:
  - Towel & Personal Locker
  - Toiletries (shampoo, conditioner, blow dryers, etc...)
  - Healthy snacks
  - Salt Scrubs
  - Spa Amenities: Russian Sauna, Swedish Sauna, Turkish Aroma Steam room, Thermal Hot tub, and Cold Plunge pool

  For additional rental/purchase:
  - Herbal Tonics & Elixirs by Ambrosia Elixir Lounge
  - Cash bar: Cocktails, Beer, Proseco. Champagne by the bottle.
  - Robes & slippers
  - Massage Treatments
  - Astrology Reading
  - Essential Oil Therapy
  - Crystal Rock Reading


  For Reservations:
  - Private Sanctuary for couples or small groups -- email info@voxnoctem.org for availability
  - Private Lounge w jacuzzi, private shower & on-call massage therapist -- email info@voxnoctem.org for availability


  » •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «

  :: Finer Points ::

  - Swimwear necessary in the wet lounge
  - Nudity is allowed if you don't have a bathingsuit
  - Disposable swimwear provided if asked
  - You must wear sandals inside the Russian sauna. Extremely hot.
  - Consider bringing a kimono/robe & sandals.
  - Cell phone use is prohibited inside the spa
  - Do not give massages freely without consent
  - Violators will be escorted out immediately
  - Good Vibes Only


  » •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «

  :: Tickets ::
  https://vox-noctem.ticketleap.com/celestial-slumber/details

  » •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «

  :: Vox Noctem events offer a nightlife alternative based on connection, openness and dissolution of ego - while still satisfying all the desires of our beloved creatures of the night… ::

  » •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «» •∆˚ «|» •∆˚ «
",
  venue_name: "The Speakeasy Spa",
  venue_address: "275 Park Ave, Brooklyn, NY",
  ticket_price: 115,
  tickets_available: 100,
  organizer_id: demo.id,
})

sc = Event.create({
  hero_image: "https://s3.amazonaws.com/sideshow-development/secret_circus.jpg",
  event_start: Date.new(2018,3,4,4),
  event_end: Date.new(2018,3,4,5),
  title: "What happens in Secret Circus...",
  description: "Witness New York City's most talented aerialists and circus performers in a secret speakeasy venue. Secret Circus gives experienced acrobats and entertainers a stage to display their strangest, most nuanced, and daringly bizarre pieces.

  An awe-inspiring, totally unique experience. Each show has a secret theme that audience members discover as only as the night progresses.

  This incredible line up is NOT to be missed!

  Host: Laurel Fixation (fabulous fire qween, lover of leather)

  Featuring:
  Tamara Ochoa (viscerally captivating on lyra and trapeze)
  Medea (feminine power on lyra and chain-lyra)
  Erin Duffee (breathtaking fluidity on fabric and lyra)
  Alisa Mae Fendley (dynamic, powerful pieces on lyra and trapeze)
  Ariel Iasevoli (embodying strength and the strange on pole and aerial chains)
  Phil Evans (winner of Jerry Springer's Stripper Showdown, Pole Theater USA champion, and hand balancer)


  During intermission, Cat Widdifield is all ears, as your human confessional (someone to whom you can anonymously whisper your deepest secrets).

  Doors at 8, show at 8:30.
",
  venue_name: "Address will be sent to ticket holders on the day of the show",
  venue_address: "Greenwich Village, L Train to 6th Ave.",
  ticket_price: 20,
  tickets_available: 150,
  organizer_id: demo.id,
})

poetry = Event.create({
  hero_image: "https://s3.amazonaws.com/sideshow-development/poetry_brothel.jpg",
  event_start: Date.new(2018,2,14,20),
  event_end: Date.new(2018,2,14,23),
  title: "The Poetry Brothel: Carnival of Love",
  description: "Welcome to a unique and immersive poetry event that takes poetry outside classrooms and lecture halls and places it in the lush interiors of a bordello. The Madame presents a rotating cast of poets, each operating within a carefully crafted character, who impart their work in public readings, spontaneous eruptions of poetry, and most distinctly, as purveyors of private poetry readings on beds, chaise lounges and in private rooms. For a small fee, all of the poets are available for these sequestered readings at any time during the event. Of course, any true bordello need a good cover; ours is an immersive cabaret featuring burlesque, live music, vaudeville, aerials, visual art, magic, mysticism, with newly integrated themes, performances and installations at each event.

  Doors open at 6pm with a happy hour from 6-7pm. The show runs from 7pm-9pm. Themed costumes and/or vintage formalwear are encouraged but not required.

  This event is 21+

  For details about this particular event, including themes and featured performers, please visit thepoetrybrothel.com
",
  venue_name: "The Back Room",
  venue_address: "102 Norfolk St, New York, New York 10002",
  ticket_price: 34.99,
  tickets_available: 125,
  organizer_id: demo.id,
})

littlecinema = Event.create({
  hero_image: "https://s3.amazonaws.com/sideshow-development/little_cinema.png",
  event_start: Date.new(2018,2,4,17),
  event_end: Date.new(2018,2,4,20),
  title: "Little Cinema Throwback: Romeo + Juliet",
  description: "Little Cinema is back again, right in time for Valentine's Day with one of our Favorite Throwbacks, Romeo + Juliet (Immersive), co-produced with The Love Show -- featuring ballet dancers, aerialists, DJs, re-mixed video scenes and 3D projection mapping.

  Voted as Top 3 film events for 2017 by Filmmaker Magazine.

  We'll be bringing this show to stage for one final time.

  Calling all star-crossed lovers and fortune’s fools…

  On February 6th + February 11th, defy the stars, don your best Hawaiian shirt, and let us bring you into the feuding, star-crossed world of the most famous lovers in history.

  Little Cinema is collaborating with The Love Show for this immersive event of Romeo & Juliet. We're bringing you a full cast of dancers and aerialists to carry the film off the screen and into the crowd.

  Join us as we bring the House of Montague and the House of Capulet to the House of Yes.

  The night includes:
  Immersive audio visual perfromance of of Romeo + Juliet
  Dance & aerial performances by The Love Show & House Of Yes
  Live Video Remixing by CHNNLS (Jay Rinsky)
  Video Art & 3D projection by Josh Slaby
  Special cocktails all night


  Doors: Tuesday 7:00pm // Sunday Doors: 6pm

  Seating: Tuesday 7:30pm // Sunday Seating: 6:30pm

  Screening: Tuesday 8:00pm // Sunday Screening: 7pm

  Teaser:
  https://vimeo.com/202673991

  Get on the list! (Priority tickets, discounts, news)

  www.littlecinema.net/join

  Little Cinema Moments:

  https://vimeo.com/209268449/776a535068



  About Little Cinema:

  Little Cinema is a visually stunning, cross-disciplinary event series dedicated to remixing films and presenting them in ever new and creative ways. Performances are integrated into the films making cinema feel alive. Recently it made New York Magazine’s ‘Best of New York – 2017’.

  Think of Little Cinema as ‘The Rocky Horror Picture Show' meets ‘Cirque Du Soleil’.


  More at:

  www.littlecinema.net

  About The Love Show:

  THE LOVE SHOW is a theatrical dance company based in Brooklyn that combines cabaret, ballet, rock, comedy, burlesque and theater into creative performances all over the US and beyond. The Love Show has entertained all audiences, from high-profile celebrities and clientele to gritty downtown theatergoers and has rocked stages from Lebowskifest to The BBC gala. The Love Show was commissioned to create and perform original choreography for Banksy, Bacardi, Veuve Clicquot, Dom Perignon, Vogue Magazine, and more.

  www.theloveshownyc.com/


  About CHNNLS

  CHNNLS, Jay Rinsky is an audio visual artist and dj based in brooklyn with work featured around around the globe. CHNNLS work focuses on the relationships between film and various performing arts with collaborations ranging from 40 piece orchestras at Israel’s Opera house to a 14 piece jazz enabmble at Chicago Jazz Festival. CHNNLS turns video into music and film into mixed media art.

  www.chnnls.tv


  Creative Directors:

  Jay Rinsky + Angela Harriell (The Love Show)


  Cast:

  Announcements coming soon!


  Produced by:

  Jay Rinsky + Angela Harriell


  Video Art & Live film remixing:

  Jay Rinsky (CHNNLS)

  www.chnnls.tv


  3D Video Mapping & Graphics:

  Josh Slaby

  http://slabybaby.com


  More details coming soon!

  21+





  ::::::: About Your Reservation & This Event :::::::

  - You must arrive by 7:45pm (Tuesday) or 7:45 (Sunday) to guarantee your GA/Preferred seat. Empty seats will be released to Waitlist and Standing Room ticket holders at 8:00pm (Tuesday) or 7:pm (Sunday), or whenever the show begins.

  - The film will be screened for free in the restaurant of House Of Yes.

  - RSVP'ing by purchasing a ticket on this link reserves you a seat in the performance area where live musicians, dancers & aerialists will perform. Your contribution will be classed as a donation to the arts and split between all performing artists and contributors. A typical show has up to 30 artists involved, if you wish to contribute further at the door we will kindly accept. We do this for love and invest countless hours in preparation for each event.

  - If you are someone with severe anxiety, please note that most of our shows involve surprise occurrences such as, but not limited to: loud noises, flashing lights, performer interaction, and inflatable objects being tossed on the audience. If you would like to be seated in a ‘safe zone’, please email littlecinemanyc@gmail.com after you’ve purchased your tickets.

  - Some of our performances contain nudity.

  ::::::: Community and Accessibility :::::::

  This is a space for everyone to feel welcome and loved. Racism, sexism, ableism, ageism, homophobia, transphobia, xenophobia will not be tolerated at our House. All entrances and spaces within the venue are single-level and handicap accessible. There are stairs leading to the upper portions of the stage, for those who wish to dance in the spotlight. Gender neutral bathrooms are easily located in the main room.

  ::::::: Community & Accessibility :::::::

  This is a space for everyone to feel welcome and loved. Racism, sexism, ableism, ageism, homophobia, transphobia, xenophobia will not be tolerated at our House. All entrances and spaces within the venue are single-level and handicap accessible. Gender neutral bathrooms are easily located throughout the venue.
",
  venue_name: "House of Yes",
  venue_address: "342 Maujer Street, Brooklyn NY 11385",
  ticket_price: 20,
  tickets_available: 225,
  organizer_id: demo.id,
})

digester = Event.create({
  hero_image: "https://s3.amazonaws.com/sideshow-development/digester_egg_tour.jpg",
  event_start: Date.new(2018,3,4,17),
  event_end: Date.new(2018,3,4,19),
  title: "night heron",
  description: "What to Expect
  The Digester Egg Tour starts with an overview of the wastewater treatment process—an essential part of protecting public health and NYC’s waterways. After, we treat guests to unobstructed views of the Manhattan, Brooklyn and Queens skylines from the observation deck, a glass-enclosed walkway built atop our state-of-the art digester eggs. Learn more about the Newtown Creek Digester Eggs.

  Location
  The Digester Egg Tour starts at the Visitor Center at Newtown Creek, located in Brooklyn’s Greenpoint neighborhood. We are easy to spot—just look for the bright orange building. The entrance is near the intersection of Greenpoint Avenue and Humboldt Street at 329 Greenpoint Avenue Brooklyn, NY 11222.





  The Visitor's Center at Newtown Creek: Special Note for School Groups
  The Visitor Center at Newtown Creek offers education programs for pre-Kindergarten through 12th grade students, undergraduate and graduate classes, and educators by appointment. Visit our Visitor Center at Newtown Creek webpage to learn more.




  Frequently Asked Questions
  How do I register?
  We give public tours of the Digester Eggs three times a year: in February; April, and October. Registration opens for the February and April tours on our website approximately two weeks prior to the announced tour dates. All registration is on a first come first served basis. The October tour is hosted by Open House New York (OHNY). Information for this tour can be found on the OHNY website.

  Are tours free?
  All tours are free to the public, ages 12 and older.

  How long is the tour?
  The tour takes about an hour and a half.

  Can I take photos or video during the tour?
  Still photography is allowed, but taking video is prohibited.

  What should I wear?
  All attendees are required to wear closed-toe, flat-soled shoes. We reserve the right to deny participation in the tour if improper footwear is worn.

  Can I get there via subway?
  Take the G train to Greenpoint Ave and use the exit marked Greenpoint/Manhattan Ave. Walk east along Greenpoint Ave; McDonald’s will be on your left. Cross McGuinnes Blvd and continue on Greenpoint Ave one block past Provost St. You will see the bright orange two-story Visitor Center building ahead.

  Will I need to sign a visitor release form?
  Yes, all guests will be required to sign a visitor release form at the beginning of the tour. Children under the age of 18 must have a release form signed by a parent or guardian. Please email events@dep.nyc.gov prior to the tour if you would like to request a copy in advance. Sorry, no children under 12 are allowed.
",
  venue_name: "Newtown Creek Wastewater Treatment Plant",
  venue_address: "327 Greenpoint Ave, Brooklyn, NY 11222",
  ticket_price: 15,
  tickets_available: 8,
  organizer_id: demo.id
})

charlie = Event.create({
  hero_image: "https://s3.amazonaws.com/sideshow-development/night_heron.jpg",
  event_start: Date.new(2018,4,4,4),
  event_end: Date.new(2018,4,4,5),
  title: "Charlies Prohibition Party",
  description: "Come celebrate one of the most unique (and debaucherous) eras in America history! Live music, an authentic speakeasy, and games will keep you entertained all night",
  venue_name: "Charlies Bar & Kitchen",
  venue_address: "112 Lincoln Avenue, Bronx, NY 10454",
  ticket_price: 0,
  tickets_available: 400,
  organizer_id: demo.id,
})

voice = Event.create({
  hero_image: "https://s3.amazonaws.com/sideshow-development/voice_cult.jpg",
  event_start: Date.new(2018,4,4,4),
  event_end: Date.new(2018,4,4,5),
  title: "Voice Cult: Come Sing",
  description: "Voice Cult: Sing. Connect. Express. Heal. Singing together can be closer than touching.

  ::::: About Voice Cult :::::

  ON the first Saturday of every month at House of Yes, we ask you to travel from near and far, and to bring your voice to us. You have been singing since the beginning of time. We connect, align, vibrate, express, process, remember, forget, wish, apologize, forgive, go into altered states, heal ourselves and each other, flee, find, talk to dead grandfathers, lure each other into love, become our own mothers, and paint the room with iridescence. And frequently we have no idea what the hell we are doing, which is okay too.

  If you can speak, then you can sing - even if you have only ever croaked out thin ratchety wisps of songs and especially if your mom told you that you were tone-deaf in the fourth grade. If you are a great singer, come because you love singing, the more the merrier.

  We perform vocal healing rituals. We sing through the colors of the rainbow. We sing in circles. We sing on the floor. We sing for aerialists flying through the sky. We hug our own shadows while singing Soundgarten. We are irreverent and we like to try new things.

  What will we sound like together? Let’s feel things. Singing together can be closer than touching. We are a cult dedicated to the truthgasmic song of our own souls. For more info on Voice Cult, please visit our website: www.voicecult.org

  ::::: Daisy Press :::::

  Daisy Press is the head priestess of our Voice Cult. She is a prominent interpreter of experimental classical music in the US and Europe. As the principal singer at the House of Yes, she has most likely brought you to tears and perhaps to your knees in Ketamine: the Musical, The Xmas Spectacular and many more.

  As a vibrant and compassionate teacher, Daisy utilizes a powerful synergistic mix of Western classical/pop vocal technique, sound healing, and borrows from North Indian ragas to coax her students into a fully-embodied, joyful manifestation of their vocal, emotional, and spiritual potential. To share a room with her is already a healing magical experience, to sing with her is a rare privilege.

  The suggested donation, to be offered at the time of the event, is $10. No one will be turned away for lack of funds.

  // ALL AGES WELCOME //

  Doors at 1:30PM | Singing starts at 2PM


  ::::::: FAQ :::::::

  Q: Is Voice Cult really a cult?

  A:

  ::::::: Community and Accessibility :::::::

  This is a space for everyone to feel welcome and loved. Racism, sexism, ableism, ageism, homophobia, transphobia, xenophobia will not be tolerated at our House. All entrances and spaces within the venue are single-level and handicap accessible. Gender neutral bathrooms are easily located in the main room.

",
  venue_name: "House of Yes",
  venue_address: "2 Wyckoff Avenue, Brooklyn, NY 11237",
  ticket_price: 10,
  tickets_available: 75,
  organizer_id: demo.id,
})
