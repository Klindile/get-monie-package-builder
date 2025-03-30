// Package data with all event types, service types, base packages, and add-ons
// MODIFIED Photography package features based on user request
const packageData = {
  eventTypes: [
    {
      id: "wedding",
      name: "Wedding",
      description: "Capture every moment of your special day",
      imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "small-event",
      name: "Small Event",
      description: "Perfect for birthdays, parties, and gatherings",
      imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "production",
      name: "Production",
      description: "Commercial, product, and promotional content",
      imageUrl: "https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "portrait",
      name: "Portrait Session",
      description: "Individual or family portrait photography",
      imageUrl: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ],
  serviceTypes: [
    {
      id: "photography",
      name: "Photography",
      description: "Professional photography services",
      imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "videography",
      name: "Videography",
      description: "Professional videography services",
      imageUrl: "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "both",
      name: "Photography & Videography",
      description: "Comprehensive photo and video coverage",
      imageUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
          "Props and styling consultation",
          "Short Video Reels (under 60 secs)" // Added feature
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
          "8x10 photo book (10 pages)",
          "11x14 mounted print",
          "Short Video Reels (under 60 secs)" // Added feature
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
          "Short Video Reels (under 60 secs)" // Added feature
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
          "Short Video Reels (under 60 secs)" // Added feature
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
        price: 50, // Updated price
        description: "5 additional fully edited images", // Updated description
        category: "Digital",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "expedited-delivery",
        name: "Expedited Delivery",
        price: 99, // Updated price
        description: "Receive rush edits within a week", // Updated description
        category: "Digital",
        compatibleEvents: ["wedding", "small-event", "production", "portrait"]
      },
      {
        id: "raw-files",
        name: "RAW Files",
        price: 75, // Updated price
        description: "All unedited RAW files from your session", // Updated description
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
    `${currentState.eventType.name} ${currentState.serviceType.name