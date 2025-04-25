 // This file handles the functionality of the package builder


 // Package data with all event types, service types, base packages, and add-ons
 const packageData = {
   eventTypes: [
     {
       id: "wedding",
       name: "Wedding",
       description: "Capture every moment of your special day",
       imageUrl: "https://adobe.ly/3XWucju" // Kept original - replace if needed
       // Example replacement (Bridal): "https://files.fm/f/jjx9ay795r"
       // Example replacement (Engagement): "https://files.fm/f/jc6nsgmey4"
     },
     {
       id: "small-event", // Consider renaming if 'Graduation' is more specific
       name: "Small Event", // Consider renaming if 'Graduation' is more specific
       description: "Perfect for birthdays, parties, and gatherings",
       imageUrl: "https://files.fm/f/9pr7ptdm7z" // Using Graduation link
     },
     {
       id: "production", // Consider renaming if 'Business/Commercial' is better
       name: "Production", // Consider renaming if 'Business/Commercial' is better
       description: "Commercial, product, and promotional content",
       imageUrl: "https://files.fm/f/739xwz8kjp" // Using Business/Commercial link
       // Alternative: "https://files.fm/f/7q9hsapjas"
     },
     {
       id: "portrait",
       name: "Portrait Session",
       description: "Individual or family portrait photography",
       imageUrl: "https://files.fm/f/3njv5pn9n3" // Using Portrait link
       // Alternative 1: "https://files.fm/f/39qcddrbev"
       // Alternative 2: "https://files.fm/f/mqaesvw55s"
     }
     // Add more event types here if needed using other links
     // {
     //   id: "engagement",
     //   name: "Engagement Session",
     //   description: "Celebrate your engagement",
     //   imageUrl: "https://files.fm/f/jc6nsgmey4" // Example
     // },
     // {
     //   id: "bridal",
     //   name: "Bridal Session",
     //   description: "Capture stunning bridal portraits",
     //   imageUrl: "https://files.fm/f/jjx9ay795r" // Example
     // }
   ],
   serviceTypes: [
     {
       id: "photography",
       name: "Photography",
       description: "Professional photography services",
       imageUrl: "https://files.fm/f/jc6nsgmey4" // Using an Engagement link as example
       // Alternative Portrait: "https://files.fm/f/mqaesvw55s"
       // Alternative Specialty: "https://files.fm/f/2sasvmkwcu"
     },
     {
       id: "videography",
       name: "Videography",
       description: "Professional videography services",
       imageUrl: "https://files.fm/f/7q9hsapjas" // Using Business/Commercial/Production link
     },
     {
       id: "both",
       name: "Photography & Videography",
       description: "Comprehensive photo and video coverage",
       imageUrl: "https://files.fm/f/jjx9ay795r" // Using a Bridal link as example
       // Alternative Engagement: "https://files.fm/f/97p32vcnmm"
     }
   ],
   packages: {
     // --- WEDDING ---
     "wedding-photography": [ // No direct price match in image, keeping existing for now
       {
         id: "basic", name: "Essential", price: 1200, description: "Perfect for intimate weddings with essential coverage",
         features: ["6 hours of coverage", "1 photographer", "Online gallery", "100+ edited digital images", "Print release", "1 Outfit Change", "Minimum of 5 Detailed Photos"]
       },
       {
         id: "standard", name: "Classic", price: 339, description: "Ideal for individuals, couples, or small families",
         features: ["Up to 2 hour session", "2 Locations", "2 Outfit Changes", "Online gallery", "Min. 10 Detailed Photos", "All candids with access to cloud folder", "Print release"]
       },
       {
         id: "premium", name: "Luxury", price: 399, description: "Comprehensive portrait session for families or groups",
         features: ["Up to 3 hour session", "3 Locations", "3 Outfit Changes", "Online gallery", "Min. 15 Detailed Photos", "All candids with access to cloud folder", "Highlight reel", "Print release"]
       }
     ],
     "wedding-videography": [ // Prices and hours adjusted towards image A, B, C
       {
         id: "basic", name: "Package A", price: 1399, description: "Capture the key moments of your special day",
         features: ["4 hours of coverage", "1-2 videographers", "3-4 minute highlight film", "Drone Footage", "Digital delivery", "1 revision"] // Adjusted features/hours
       },
       {
         id: "standard", name: "Package B", price: 1999, description: "Comprehensive video coverage of your wedding day",
         features: ["6 hours of coverage", "2 videographers", "6 minute highlight film", "Drone Footage", "Digital delivery", "2 revisions"] // Adjusted features/hours
       },
       {
         id: "premium", name: "Package C", price: 2499, description: "Premium video coverage with extended time",
         features: ["8 hours of coverage", "2-3 videographers", "10-15 minute feature film", "Drone Footage", "Digital delivery", "3 revisions"] // Adjusted features/hours
       }
     ],
     "wedding-both": [ // Prices significantly reduced towards image A, B, C, S. Added S tier. Hours/features adjusted.
       {
         id: "basic", name: "Package A", price: 1499, description: "Essential photo and video coverage for your wedding",
         features: ["4 HR coverage", "Ceremony & Reception", "Consultation", "1 Cameras", "1 Camera Man", "5 min Video"] // Adjusted features/hours
       },
       {
         id: "standard", name: "Package B", price: 1999, description: "Popular combined package",
         features: ["8 HR coverage", "Ceremony, wedding party venue/dress/gathering & Reception", "Consultation", "2 Cameras", "2 Camera Men", "Drone Footage", "15 min Video"] // Adjusted features/hours
       },
       {
         id: "premium", name: "Package C", price: 3499, description: "Full coverage combined experience",
         features: ["Full Coverage (8hrs)", "Ceremony, wedding party venue/dress/gathering & Reception", "Consultation", "2-3 Cameras", "2 Camera Man", "Drone Footage", "Social Media Highlight reel", "Next Day wedding Trailer", "20 min Video"] // Adjusted features/hours
       },
       {
         id: "luxury", name: "Package S", price: 5000, description: "The ultimate wedding photo and video experience",
         features: ["Full Coverage (8hrs)", "Ceremony, wedding party venue/dress/gathering & Reception", "Consultation", "3 Cameras", "3 Camera Men", "Drone Footage", "Next Day wedding Trailer", "Social Media Highlight reel", "360 video of full ceremony", "1hr wedding Documentary"] // Added S tier based on image
       }
     ],
     // --- SMALL EVENT --- (Keeping existing for now, image prices seem geared to Portrait/Wedding)
     "small-event-photography": [
        {
         id: "basic", name: "Essential", price: 400, description: "Perfect for small gatherings and parties",
         features: ["2 hours of coverage", "1 photographer", "Online gallery", "50+ edited digital images", "Print release"]
       },
       {
         id: "standard", name: "Classic", price: 700, description: "Comprehensive coverage for your special event",
         features: ["4 hours of coverage", "1 photographer", "Online gallery", "100+ edited digital images", "Print release"]
       },
       {
         id: "premium", name: "Package C", price: 399, description: "3 hr Package",
         features: ["3 hrs coverage", "3 Outfit changes", "15 detailed photos", "all candids with access to cloud folder", "highlight reel"]
       }
     ],
     "small-event-videography": [
        {
         id: "basic", name: "Package A", price: 200, description: "Capture the key moments of your event",
         features: ["1 HR coverage", "1 location", "consultation", "1 Camera Man", "1-2 Min Highlight Video"]
       },
       {
         id: "standard", name: "Package B", price: 400, description: "Comprehensive video coverage of your event",
         features: ["3 Hr coverage", "2 Locations", "Consultation", "1 Camera Man", "Drone Footage", "5 min Highlight Video"]
       },
       {
         id: "premium", name: "Package C", price: 800, description: "Premium video coverage for special celebrations",
         features: ["6-(up to 8) HR coverage", "multiple locations", "consultation", "2 Cameras", "Drone Footage", "10-15 min Video"]
       }
     ],
     // NOTE: You had two "small-event-both" entries. I'm commenting out the second one which seemed like a duplicate/misplaced wedding section.
     // Review which "small-event-both" packages you actually want. I'm keeping the first one below.
     "small-event-both": [
        {
         id: "basic", name: "Essential", price: 800, description: "Essential photo and video coverage for your event",
         features: ["2 hours of coverage", "1 photographer", "1 videographer", "50+ edited digital images", "2-3 minute highlight film", "Online gallery", "Digital delivery", "Print release", "1 revision (video)"]
       },
        {
         id: "standard", name: "Package B", price: 1999, description: "Popular combined package", // Price seems high for small event compared to others, review needed
         features: ["4 hours of coverage", "1 photographer", "1 videographer", "100+ edited digital images", "3-5 minute highlight film", "15-minute feature film", "Online gallery", "Digital delivery", "Print release", "2 revisions (video)"]
       },
       {
         id: "premium", name: "Luxury", price: 2500, description: "Premium photo and video coverage for special celebrations", // Price seems high for small event compared to others, review needed
         features: ["6 hours of coverage", "1 photographer", "2 videographers", "200+ edited digital images", "5-7 minute highlight film", "30-minute feature film", "Online gallery", "Digital delivery", "Print release", "16x20 mounted print", "3 revisions (video)", "Drone footage (weather permitting)"]
       }
     ],
    /* // Commenting out the second "small-event-both" block - review if this was intended for weddings
         "small-event-both": [ // Prices significantly reduced towards image A, B, C, S. Added S tier. Hours/features adjusted.
       {
         id: "basic", name: "Package A", price: 999, description: "Essential photo and video coverage for your wedding",
         features: ["4 HR coverage", "Ceremony & Reception", "Consultation", "1 Cameras", "1 Camera Man", "5 min Video"] // Adjusted features/hours
       },
       {
         id: "standard", name: "Package B", price: 1999, description: "Popular combined package",
         features: ["8 HR coverage", "Ceremony, wedding party venue/dress/gathering & Reception", "Consultation", "2 Cameras", "2 Camera Men", "Drone Footage", "15 min Video"] // Adjusted features/hours
       },
       {
         id: "premium", name: "Package C", price: 3499, description: "Full coverage combined experience",
         features: ["Full Coverage (8hrs)", "Ceremony, wedding party venue/dress/gathering & Reception", "Consultation", "2-3 Cameras", "2 Camera Man", "Drone Footage", "Social Media Highlight reel", "Next Day wedding Trailer", "20 min Video"] // Adjusted features/hours
       },
       {
         id: "luxury", name: "Package S", price: 5000, description: "The ultimate wedding photo and video experience",
         features: ["Full Coverage (8hrs)", "Ceremony, wedding party venue/dress/gathering & Reception", "Consultation", "3 Cameras", "3 Camera Men", "Drone Footage", "Next Day wedding Trailer", "Social Media Highlight reel", "360 video of full ceremony", "1hr wedding Documentary"] // Added S tier based on image
       }
     ],
     */


     // --- PRODUCTION --- (Keeping existing for now)
     "production-photography": [
        {
         id: "basic", name: "Essential", price: 500, description: "Basic product or promotional photography",
         features: ["2 hours of studio time", "1 photographer", "10 final edited images", "Digital delivery", "Commercial usage rights"]
       },
       {
         id: "standard", name: "Professional", price: 1000, description: "Comprehensive product or promotional photography",
         features: ["4 hours of studio time", "1 photographer", "20 final edited images", "Digital delivery", "Commercial usage rights", "Basic retouching", "Multiple setups"]
       },
       {
         id: "premium", name: "Enterprise", price: 2000, description: "Premium commercial photography package",
         features: ["8 hours of studio time", "1 photographer", "1 assistant", "40 final edited images", "Digital delivery", "Commercial usage rights", "Advanced retouching", "Multiple setups", "Location scouting", "Props and styling consultation"]
       }
     ],
     "production-videography": [
        {
         id: "basic", name: "Essential", price: 800, description: "Basic promotional or product video",
         features: ["4 hours of filming", "1 videographer", "30-60 second final video", "Digital delivery", "Commercial usage rights", "2 revisions"]
       },
       {
         id: "standard", name: "Professional", price: 1500, description: "Comprehensive promotional video production",
         features: ["8 hours of filming", "1 videographer", "60-90 second final video", "Digital delivery", "Commercial usage rights", "3 revisions", "Basic motion graphics", "Licensed music"]
       },
       {
         id: "premium", name: "Enterprise", price: 3000, description: "Premium commercial video production",
         features: ["Full day of filming (10 hours)", "2 videographers", "90-120 second main video", "3 additional 15-30 second cuts for social media", "Digital delivery", "Commercial usage rights", "Unlimited revisions", "Custom motion graphics", "Licensed music", "Professional voiceover", "Drone footage (if applicable)"]
       }
     ],
     "production-both": [
        {
         id: "basic", name: "Essential", price: 1200, description: "Basic photo and video for commercial use",
         features: ["4 hours of studio/filming time", "1 photographer/videographer", "10 final edited images", "30-60 second final video", "Digital delivery", "Commercial usage rights", "2 revisions (video)"]
       },
       {
         id: "standard", name: "Professional", price: 2200, description: "Comprehensive commercial photo and video package",
         features: ["8 hours of studio/filming time", "1 photographer", "1 videographer", "20 final edited images", "60-90 second final video", "Digital delivery", "Commercial usage rights", "Basic retouching (photos)", "3 revisions (video)", "Basic motion graphics", "Licensed music", "Multiple setups"]
       },
       {
         id: "premium", name: "Enterprise", price: 4500, description: "Premium commercial photo and video production",
         features: ["Full day of studio/filming (10 hours)", "1 photographer", "2 videographers", "1 assistant", "40 final edited images", "90-120 second main video", "3 additional 15-30 second cuts for social media", "Digital delivery", "Commercial usage rights", "Advanced retouching (photos)", "Unlimited revisions (video)", "Custom motion graphics", "Licensed music", "Professional voiceover", "Drone footage (if applicable)", "Location scouting", "Props and styling consultation"]
       }
     ],
       // --- PORTRAIT ---
     "portrait-photography": [ // Prices and hours adjusted to match image A, B, C
       {
         id: "basic", name: "Package A", price: 249, description: "Perfect for individuals or couples",
         features: ["1 Hour session", "1 Location", "1 Outfit Change", "Online gallery", "Min. 5 Detailed Photos", "Min. 20 candids with access to cloud folder", "Print release"] // Adjusted features
       },
       {
         id: "standard", name: "Package B (2hr)", price: 339, description: "Ideal for individuals, couples, or small families",
         features: ["Up to 2 hour session", "2 Locations", "2 Outfit Changes", "Online gallery", "Min. 10 Detailed Photos", "All candids with access to cloud folder", "Print release"] // Adjusted features/hours
       },
       {
         id: "premium", name: "Package C (3hr)", price: 399, description: "Comprehensive portrait session for families or groups",
         features: ["Up to 3 hour session", "3 Locations", "3 Outfit Changes", "Online gallery", "Min. 15 Detailed Photos", "All candids with access to cloud folder", "Highlight reel", "Print release"] // Adjusted features/hours
       }
     ],
     "portrait-videography": [ // Keeping existing for now, image doesn't specify portrait video packages
        {
         id: "basic", name: "Essential", price: 300, description: "Basic portrait video session",
         features: ["1 hour session", "1 location", "1-2 minute stylized video", "Digital delivery", "2 revisions"]
       },
       {
         id: "standard", name: "Classic", price: 500, description: "Comprehensive portrait video session",
         features: ["1.5 hour session", "2 locations", "2-3 minute stylized video", "Digital delivery", "3 revisions", "Licensed music"]
       },
       {
         id: "premium", name: "Luxury", price: 800, description: "Premium portrait video experience",
         features: ["2 hour session", "Multiple locations", "3-4 minute main stylized video", "Additional 30-second social media cut", "Digital delivery", "Unlimited revisions", "Licensed music", "Drone footage (weather permitting)", "Short video reel (<60s)"]
       }
     ],
     "portrait-both": [ // Keeping existing for now
        {
         id: "basic", name: "Essential", price: 450, description: "Basic portrait photo and video session",
         features: ["1 hour session", "1 location", "1 outfit change", "10 edited digital images", "1-2 minute stylized video", "Online gallery", "Digital delivery", "Print release", "2 revisions (video)"]
       },
       {
         id: "standard", name: "Classic", price: 750, description: "Comprehensive portrait photo and video session",
         features: ["1.5 hour session", "2 locations", "2 outfit changes", "20 edited digital images", "2-3 minute stylized video", "Online gallery", "Digital delivery", "Print release", "8x10 mounted print", "3 revisions (video)", "Licensed music"]
       },
       {
         id: "premium", name: "Luxury", price: 1200, description: "Premium portrait photo and video experience",
         features: ["2 hour session", "Multiple locations", "3 outfit changes", "30 edited digital images", "3-4 minute main stylized video", "Additional 30-second social media cut", "Online gallery", "Digital delivery", "Print release", "11x14 mounted print", "Unlimited revisions (video)", "Licensed music", "Drone footage (weather permitting)", "Short video reel (<60s)"]
       }
     ]
   },
   addOns: {
     // --- PHOTOGRAPHY ADD-ONS ---
     photography: [
       { id: "engagement-session", name: "Engagement Session", price: 300, description: "1-hour engagement photo session", category: "Pre-Wedding", compatibleEvents: ["wedding"] },
       { id: "bridal-session", name: "Bridal Session", price: 350, description: "1-hour bridal portrait session", category: "Pre-Wedding", compatibleEvents: ["wedding"] },
       { id: "boudoir-session", name: "Boudoir Session", price: 400, description: "1-hour private boudoir photo session", category: "Pre-Wedding", compatibleEvents: ["wedding"] },
       { id: "rehearsal-dinner", name: "Rehearsal Dinner Coverage", price: 500, description: "2 hours of rehearsal dinner photography", category: "Pre-Wedding", compatibleEvents: ["wedding"] },
       { id: "second-photographer", name: "Additional Photographer", price: 500, description: "Second photographer for your event", category: "Day-Of", compatibleEvents: ["wedding", "small-event"] },
       { id: "extra-hour-photo", name: "Extra Hour of Coverage", price: 250, description: "Add an extra hour of photography coverage", category: "Day-Of", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       { id: "photo-booth", name: "Photo Booth", price: 600, description: "3-hour photo booth with props and unlimited prints", category: "Day-Of", compatibleEvents: ["wedding", "small-event"] },
       { id: "polaroid-station", name: "Polaroid Guest Station", price: 300, description: "Polaroid camera station for guests with 100 films", category: "Day-Of", compatibleEvents: ["wedding", "small-event"] },
       { id: "premium-album-upgrade", name: "Premium Album Upgrade", price: 300, description: "Upgrade to premium leather album with 10 additional pages", category: "Products", compatibleEvents: ["wedding", "small-event", "portrait"] },
       { id: "parent-albums", name: "Parent Albums (Set of 2)", price: 500, description: "Two 6x6 duplicate parent albums", category: "Products", compatibleEvents: ["wedding"] },
       { id: "canvas-print", name: "Large Canvas Print", price: 250, description: "16x20 canvas print of your favorite image", category: "Products", compatibleEvents: ["wedding", "small-event", "portrait"] },
       { id: "metal-print", name: "Metal Print", price: 300, description: "16x20 metal print of your favorite image", category: "Products", compatibleEvents: ["wedding", "small-event", "portrait"] },
       // *** NEW PRINT PACKAGES BASED ON IMAGE ***
       { id: "print-pkg-value", name: "Print Package - Value", price: 65, description: "Includes 2-8x10, 4-5x7, 4-4x5, 24 Wallets", category: "Products", compatibleEvents: ["wedding", "small-event", "portrait"] },
       { id: "print-pkg-a", name: "Print Package - A", price: 50, description: "Includes 1-8x10, 2-5x7, 2-4x5, 16 Wallets", category: "Products", compatibleEvents: ["wedding", "small-event", "portrait"] },
       { id: "print-pkg-b", name: "Print Package - B", price: 35, description: "Includes 1-8x10, 2-5x7, 12 Wallets", category: "Products", compatibleEvents: ["wedding", "small-event", "portrait"] },
       { id: "print-pkg-c", name: "Print Package - C", price: 25, description: "Includes 1-5x7, 2-4x5, 8 Wallets", category: "Products", compatibleEvents: ["wedding", "small-event", "portrait"] },
       { id: "print-pkg-digital", name: "Digital Only (No Prints)", price: 20, description: "Online access to digital files, no physical prints included", category: "Products", compatibleEvents: ["wedding", "small-event", "portrait"] },
       // *** MODIFIED BASED ON IMAGE ***
       { id: "additional-edits-std", name: "Additional Standard Edits", price: 10, description: "Per additional standard edited picture", category: "Digital", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       { id: "additional-edits-hq", name: "Additional High Quality Edits", price: 20, description: "Per additional high quality edited picture", category: "Digital", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       // *** Keep Existing Digital Add-ons (adjust prices if needed based on discussion) ***
       { id: "expedited-delivery", name: "Expedited Delivery", price: 99, description: "Receive rush edits within a week", category: "Digital", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       { id: "raw-files", name: "RAW Files", price: 75, description: "All unedited RAW files", category: "Digital", compatibleEvents: ["wedding", "small-event", "production", "portrait"] }
     ],
     // --- VIDEOGRAPHY ADD-ONS --- (Keeping existing for now, image doesn't detail video add-ons)
     videography: [
       { id: "engagement-video", name: "Engagement Video", price: 500, description: "1-2 minute stylized engagement video", category: "Pre-Wedding", compatibleEvents: ["wedding"] },
       { id: "rehearsal-video", name: "Rehearsal Dinner Coverage", price: 600, description: "2 hours of rehearsal dinner videography", category: "Pre-Wedding", compatibleEvents: ["wedding"] },
       { id: "drone-footage", name: "Drone Footage", price: 400, description: "Aerial footage of your venue and event (weather permitting)", category: "Day-Of", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       { id: "second-videographer", name: "Additional Videographer", price: 600, description: "Second videographer for your event", category: "Day-Of", compatibleEvents: ["wedding", "small-event", "production"] },
       { id: "extra-hour-video", name: "Extra Hour of Coverage", price: 300, description: "Add an extra hour of videography coverage", category: "Day-Of", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       { id: "live-streaming", name: "Live Streaming Service", price: 800, description: "Live stream your event for remote guests", category: "Day-Of", compatibleEvents: ["wedding", "small-event"] },
       { id: "same-day-edit", name: "Same-Day Edit", price: 800, description: "3-5 minute highlight film for reception viewing", category: "Day-Of", compatibleEvents: ["wedding"] },
       { id: "documentary-edit", name: "Documentary Edit", price: 700, description: "90-120 minute documentary-style film of your entire event", category: "Products", compatibleEvents: ["wedding"] },
       { id: "social-media-cuts", name: "Social Media Cuts", price: 300, description: "3 additional 30-second cuts optimized for social media", category: "Products", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       { id: "usb-package", name: "Custom USB Package", price: 200, description: "Custom wooden USB with your films in a gift box", category: "Products", compatibleEvents: ["wedding", "small-event", "portrait"] },
       { id: "raw-footage-video", name: "RAW Footage", price: 75, description: "All unedited RAW footage", category: "Digital", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       { id: "expedited-video", name: "Expedited Delivery", price: 99, description: "Receive rush edits within a week", category: "Digital", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       { id: "additional-revision", name: "Additional Revisions", price: 200, description: "3 additional rounds of revisions", category: "Digital", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       { id: "licensed-music", name: "Premium Licensed Music", price: 150, description: "Premium licensed music for your video", category: "Digital", compatibleEvents: ["wedding", "small-event", "production", "portrait"] }
     ],
     // --- BOTH ADD-ONS --- (Keeping existing for now, adjust if needed)
     both: [
       { id: "engagement-both", name: "Engagement Photo & Video", price: 700, description: "1-hour photo session with 1-2 minute stylized video", category: "Pre-Wedding", compatibleEvents: ["wedding"] },
       { id: "rehearsal-both", name: "Rehearsal Dinner Coverage", price: 900, description: "2 hours of rehearsal dinner photo and video coverage", category: "Pre-Wedding", compatibleEvents: ["wedding"] },
       { id: "extra-hour-both", name: "Extra Hour of Coverage", price: 450, description: "Add an extra hour of photo and video coverage", category: "Day-Of", compatibleEvents: ["wedding", "small-event", "production", "portrait"] },
       { id: "premium-bundle", name: "Premium Product Bundle", price: 800, description: "Premium album, canvas print, and custom USB package", category: "Products", compatibleEvents: ["wedding", "small-event", "portrait"] },
       { id: "expedited-both", name: "Expedited Delivery Bundle", price: 198, description: "Receive rush photo and video edits within a week", category: "Digital", compatibleEvents: ["wedding", "small-event", "production", "portrait"] }
     ]
   }
 };


 // --- GLOBAL STATE ---
 let currentState = {
   step: 1,
   eventType: null,
   serviceType: null,
   basePackage: null,
   selectedAddOns: [],
   viewMode: "card" // Default view mode
 };

 // --- DOM ELEMENTS (CACHE) ---
 // It's good practice to cache DOM elements you access frequently
 const domElements = {
     eventTypeGrid: document.getElementById("event-type-grid"),
     serviceTypeGrid: document.getElementById("service-type-grid"),
     selectedEventNameEl: document.getElementById("selected-event-name"),
     eventServiceTitleEl: document.getElementById("event-service-title"),
     packageCardsView: document.getElementById("package-cards-view"),
     packageComparisonView: document.getElementById("package-comparison-view"),
     cardViewBtn: document.getElementById("card-view-btn"),
     comparisonViewBtn: document.getElementById("comparison-view-btn"),
     selectedPackageNameEl: document.getElementById("selected-package-name"),
     selectedPackagePriceEl: document.getElementById("selected-package-price"),
     selectedPackageFeaturesContainer: document.getElementById("selected-package-features"),
     categoryTabsContainer: document.getElementById("category-tabs"),
     addOnsGrid: document.getElementById("add-ons-grid"),
     selectedAddOnsList: document.getElementById("selected-add-ons-list"),
     basePackagePriceEl: document.getElementById("base-package-price"),
     addOnsPriceEl: document.getElementById("add-ons-price"),
     totalPriceEl: document.getElementById("total-price"),
     summaryEventTypeEl: document.getElementById("summary-event-type"),
     summaryServiceTypeEl: document.getElementById("summary-service-type"),
     summaryPackageNameEl: document.getElementById("summary-package-name"),
     summaryPackagePriceEl: document.getElementById("summary-package-price"),
     summaryPackageFeaturesContainer: document.getElementById("summary-package-features"),
     summaryAddOnsContainer: document.getElementById("summary-add-ons"),
     summaryBasePriceEl: document.getElementById("summary-base-price"),
     summaryAddonsPriceEl: document.getElementById("summary-addons-price"),
     summaryTotalPriceEl: document.getElementById("summary-total-price"),
     bookingForm: document.getElementById("booking-form"),
     progressBarSteps: document.querySelectorAll(".progress-bar .step"),
     stepContainers: document.querySelectorAll('.package-builder .builder-content > div[id^="step-"]')
 };


 // --- INITIALIZATION ---
 document.addEventListener("DOMContentLoaded", function() {
   initializeEventTypes(); // Assumes this function correctly uses the imageUrl
   initializeServiceTypes(); // Add this if you have a similar function for service types
   setupFormSubmission();
   setupViewModeButtons();
   updateProgressBar(); // Set initial progress bar state
 });

// --- FUNCTIONS TO RENDER CONTENT (Add/Modify as needed) ---

// Example function to render event types (modify based on your actual implementation)
function initializeEventTypes() {
    if (!domElements.eventTypeGrid) return;
    domElements.eventTypeGrid.innerHTML = ''; // Clear existing content

    packageData.eventTypes.forEach(eventType => {
        const card = document.createElement('div');
        card.className = 'package-card selectable-card'; // Add classes as needed
        card.dataset.eventId = eventType.id;

        // Add click listener to handle selection
        card.addEventListener('click', () => selectEventType(eventType));

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${eventType.imageUrl}" alt="${eventType.name}" loading="lazy">
            </div>
            <div class="card-content">
                <h3>${eventType.name}</h3>
                <p>${eventType.description}</p>
            </div>
        `;
        domElements.eventTypeGrid.appendChild(card);
    });
}

// Example function to render service types (Add this or similar)
function initializeServiceTypes() {
    if (!domElements.serviceTypeGrid) return;
    domElements.serviceTypeGrid.innerHTML = ''; // Clear existing content

    packageData.serviceTypes.forEach(serviceType => {
        const card = document.createElement('div');
        card.className = 'package-card selectable-card'; // Add classes as needed
        card.dataset.serviceId = serviceType.id;

        // Add click listener to handle selection
        card.addEventListener('click', () => selectServiceType(serviceType));

        card.innerHTML = `
            <div class="card-image-container">
                <img src="${serviceType.imageUrl}" alt="${serviceType.name}" loading="lazy">
            </div>
            <div class="card-content">
                <h3>${serviceType.name}</h3>
                <p>${serviceType.description}</p>
            </div>
        `;
        domElements.serviceTypeGrid.appendChild(card);
    });
}

// --- EVENT HANDLING FUNCTIONS (Adapt based on your logic) ---

function selectEventType(eventType) {
    console.log("Selected Event Type:", eventType.name);
    currentState.eventType = eventType;
    // Add logic to highlight selected card, update state, move to next step etc.
    // Example: Update UI, then maybe call initializeServiceTypes() if that's step 2
    // Make sure your goToStep or similar function updates the UI display
    goToStep(2); // Example: move to step 2
}

function selectServiceType(serviceType) {
    console.log("Selected Service Type:", serviceType.name);
    currentState.serviceType = serviceType;
    // Add logic to highlight selected card, update state, load packages etc.
    // Example: Update UI, load base packages
    goToStep(3); // Example: move to step 3
}

// --- Other functions from your original script (goToStep, updateProgressBar, etc.) ---
// Make sure these functions exist and work as intended.
// Add stubs if they are missing and referenced.

function goToStep(stepNumber) {
    currentState.step = stepNumber;
    // Hide all step containers
    domElements.stepContainers.forEach(container => container.style.display = 'none');
    // Show the current step container
    const currentStepContainer = document.getElementById(`step-${stepNumber}`);
    if (currentStepContainer) {
        currentStepContainer.style.display = 'block';
    }
    updateProgressBar();

    // --- Populate Content Based on Step ---
    if (stepNumber === 2 && currentState.eventType) {
        // You might load service types here or just show them if pre-loaded
        if (domElements.selectedEventNameEl) {
            domElements.selectedEventNameEl.textContent = currentState.eventType.name;
        }
        // Ensure initializeServiceTypes() has been called or call it here if needed
    } else if (stepNumber === 3 && currentState.eventType && currentState.serviceType) {
        // Load base packages based on eventType and serviceType
        loadBasePackages();
        if (domElements.eventServiceTitleEl) {
             domElements.eventServiceTitleEl.textContent = `${currentState.eventType.name} - ${currentState.serviceType.name}`;
        }
    } else if (stepNumber === 4 && currentState.basePackage) {
        // Load add-ons based on the selected package/service type
        loadAddOns();
        displaySelectedPackage();
    } else if (stepNumber === 5 && currentState.basePackage) {
       // Build and display the final summary
       buildSummary();
    }
     // Add logic for other steps if necessary
}


function updateProgressBar() {
    domElements.progressBarSteps.forEach((stepEl, index) => {
        const stepNum = index + 1;
        if (stepNum < currentState.step) {
            stepEl.classList.add("completed");
            stepEl.classList.remove("active");
        } else if (stepNum === currentState.step) {
            stepEl.classList.add("active");
            stepEl.classList.remove("completed");
        } else {
            stepEl.classList.remove("active", "completed");
        }
    });
}


// --- Add dummy/placeholder functions if they are called but not defined ---
// These need to be implemented based on your app's logic

function loadBasePackages() {
    console.log("Loading base packages for:", currentState.eventType?.id, currentState.serviceType?.id);
    // TODO: Implement logic to find and display packages from packageData
    // using currentState.eventType.id and currentState.serviceType.id
    // Render them into domElements.packageCardsView and domElements.packageComparisonView
}

function setViewMode(mode) {
    console.log("Setting view mode to:", mode);
    currentState.viewMode = mode;
     if (!domElements.packageCardsView || !domElements.packageComparisonView || !domElements.cardViewBtn || !domElements.comparisonViewBtn) return;

    if (mode === 'card') {
        domElements.packageCardsView.style.display = 'grid'; // Or your default display for cards
        domElements.packageComparisonView.style.display = 'none';
        domElements.cardViewBtn.classList.add('active');
        domElements.comparisonViewBtn.classList.remove('active');
    } else if (mode === 'comparison') {
        domElements.packageCardsView.style.display = 'none';
        domElements.packageComparisonView.style.display = 'block'; // Or 'table' etc.
        domElements.cardViewBtn.classList.remove('active');
        domElements.comparisonViewBtn.classList.add('active');
         // You might need to call a function here to specifically build the comparison table
        // buildComparisonTable();
    }
     // Persist view mode preference if desired (e.g., using localStorage)
}


function loadAddOns() {
    console.log("Loading add-ons for:", currentState.serviceType?.id);
    // TODO: Implement logic to find and display relevant add-ons
    // from packageData.addOns based on currentState.serviceType.id
    // Render them into domElements.addOnsGrid, potentially using category tabs
}

function displaySelectedPackage() {
    console.log("Displaying selected package:", currentState.basePackage?.name);
    // TODO: Implement logic to show the details of the selected base package
    // in the add-ons step (e.g., populate domElements.selectedPackageNameEl, etc.)
}

function buildSummary() {
    console.log("Building summary");
    // TODO: Implement logic to populate the summary elements (domElements.summaryEventTypeEl, etc.)
    // based on the final currentState
}

 // --- SETUP EVENT LISTENERS ---
 function setupViewModeButtons() {
     if (domElements.cardViewBtn && domElements.comparisonViewBtn) {
         domElements.cardViewBtn.addEventListener("click", () => setViewMode('card'));
         domElements.comparisonViewBtn.addEventListener("click", () => setViewMode('comparison'));
     }
 }

 function setupFormSubmission() {
   if (!domElements.bookingForm) return;

   domElements.bookingForm.addEventListener("submit", function(e) {
     e.preventDefault(); // Prevent default form submission

     // --- Basic Validation ---
      if (!currentState.eventType || !currentState.serviceType || !currentState.basePackage) {
         alert("Please complete all package selection steps before submitting.");
         if (!currentState.eventType) goToStep(1);
         else if (!currentState.serviceType) goToStep(2);
         else if (!currentState.basePackage) goToStep(3);
         return;
     }

     const formData = new FormData(domElements.bookingForm);
     const customerData = {
       name: formData.get("name")?.trim(),
       email: formData.get("email")?.trim(),
       phone: formData.get("phone")?.trim(),
       eventDate: formData.get("event-date"),
       message: formData.get("message")?.trim()
     };

      // --- More Validation ---
     if (!customerData.name || !customerData.email || !customerData.phone || !customerData.eventDate) {
         alert("Please fill in all required contact and event date fields.");
         return;
     }
      if (!/^\S+@\S+\.\S+$/.test(customerData.email)) {
          alert("Please enter a valid email address.");
          return;
      }

     // Create email content (ensure basePackage is not null)
      if (!currentState.basePackage) {
         alert("Error: Base package not selected."); // Should not happen if initial validation passes
         return;
      }
     const { basePackage, selectedAddOns, eventType, serviceType } = currentState;
     const basePrice = basePackage.price;
     const addOnsPrice = selectedAddOns.reduce((total, addon) => total + addon.price, 0);
     const totalPrice = basePrice + addOnsPrice;

     const emailSubject = `New Package Builder Request - ${customerData.name}`;
     // Ensure eventType and serviceType are not null before accessing name
     const eventTypeName = eventType ? eventType.name : 'N/A';
     const serviceTypeName = serviceType ? serviceType.name : 'N/A';

     // Build Add-ons summary string
      let addOnsSummary = "None";
      if (selectedAddOns.length > 0) {
          addOnsSummary = selectedAddOns.map(addon => `- ${addon.name} ($${addon.price})`).join('\n ');
      }


     const emailBody = `
 A new package has been configured via the website:

 Customer Details:
 --------------------
 Name: ${customerData.name}
 Email: ${customerData.email}
 Phone: ${customerData.phone}
 Event Date: ${customerData.eventDate || 'Not specified'}
 Message: ${customerData.message || 'None'}

 Selected Package:
 --------------------
 Event Type: ${eventTypeName}
 Service Type: ${serviceTypeName}
 Base Package: ${basePackage.name} ($${basePrice})
 Features:
 ${basePackage.features.map(f => `- ${f}`).join('\n ')}

 Selected Add-Ons:
 --------------------
 ${addOnsSummary}

 Pricing:
 --------------------
 Base Package Price: $${basePrice.toFixed(2)}
 Add-Ons Total Price: $${addOnsPrice.toFixed(2)}
 Estimated Total Price: $${totalPrice.toFixed(2)}
 `;

     console.log("--- FORM SUBMISSION ---");
     console.log("Subject:", emailSubject);
     console.log("Body:", emailBody);

     // --- Replace with your actual form submission logic ---
     // e.g., using fetch() to send data to a backend server or an email service
     alert("Package details prepared (see console). Implement actual submission logic here.");

     // Optional: Reset state and go back to the first step after submission
     // resetBuilder();
     // goToStep(1);
   });
 }

 // --- UTILITY FUNCTIONS --- (Example: Add a reset function if needed)
 function resetBuilder() {
     currentState = {
         step: 1,
         eventType: null,
         serviceType: null,
         basePackage: null,
         selectedAddOns: [],
         viewMode: "card"
     };
     // Clear selections, summary fields, form fields, etc.
     // Example: If you have highlighting on cards, remove it
     document.querySelectorAll('.selectable-card.selected').forEach(card => card.classList.remove('selected'));
     if(domElements.bookingForm) domElements.bookingForm.reset();
     // Clear summary sections
     // ...
     console.log("Builder reset");
 }


