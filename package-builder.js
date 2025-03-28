// Package data with all event types, service types, base packages, and add-ons
// MODIFIED Photography package features based on user request
const packageData = {
  eventTypes: [
    {
      id: "wedding",
      name: "Wedding",
      description: "Capture every moment of your special day",
      imageUrl: "https://lightroom.adobe.com/shares/8cd4e1f5e3f1495c83b0458764165dba/albums/99ecf4af329b450ab1619150d0022051/assets/38b0f7c21cbf40f780a30bee3588519e"
    },
    {
      id: "small-event",
      name: "Small Event",
      description: "Perfect for birthdays, parties, and gatherings",
      imageUrl: "https://lightroom.adobe.com/shares/8cd4e1f5e3f1495c83b0458764165dba/albums/99ecf4af329b450ab1619150d0022051/assets/7be25ce077b14b5db433b5b5f383d6d6"
    },
    {
      id: "production",
      name: "Production",
      description: "Commercial, product, and promotional content",
      imageUrl: "https://lightroom.adobe.com/shares/8cd4e1f5e3f1495c83b0458764165dba/albums/99ecf4af329b450ab1619150d0022051/assets/8c8ebe987b0741dd82cff0497d33d183"
    },
    {
      id: "portrait",
      name: "Portrait Session",
      description: "Individual or family portrait photography",
      imageUrl: "https://lightroom.adobe.com/shares/8cd4e1f5e3f1495c83b0458764165dba/albums/99ecf4af329b450ab1619150d0022051/assets/8c8ebe987b0741dd82cff0497d33d183"
    }
  ],
  serviceTypes: [
    {
      id: "photography",
      name: "Photography",
      description: "Professional photography services",
      imageUrl: "https://lightroom.adobe.com/shares/8cd4e1f5e3f1495c83b0458764165dba/albums/99ecf4af329b450ab1619150d0022051/assets/38b0f7c21cbf40f780a30bee3588519e"
    },
    {
      id: "videography",
      name: "Videography",
      description: "Professional videography services",
      imageUrl: "https://lightroom.adobe.com/shares/8cd4e1f5e3f1495c83b0458764165dba/albums/99ecf4af329b450ab1619150d0022051/assets/7be25ce077b14b5db433b5b5f383d6d6"
    },
    {
      id: "both",
      name: "Photography & Videography",
      description: "Comprehensive photo and video coverage",
      imageUrl: "https://lightroom.adobe.com/shares/8cd4e1f5e3f1495c83b0458764165dba/albums/99ecf4af329b450ab1619150d0022051/assets/38b0f7c21cbf40f780a30bee3588519e"
    }
  ],
  packages: {
    "wedding-photography": [
      {
        id: "basic",
        name: "Essential",
        price: 1200,
        description: "Perfect for intimate weddings with essential coverage",
        features: [
          "6 hours of coverage",
          "1 photographer",
          "Online gallery",
          "100+ edited digital images",
          "Print release"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 2000,
        description: "Our most popular package with comprehensive coverage",
        features: [
          "8 hours of coverage",
          "2 photographers",
          "Engagement session",
          "Online gallery",
          "300+ edited digital images",
          "Print release",
          "Wedding album (8x8, 20 pages)"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 3500,
        description: "Complete coverage with premium products and services",
        features: [
          "10 hours of coverage",
          "2 photographers",
          "Engagement session",
          "Bridal session",
          "Online gallery",
          "500+ edited digital images",
          "Print release",
          "Premium wedding album (10x10, 30 pages)",
          "2 parent albums",
          "16x20 canvas print"
        ]
      }
    ],
    "wedding-videography": [
      {
        id: "basic",
        name: "Essential",
        price: 1500,
        description: "Capture the key moments of your special day",
        features: [
          "6 hours of coverage",
          "1 videographer",
          "3-5 minute highlight film",
          "Digital delivery",
          "1 revision"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 2500,
        description: "Comprehensive video coverage of your wedding day",
        features: [
          "8 hours of coverage",
          "2 videographers",
          "5-7 minute highlight film",
          "30-minute feature film",
          "Digital delivery",
          "2 revisions",
          "Drone footage (weather permitting)"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 4000,
        description: "Premium video coverage with all the extras",
        features: [
          "10 hours of coverage",
          "2 videographers",
          "7-10 minute highlight film",
          "60-minute feature film",
          "Raw footage of ceremony and speeches",
          "Digital delivery",
          "3 revisions",
          "Drone footage (weather permitting)",
          "Same-day edit for reception viewing"
        ]
      }
    ],
    "wedding-both": [
      {
        id: "basic",
        name: "Essential",
        price: 2500,
        description: "Essential photo and video coverage for your wedding",
        features: [
          "6 hours of coverage",
          "1 photographer",
          "1 videographer",
          "100+ edited digital images",
          "3-5 minute highlight film",
          "Online gallery",
          "Digital delivery",
          "Print release",
          "1 revision (video)"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 4000,
        description: "Our most popular combined package",
        features: [
          "8 hours of coverage",
          "2 photographers",
          "2 videographers",
          "Engagement session",
          "300+ edited digital images",
          "5-7 minute highlight film",
          "30-minute feature film",
          "Online gallery",
          "Digital delivery",
          "Print release",
          "Wedding album (8x8, 20 pages)",
          "2 revisions (video)",
          "Drone footage (weather permitting)"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 7000,
        description: "The ultimate wedding photo and video experience",
        features: [
          "10 hours of coverage",
          "2 photographers",
          "2 videographers",
          "Engagement session",
          "Bridal session",
          "500+ edited digital images",
          "7-10 minute highlight film",
          "60-minute feature film",
          "Raw footage of ceremony and speeches",
          "Online gallery",
          "Digital delivery",
          "Print release",
          "Premium wedding album (10x10, 30 pages)",
          "2 parent albums",
          "16x20 canvas print",
          "3 revisions (video)",
          "Drone footage (weather permitting)",
          "Same-day edit for reception viewing"
        ]
      }
    ],
    "small-event-photography": [
      {
        id: "basic",
        name: "Essential",
        price: 400,
        description: "Perfect for small gatherings and parties",
        features: [
          "2 hours of coverage",
          "1 photographer",
          "Online gallery",
          "50+ edited digital images",
          "Print release"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 700,
        description: "Comprehensive coverage for your special event",
        features: [
          "4 hours of coverage",
          "1 photographer",
          "Online gallery",
          "100+ edited digital images",
          "Print release",
          "8x8 photo book (10 pages)"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 1200,
        description: "Premium coverage for important celebrations",
        features: [
          "6 hours of coverage",
          "1 photographer",
          "Online gallery",
          "200+ edited digital images",
          "Print release",
          "10x10 photo book (20 pages)",
          "16x20 mounted print"
        ]
      }
    ],
    "small-event-videography": [
      {
        id: "basic",
        name: "Essential",
        price: 500,
        description: "Capture the key moments of your event",
        features: [
          "2 hours of coverage",
          "1 videographer",
          "2-3 minute highlight film",
          "Digital delivery",
          "1 revision"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 900,
        description: "Comprehensive video coverage of your event",
        features: [
          "4 hours of coverage",
          "1 videographer",
          "3-5 minute highlight film",
          "15-minute feature film",
          "Digital delivery",
          "2 revisions"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 1500,
        description: "Premium video coverage for special celebrations",
        features: [
          "6 hours of coverage",
          "2 videographers",
          "5-7 minute highlight film",
          "30-minute feature film",
          "Digital delivery",
          "3 revisions",
          "Drone footage (weather permitting)"
        ]
      }
    ],
    "small-event-both": [
      {
        id: "basic",
        name: "Essential",
        price: 800,
        description: "Essential photo and video coverage for your event",
        features: [
          "2 hours of coverage",
          "1 photographer",
          "1 videographer",
          "50+ edited digital images",
          "2-3 minute highlight film",
          "Online gallery",
          "Digital delivery",
          "Print release",
          "1 revision (video)"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 1500,
        description: "Comprehensive photo and video coverage",
        features: [
          "4 hours of coverage",
          "1 photographer",
          "1 videographer",
          "100+ edited digital images",
          "3-5 minute highlight film",
          "15-minute feature film",
          "Online gallery",
          "Digital delivery",
          "Print release",
          "8x8 photo book (10 pages)",
          "2 revisions (video)"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 2500,
        description: "Premium photo and video coverage for special celebrations",
        features: [
          "6 hours of coverage",
          "1 photographer",
          "2 videographers",
          "200+ edited digital images",
          "5-7 minute highlight film",
          "30-minute feature film",
          "Online gallery",
          "Digital delivery",
          "Print release",
          "10x10 photo book (20 pages)",
          "16x20 mounted print",
          "3 revisions (video)",
          "Drone footage (weather permitting)"
        ]
      }
    ],
    "production-photography": [
      {
        id: "basic",
        name: "Essential",
        price: 500,
        description: "Basic product or promotional photography",
        features: [
          "2 hours of studio time",
          "1 photographer",
          "10 final edited images",
          "Digital delivery",
          "Commercial usage rights"
        ]
      },
      {
        id: "standard",
        name: "Professional",
        price: 1000,
        description: "Comprehensive product or promotional photography",
        features: [
          "4 hours of studio time",
          "1 photographer",
          "20 final edited images",
          "Digital delivery",
          "Commercial usage rights",
          "Basic retouching",
          "Multiple setups"
        ]
      },
      {
        id: "premium",
        name: "Enterprise",
        price: 2000,
        description: "Premium commercial photography package",
        features: [
          "8 hours of studio time",
          "1 photographer",
          "1 assistant",
          "40 final edited images",
          "Digital delivery",
          "Commercial usage rights",
          "Advanced retouching",
          "Multiple setups",
          "Location scouting",
          "Props and styling consultation"
        ]
      }
    ],
    "production-videography": [
      {
        id: "basic",
        name: "Essential",
        price: 800,
        description: "Basic promotional or product video",
        features: [
          "4 hours of filming",
          "1 videographer",
          "30-60 second final video",
          "Digital delivery",
          "Commercial usage rights",
          "2 revisions"
        ]
      },
      {
        id: "standard",
        name: "Professional",
        price: 1500,
        description: "Comprehensive promotional video production",
        features: [
          "8 hours of filming",
          "1 videographer",
          "60-90 second final video",
          "Digital delivery",
          "Commercial usage rights",
          "3 revisions",
          "Basic motion graphics",
          "Licensed music"
        ]
      },
      {
        id: "premium",
        name: "Enterprise",
        price: 3000,
        description: "Premium commercial video production",
        features: [
          "Full day of filming (10 hours)",
          "2 videographers",
          "90-120 second main video",
          "3 additional 15-30 second cuts for social media",
          "Digital delivery",
          "Commercial usage rights",
          "Unlimited revisions",
          "Custom motion graphics",
          "Licensed music",
          "Professional voiceover",
          "Drone footage (if applicable)"
        ]
      }
    ],
    "production-both": [
      {
        id: "basic",
        name: "Essential",
        price: 1200,
        description: "Basic photo and video for commercial use",
        features: [
          "4 hours of studio/filming time",
          "1 photographer/videographer",
          "10 final edited images",
          "30-60 second final video",
          "Digital delivery",
          "Commercial usage rights",
          "2 revisions (video)"
        ]
      },
      {
        id: "standard",
        name: "Professional",
        price: 2200,
        description: "Comprehensive commercial photo and video package",
        features: [
          "8 hours of studio/filming time",
          "1 photographer",
          "1 videographer",
          "20 final edited images",
          "60-90 second final video",
          "Digital delivery",
          "Commercial usage rights",
          "Basic retouching (photos)",
          "3 revisions (video)",
          "Basic motion graphics",
          "Licensed music",
          "Multiple setups"
        ]
      },
      {
        id: "premium",
        name: "Enterprise",
        price: 4500,
        description: "Premium commercial photo and video production",
        features: [
          "Full day of studio/filming (10 hours)",
          "1 photographer",
          "2 videographers",
          "1 assistant",
          "40 final edited images",
          "90-120 second main video",
          "3 additional 15-30 second cuts for social media",
          "Digital delivery",
          "Commercial usage rights",
          "Advanced retouching (photos)",
          "Unlimited revisions (video)",
          "Custom motion graphics",
          "Licensed music",
          "Professional voiceover",
          "Drone footage (if applicable)",
          "Location scouting",
          "Props and styling consultation"
        ]
      }
    ],
    "portrait-photography": [
      {
        id: "basic",
        name: "Essential",
        price: 200,
        description: "Perfect for individuals or couples",
        features: [
          "1 hour session",
          "1 location",
          "1 outfit change",
          "Online gallery",
          "10 edited digital images",
          "Print release"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 350,
        description: "Ideal for individuals, couples, or small families",
        features: [
          "1.5 hour session",
          "2 locations",
          "2 outfit changes",
          "Online gallery",
          "20 edited digital images",
          "Print release",
          "8x10 mounted print"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 600,
        description: "Comprehensive portrait session for families or groups",
        features: [
          "2 hour session",
          "Multiple locations",
          "3 outfit changes",
          "Online gallery",
          "30 edited digital images",
          "Print release",
          "8x8 photo book (10 pages)",
          "11x14 mounted print",
          "Professional hair and makeup consultation"
        ]
      }
    ],
    "portrait-videography": [
      {
        id: "basic",
        name: "Essential",
        price: 300,
        description: "Basic portrait video session",
        features: [
          "1 hour session",
          "1 location",
          "1-2 minute stylized video",
          "Digital delivery",
          "2 revisions"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 500,
        description: "Comprehensive portrait video session",
        features: [
          "1.5 hour session",
          "2 locations",
          "2-3 minute stylized video",
          "Digital delivery",
          "3 revisions",
          "Licensed music"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 800,
        description: "Premium portrait video experience",
        features: [
          "2 hour session",
          "Multiple locations",
          "3-4 minute main stylized video",
          "Additional 30-second social media cut",
          "Digital delivery",
          "Unlimited revisions",
          "Licensed music",
          "Drone footage (weather permitting)",
          "Professional hair and makeup consultation"
        ]
      }
    ],
    "portrait-both": [
      {
        id: "basic",
        name: "Essential",
        price: 450,
        description: "Basic portrait photo and video session",
        features: [
          "1 hour session",
          "1 location",
          "1 outfit change",
          "10 edited digital images",
          "1-2 minute stylized video",
          "Online gallery",
          "Digital delivery",
          "Print release",
          "2 revisions (video)"
        ]
      },
      {
        id: "standard",
        name: "Classic",
        price: 750,
        description: "Comprehensive portrait photo and video session",
        features: [
          "1.5 hour session",
          "2 locations",
          "2 outfit changes",
          "20 edited digital images",
          "2-3 minute stylized video",
          "Online gallery",
          "Digital delivery",
          "Print release",
          "8x10 mounted print",
          "3 revisions (video)",
          "Licensed music"
        ]
      },
      {
        id: "premium",
        name: "Luxury",
        price: 1200,
        description: "Premium portrait photo and video experience",
        features: [
          "2 hour session",
          "Multiple locations",
          "3 outfit changes",
          "30 edited digital images",
          "3-4 minute main stylized video",
          "Additional 30-second social media cut",
          "Online gallery",
          "Digital delivery",
          "Print release",
          "8x8 photo book (10 pages)",
          "11x14 mounted print",
          "Unlimited revisions (video)",
          "Licensed music",
          "Drone footage (weather permitting)",
          "Professional hair and makeup consultation"
        ]
      }
    ]
  },
  addOns: {
    photography: [
      {
        id: "engagement-session",
        name: "Engagement Session",
        price: 300,
        description: "1-hour engagement photo session",
        category: "Pre-Wedding",
        compatibleEvents: ["wedding"]
      },
      {
        id: "bridal-session",
        name: "Bridal Session",
        price: 350,
        description: "1-hour bridal portrait session",
        category: "Pre-Wedding",
        compatibleEvents: ["wedding"]
      },
      {
        id: "boudoir-session",
        name: "Boudoir Session",
        price: 400,
        description: "1-hour private boudoir photo session",
        category: "Pre-Wedding",
        compatibleEvents: ["wedding"]
      },
      {
        id: "rehearsal-dinner",
        name: "Rehearsal Dinner Coverage",
        price: 500,
        description: "2 hours of rehearsal dinner photography",
        category: "Pre-Wedding",
        compatibleEvents: ["wedding"]
      },
      {
        id: "second-photographer",
        name: "Additional Photographer",
        price: 500,
        description: "Second photographer for your event",
        category: "Day-Of",
        compatibleEvents: ["wedding", "small-event"]
      },
      {
        id: "extra-hour-photo",
        name: "Extra Hour of Coverage",
        price: 250,
        description: "Add an extra hour of photography coverage",
        category: "Day-Of",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "photo-booth",
        name: "Photo Booth",
        price: 600,
        description: "3-hour photo booth with props and unlimited prints",
        category: "Day-Of",
        compatibleEvents: ["wedding", "small-event"]
      },
      {
        id: "polaroid-station",
        name: "Polaroid Guest Station",
        price: 300,
        description: "Polaroid camera station for guests with 100 films",
        category: "Day-Of",
        compatibleEvents: ["wedding", "small-event"]
      },
      {
        id: "premium-album-upgrade",
        name: "Premium Album Upgrade",
        price: 300,
        description: "Upgrade to premium leather album with 10 additional pages",
        category: "Products",
        compatibleEvents: ["wedding", "small-event", "portrait"]
      },
      {
        id: "parent-albums",
        name: "Parent Albums (Set of 2)",
        price: 500,
        description: "Two 6x6 duplicate parent albums",
        category: "Products",
        compatibleEvents: ["wedding"]
      },
      {
        id: "canvas-print",
        name: "Large Canvas Print",
        price: 250,
        description: "16x20 canvas print of your favorite image",
        category: "Products",
        compatibleEvents: ["wedding", "small-event", "portrait"]
      },
      {
        id: "metal-print",
        name: "Metal Print",
        price: 300,
        description: "16x20 metal print of your favorite image",
        category: "Products",
        compatibleEvents: ["wedding", "small-event", "portrait"]
      },
      {
        id: "additional-edits",
        name: "Additional Edited Images",
        price: 200,
        description: "50 additional fully edited images",
        category: "Digital",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "expedited-delivery",
        name: "Expedited Delivery",
        price: 300,
        description: "Receive your edited photos within 2 weeks",
        category: "Digital",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "raw-files",
        name: "RAW Files",
        price: 400,
        description: "All unedited RAW files from your session",
        category: "Digital",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      }
    ],
    videography: [
      {
        id: "engagement-video",
        name: "Engagement Video",
        price: 500,
        description: "1-2 minute stylized engagement video",
        category: "Pre-Wedding",
        compatibleEvents: ["wedding"]
      },
      {
        id: "rehearsal-video",
        name: "Rehearsal Dinner Coverage",
        price: 600,
        description: "2 hours of rehearsal dinner videography",
        category: "Pre-Wedding",
        compatibleEvents: ["wedding"]
      },
      {
        id: "drone-footage",
        name: "Drone Footage",
        price: 400,
        description: "Aerial footage of your venue and event (weather permitting)",
        category: "Day-Of",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "second-videographer",
        name: "Additional Videographer",
        price: 600,
        description: "Second videographer for your event",
        category: "Day-Of",
        compatibleEvents: ["wedding", "small-event", "production"]
      },
      {
        id: "extra-hour-video",
        name: "Extra Hour of Coverage",
        price: 300,
        description: "Add an extra hour of videography coverage",
        category: "Day-Of",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "live-streaming",
        name: "Live Streaming Service",
        price: 800,
        description: "Live stream your event for remote guests",
        category: "Day-Of",
        compatibleEvents: ["wedding", "small-event"]
      },
      {
        id: "same-day-edit",
        name: "Same-Day Edit",
        price: 800,
        description: "3-5 minute highlight film for reception viewing",
        category: "Day-Of",
        compatibleEvents: ["wedding"]
      },
      {
        id: "documentary-edit",
        name: "Documentary Edit",
        price: 700,
        description: "90-120 minute documentary-style film of your entire event",
        category: "Products",
        compatibleEvents: ["wedding"]
      },
      {
        id: "social-media-cuts",
        name: "Social Media Cuts",
        price: 300,
        description: "3 additional 30-second cuts optimized for social media",
        category: "Products",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "usb-package",
        name: "Custom USB Package",
        price: 200,
        description: "Custom wooden USB with your films in a gift box",
        category: "Products",
        compatibleEvents: ["wedding", "small-event", "portrait"]
      },
      {
        id: "raw-footage-video",
        name: "RAW Footage",
        price: 500,
        description: "All unedited footage from your event",
        category: "Digital",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "expedited-video",
        name: "Expedited Delivery",
        price: 400,
        description: "Receive your edited video within 4 weeks",
        category: "Digital",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "additional-revision",
        name: "Additional Revisions",
        price: 200,
        description: "3 additional rounds of revisions",
        category: "Digital",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "licensed-music",
        name: "Premium Licensed Music",
        price: 150,
        description: "Premium licensed music for your video",
        category: "Digital",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      }
    ],
    both: [
      {
        id: "engagement-both",
        name: "Engagement Photo & Video",
        price: 700,
        description: "1-hour photo session with 1-2 minute stylized video",
        category: "Pre-Wedding",
        compatibleEvents: ["wedding"]
      },
      {
        id: "rehearsal-both",
        name: "Rehearsal Dinner Coverage",
        price: 900,
        description: "2 hours of rehearsal dinner photo and video coverage",
        category: "Pre-Wedding",
        compatibleEvents: ["wedding"]
      },
      {
        id: "extra-hour-both",
        name: "Extra Hour of Coverage",
        price: 450,
        description: "Add an extra hour of photo and video coverage",
        category: "Day-Of",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "premium-bundle",
        name: "Premium Product Bundle",
        price: 800,
        description: "Premium album, canvas print, and custom USB package",
        category: "Products",
        compatibleEvents: ["wedding", "small-event", "portrait"]
      },
      {
        id: "expedited-both",
        name: "Expedited Delivery Bundle",
        price: 600,
        description: "Expedited delivery for both photo and video",
        category: "Digital",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      }
    ]
  }
};

// Current state of the package builder
let currentState = {
  step: 1,
  eventType: null,
  serviceType: null,
  basePackage: null,
  selectedAddOns: [],
  viewMode: "card"
};

// Initialize the package builder
document.addEventListener("DOMContentLoaded", function() {
  initializeEventTypes();
  setupFormSubmission();
});

// Function to scroll to the package builder section
function scrollToBuilder() {
  const builderSection = document.getElementById("package-builder-section");
  builderSection.scrollIntoView({ behavior: "smooth" });
}

// Initialize event types
function initializeEventTypes() {
  const eventTypeGrid = document.getElementById("event-type-grid");
  eventTypeGrid.innerHTML = "";

  packageData.eventTypes.forEach(eventType => {
    const card = createSelectionCard(eventType, selectEventType);
    eventTypeGrid.appendChild(card);
  });
}

// Initialize service types based on selected event type
function initializeServiceTypes() {
  const serviceTypeGrid = document.getElementById("service-type-grid");
  serviceTypeGrid.innerHTML = "";

  packageData.serviceTypes.forEach(serviceType => {
    const card = createSelectionCard(serviceType, selectServiceType);
    serviceTypeGrid.appendChild(card);
  });

  document.getElementById("selected-event-name").textContent = currentState.eventType.name;
}

// Initialize base packages based on selected event and service types
function initializeBasePackages() {
  const packageKey = `${currentState.eventType.id}-${currentState.serviceType.id}`;
  const packages = packageData.packages[packageKey];

  document.getElementById("event-service-title").textContent = 
    `${currentState.eventType.name} ${currentState.serviceType.name}`;

  // Initialize card view
  const packageCardsView = document.getElementById("package-cards-view");
  packageCardsView.innerHTML = "";

  packages.forEach(pkg => {
    const card = createPackageCard(pkg);
    packageCardsView.appendChild(card);
  });

  // Initialize comparison view
  const packageComparisonView = document.getElementById("package-comparison-view");
  packageComparisonView.innerHTML = "";

  // Create comparison table
  const table = document.createElement("table");
  table.className = "comparison-table";
  
  // Create header row
  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>Features</th>";
  
  packages.forEach(pkg => {
    headerRow.innerHTML += `
      <th>
        <div class="package-header">
          <h3>${pkg.name}</h3>
          <p class="price">$${pkg.price}</p>
          <p class="description">${pkg.description}</p>
          <button class="select-button" data-id="${pkg.id}">Select</button>
        </div>
      </th>
    `;
  });
  
  table.appendChild(headerRow);
  
  // Find the maximum number of features across all packages
  const maxFeatures = Math.max(...packages.map(pkg => pkg.features.length));
  
  // Create feature rows
  for (let i = 0; i < maxFeatures; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `<td class="feature-label">Feature ${i + 1}</td>`;
    
    packages.forEach(pkg => {
      if (i < pkg.features.length) {
        row.innerHTML += `<td>${pkg.features[i]}</td>`;
      } else {
        row.innerHTML += `<td>-</td>`;
      }
    });
    
    table.appendChild(row);
  }
  
  packageComparisonView.appendChild(table);
  
  // Add event listeners to select buttons in comparison view
  const selectButtons = packageComparisonView.querySelectorAll(".select-button");
  selectButtons.forEach(button => {
    button.addEventListener("click", function() {
      const packageId = this.getAttribute("data-id");
      const selectedPackage = packages.find(pkg => pkg.id === packageId);
      selectBasePackage(selectedPackage);
    });
  });

  // Update the feature labels with actual feature names
  updateFeatureLabels(packages);
}

// Update feature labels in comparison table with actual feature names
function updateFeatureLabels(packages) {
  // Get all features from all packages
  const allFeatures = new Set();
  packages.forEach(pkg => {
    pkg.features.forEach(feature => {
      allFeatures.add(feature);
    });
  });
  
  // Convert to array and sort alphabetically
  const featuresList = Array.from(allFeatures).sort();
  
  // Get all feature label cells
  const featureLabels = document.querySelectorAll(".feature-label");
  
  // Update each label with the corresponding feature
  featureLabels.forEach((label, index) => {
    if (index < featuresList.length) {
      label.textContent = featuresList[index];
      
      // Update the corresponding cells in each package column
      const row = label.parentElement;
      const cells = row.querySelectorAll("td:not(.feature-label)");
      
      cells.forEach((cell, cellIndex) => {
        const pkg = packages[cellIndex];
        if (pkg.features.includes(featuresList[index])) {
          cell.innerHTML = '✓';
          cell.classList.add("feature-included");
        } else {
          cell.innerHTML = '—';
          cell.classList.add("feature-not-included");
        }
      });
    }
  });
}

// Initialize add-ons based on selected event, service, and base package
function initializeAddOns() {
  // Set selected package information
  document.getElementById("selected-package-name").textContent = currentState.basePackage.name;
  document.getElementById("selected-package-price").textContent = `$${currentState.basePackage.price}`;
  
  const featuresContainer = document.getElementById("selected-package-features");
  featuresContainer.innerHTML = "";
  
  currentState.basePackage.features.forEach(feature => {
    const featureItem = document.createElement("div");
    featureItem.className = "feature-item";
    featureItem.textContent = feature;
    featuresContainer.appendChild(featureItem);
  });

  // Update price information
  document.getElementById("base-package-price").textContent = `$${currentState.basePackage.price}`;
  updateTotalPrice();

  // Get compatible add-ons
  const serviceType = currentState.serviceType.id;
  const compatibleAddOns = packageData.addOns[serviceType].filter(
    addon => addon.compatibleEvents.includes(currentState.eventType.id)
  );

  // Get unique categories
  const categories = [...new Set(compatibleAddOns.map(addon => addon.category))];

  // Create category tabs
  const categoryTabsContainer = document.getElementById("category-tabs");
  categoryTabsContainer.innerHTML = "";

  categories.forEach((category, index) => {
    const tab = document.createElement("button");
    tab.className = "category-tab";
    if (index === 0) tab.classList.add("active");
    tab.textContent = category;
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      document.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
      // Add active class to clicked tab
      tab.classList.add("active");
      // Show add-ons for this category
      showAddOnsForCategory(category);
    });
    categoryTabsContainer.appendChild(tab);
  });

  // Show add-ons for the first category
  if (categories.length > 0) {
    showAddOnsForCategory(categories[0]);
  }
}

// Show add-ons for a specific category
function showAddOnsForCategory(category) {
  const serviceType = currentState.serviceType.id;
  const addOnsGrid = document.getElementById("add-ons-grid");
  addOnsGrid.innerHTML = "";

  const compatibleAddOns = packageData.addOns[serviceType].filter(
    addon => addon.compatibleEvents.includes(currentState.eventType.id) && addon.category === category
  );

  compatibleAddOns.forEach(addon => {
    const card = createAddOnCard(addon);
    addOnsGrid.appendChild(card);
  });
}

// Create a selection card (for event types and service types)
function createSelectionCard(item, selectCallback) {
  const card = document.createElement("div");
  card.className = "selection-card";
  card.setAttribute("data-id", item.id);

  const cardImage = document.createElement("div");
  cardImage.className = "card-image";
  cardImage.style.backgroundImage = `url(${item.imageUrl})`;

  const cardContent = document.createElement("div");
  cardContent.className = "card-content";

  const title = document.createElement("h3");
  title.textContent = item.name;

  const description = document.createElement("p");
  description.textContent = item.description;

  cardContent.appendChild(title);
  cardContent.appendChild(description);

  card.appendChild(cardImage);
  card.appendChild(cardContent);

  card.addEventListener("click", () => selectCallback(item));

  return card;
}

// Create a package card
function createPackageCard(pkg) {
  const card = document.createElement("div");
  card.className = "package-card";
  card.setAttribute("data-id", pkg.id);

  const cardHeader = document.createElement("div");
  cardHeader.className = "package-card-header";

  const title = document.createElement("h3");
  title.textContent = pkg.name;

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = `$${pkg.price}`;

  cardHeader.appendChild(title);
  cardHeader.appendChild(price);

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = pkg.description;

  const featuresList = document.createElement("ul");
  featuresList.className = "features-list";

  pkg.features.forEach(feature => {
    const featureItem = document.createElement("li");
    featureItem.textContent = feature;
    featuresList.appendChild(featureItem);
  });

  const selectButton = document.createElement("button");
  selectButton.className = "select-button";
  selectButton.textContent = "Select";
  selectButton.addEventListener("click", () => selectBasePackage(pkg));

  card.appendChild(cardHeader);
  card.appendChild(description);
  card.appendChild(featuresList);
  card.appendChild(selectButton);

  return card;
}

// Create an add-on card
function createAddOnCard(addon) {
  const card = document.createElement("div");
  card.className = "add-on-card";
  card.setAttribute("data-id", addon.id);

  const isSelected = currentState.selectedAddOns.some(a => a.id === addon.id);
  if (isSelected) {
    card.classList.add("selected");
  }

  const cardHeader = document.createElement("div");
  cardHeader.className = "add-on-card-header";

  const title = document.createElement("h3");
  title.textContent = addon.name;

  const price = document.createElement("p");
  price.className = "price";
  price.textContent = `$${addon.price}`;

  cardHeader.appendChild(title);
  cardHeader.appendChild(price);

  const description = document.createElement("p");
  description.className = "description";
  description.textContent = addon.description;

  const selectButton = document.createElement("button");
  selectButton.className = "select-button";
  selectButton.textContent = isSelected ? "Remove" : "Add";
  selectButton.addEventListener("click", () => toggleAddOn(addon, card, selectButton));

  card.appendChild(cardHeader);
  card.appendChild(description);
  card.appendChild(selectButton);

  return card;
}

// Select event type
function selectEventType(eventType) {
  // Update current state
  currentState.eventType = eventType;
  currentState.serviceType = null;
  currentState.basePackage = null;
  currentState.selectedAddOns = [];

  // Highlight selected card
  const cards = document.querySelectorAll(".selection-card");
  cards.forEach(card => {
    if (card.getAttribute("data-id") === eventType.id) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });

  // Initialize service types
  initializeServiceTypes();

  // Go to next step
  goToNextStep();
}

// Select service type
function selectServiceType(serviceType) {
  // Update current state
  currentState.serviceType = serviceType;
  currentState.basePackage = null;
  currentState.selectedAddOns = [];

  // Highlight selected card
  const cards = document.querySelectorAll(".selection-card");
  cards.forEach(card => {
    if (card.getAttribute("data-id") === serviceType.id) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });

  // Initialize base packages
  initializeBasePackages();

  // Go to next step
  goToNextStep();
}

// Select base package
function selectBasePackage(pkg) {
  // Update current state
  currentState.basePackage = pkg;
  currentState.selectedAddOns = [];

  // Highlight selected card in card view
  const cards = document.querySelectorAll(".package-card");
  cards.forEach(card => {
    if (card.getAttribute("data-id") === pkg.id) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });

  // Initialize add-ons
  initializeAddOns();

  // Go to next step
  goToNextStep();
}

// Toggle add-on selection
function toggleAddOn(addon, card, button) {
  const isSelected = currentState.selectedAddOns.some(a => a.id === addon.id);

  if (isSelected) {
    // Remove add-on
    currentState.selectedAddOns = currentState.selectedAddOns.filter(a => a.id !== addon.id);
    card.classList.remove("selected");
    button.textContent = "Add";
  } else {
    // Add add-on
    currentState.selectedAddOns.push(addon);
    card.classList.add("selected");
    button.textContent = "Remove";
  }

  // Update selected add-ons list
  updateSelectedAddOnsList();

  // Update total price
  updateTotalPrice();
}

// Update selected add-ons list
function updateSelectedAddOnsList() {
  const selectedAddOnsList = document.getElementById("selected-add-ons-list");
  selectedAddOnsList.innerHTML = "";

  if (currentState.selectedAddOns.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "No add-ons selected yet";
    selectedAddOnsList.appendChild(emptyMessage);
    return;
  }

  currentState.selectedAddOns.forEach(addon => {
    const addOnItem = document.createElement("div");
    addOnItem.className = "selected-add-on";

    const addOnInfo = document.createElement("div");
    addOnInfo.className = "add-on-info";

    const name = document.createElement("h4");
    name.textContent = addon.name;

    const price = document.createElement("p");
    price.textContent = `$${addon.price}`;

    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.innerHTML = "×";
    removeButton.addEventListener("click", () => {
      // Remove add-on
      currentState.selectedAddOns = currentState.selectedAddOns.filter(a => a.id !== addon.id);
      
      // Update UI
      updateSelectedAddOnsList();
      updateTotalPrice();
      
      // Update add-on card if visible
      const addOnCard = document.querySelector(`.add-on-card[data-id="${addon.id}"]`);
      if (addOnCard) {
        addOnCard.classList.remove("selected");
        const button = addOnCard.querySelector(".select-button");
        if (button) button.textContent = "Add";
      }
    });

    addOnInfo.appendChild(name);
    addOnInfo.appendChild(price);

    addOnItem.appendChild(addOnInfo);
    addOnItem.appendChild(removeButton);

    selectedAddOnsList.appendChild(addOnItem);
  });
}

// Update total price
function updateTotalPrice() {
  const basePrice = currentState.basePackage ? currentState.basePackage.price : 0;
  const addOnsPrice = currentState.selectedAddOns.reduce((total, addon) => total + addon.price, 0);
  const totalPrice = basePrice + addOnsPrice;

  document.getElementById("base-package-price").textContent = `$${basePrice}`;
  document.getElementById("add-ons-price").textContent = `$${addOnsPrice}`;
  document.getElementById("total-price").textContent = `$${totalPrice}`;
}

// Set view mode (card or comparison)
function setViewMode(mode) {
  currentState.viewMode = mode;

  const cardViewBtn = document.getElementById("card-view-btn");
  const comparisonViewBtn = document.getElementById("comparison-view-btn");
  const packageCardsView = document.getElementById("package-cards-view");
  const packageComparisonView = document.getElementById("package-comparison-view");

  if (mode === "card") {
    cardViewBtn.classList.add("active");
    comparisonViewBtn.classList.remove("active");
    packageCardsView.style.display = "grid";
    packageComparisonView.style.display = "none";
  } else {
    cardViewBtn.classList.remove("active");
    comparisonViewBtn.classList.add("active");
    packageCardsView.style.display = "none";
    packageComparisonView.style.display = "block";
  }
}

// Go to next step
function goToNextStep() {
  // Hide current step
  document.getElementById(`step-${currentState.step}`).style.display = "none";
  
  // Update step
  currentState.step++;
  
  // Show next step
  document.getElementById(`step-${currentState.step}`).style.display = "block";
  
  // Update progress bar
  updateProgressBar();

  // If going to summary step, update summary
  if (currentState.step === 5) {
    updateSummary();
  }
}

// Go to previous step
function goToPreviousStep() {
  // Hide current step
  document.getElementById(`step-${currentState.step}`).style.display = "none";
  
  // Update step
  currentState.step--;
  
  // Show previous step
  document.getElementById(`step-${currentState.step}`).style.display = "block";
  
  // Update progress bar
  updateProgressBar();
}

// Update progress bar
function updateProgressBar() {
  const steps = document.querySelectorAll(".progress-bar .step");
  
  steps.forEach((step, index) => {
    if (index + 1 < currentState.step) {
      step.classList.add("completed");
      step.classList.remove("active");
    } else if (index + 1 === currentState.step) {
      step.classList.add("active");
      step.classList.remove("completed");
    } else {
      step.classList.remove("active");
      step.classList.remove("completed");
    }
  });
}

// Update summary
function updateSummary() {
  // Event details
  document.getElementById("summary-event-type").textContent = currentState.eventType.name;
  document.getElementById("summary-service-type").textContent = currentState.serviceType.name;

  // Selected package
  document.getElementById("summary-package-name").textContent = currentState.basePackage.name;
  document.getElementById("summary-package-price").textContent = `$${currentState.basePackage.price}`;

  const packageFeatures = document.getElementById("summary-package-features");
  packageFeatures.innerHTML = "";

  currentState.basePackage.features.forEach(feature => {
    const featureItem = document.createElement("div");
    featureItem.className = "summary-feature";
    featureItem.textContent = feature;
    packageFeatures.appendChild(featureItem);
  });

  // Selected add-ons
  const addOnsContainer = document.getElementById("summary-add-ons");
  addOnsContainer.innerHTML = "";

  if (currentState.selectedAddOns.length === 0) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "No add-ons selected";
    addOnsContainer.appendChild(emptyMessage);
  } else {
    currentState.selectedAddOns.forEach(addon => {
      const addOnItem = document.createElement("div");
      addOnItem.className = "summary-add-on";

      const name = document.createElement("div");
      name.className = "summary-add-on-name";
      name.textContent = addon.name;

      const price = document.createElement("div");
      price.className = "summary-add-on-price";
      price.textContent = `$${addon.price}`;

      addOnItem.appendChild(name);
      addOnItem.appendChild(price);

      addOnsContainer.appendChild(addOnItem);
    });
  }

  // Total price
  const basePrice = currentState.basePackage.price;
  const addOnsPrice = currentState.selectedAddOns.reduce((total, addon) => total + addon.price, 0);
  const totalPrice = basePrice + addOnsPrice;

  document.getElementById("summary-base-price").textContent = `$${basePrice}`;
  document.getElementById("summary-addons-price").textContent = `$${addOnsPrice}`;
  document.getElementById("summary-total-price").textContent = `$${totalPrice}`;
}

// Setup form submission
function setupFormSubmission() {
  const bookingForm = document.getElementById("booking-form");
  
  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(bookingForm);
    const customerData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      eventDate: formData.get("event-date"),
      message: formData.get("message")
    };
    
    // Here you would typically send this data to your server
    console.log("Booking submitted:", {
      customer: customerData,
      package: {
        eventType: currentState.eventType,
        serviceType: currentState.serviceType,
        basePackage: currentState.basePackage,
        addOns: currentState.selectedAddOns,
        totalPrice: currentState.basePackage.price + 
                   currentState.selectedAddOns.reduce((total, addon) => total + addon.price, 0)
      }
    });
    
    // Show success message
    alert("Thank you for your booking request! We will contact you shortly to confirm your details.");
  });
}
