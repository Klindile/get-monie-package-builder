// --- START FILE: package-builder.js (FULL CODE WITH MODIFICATIONS) ---

// Package data with all event types, service types, base packages, and add-ons
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
      imageUrl: "images/prod.jpg" // <-- Make sure this path is correct
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
    // --- WEDDING ---
    "wedding-photography": [ // No direct price match in image, keeping existing for now
      {
        id: "basic", name: "Essential", price: 1200, description: "Perfect for intimate weddings with essential coverage",
        features: ["6 hours of coverage", "1 photographer", "Online gallery", "100+ edited digital images", "Print release"]
      },
      {
        id: "standard", name: "Classic", price: 2000, description: "Our most popular package with comprehensive coverage",
        features: ["8 hours of coverage", "2 photographers", "Engagement session", "Online gallery", "300+ edited digital images", "Print release", "Wedding album (8x8, 20 pages)"]
      },
      {
        id: "premium", name: "Luxury", price: 3500, description: "Complete coverage with premium products and services",
        features: ["10 hours of coverage", "2 photographers", "Engagement session", "Bridal session", "Online gallery", "500+ edited digital images", "Print release", "Premium wedding album (10x10, 30 pages)", "2 parent albums", "16x20 canvas print"]
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
        features: ["4 hours of coverage", "1 photographer", "1 videographer", "Edited digital images", "Highlight film (approx 5 min)", "Online gallery", "Digital delivery", "Print release", "Drone Footage (weather permitting)"] // Adjusted features/hours
      },
      {
        id: "standard", name: "Package B", price: 1999, description: "Popular combined package",
        features: ["6 hours of coverage", "1-2 photographers", "1-2 videographers", "Edited digital images", "Highlight Film", "Trailer within 48 hrs", "Online gallery", "Digital delivery", "Print release", "Drone footage (weather permitting)"] // Adjusted features/hours
      },
      {
        id: "premium", name: "Package C", price: 3499, description: "Full coverage combined experience",
        features: ["8 hours of coverage", "2 photographers", "2 videographers", "Edited digital images", "Highlight reel", "Next Day wedding Trailer", "20 min Video", "Online gallery", "Digital delivery", "Print release", "Drone footage (weather permitting)"] // Adjusted features/hours
      },
      {
        id: "luxury", name: "Package S", price: 5000, description: "The ultimate wedding photo and video experience",
        features: ["Full Coverage (8hrs+)", "2+ photographers", "2+ videographers", "Edited digital images", "Next Day wedding Trailer", "Social Media Highlight reel", "360 video of full ceremony", "1hr wedding Documentary", "Online gallery", "Digital delivery", "Print release", "Drone footage (weather permitting)", "Gifts! (includes headset 360 video)"] // Added S tier based on image
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
        id: "premium", name: "Luxury", price: 1200, description: "Premium coverage for important celebrations",
        features: ["6 hours of coverage", "1 photographer", "Online gallery", "200+ edited digital images", "Print release", "16x20 mounted print"]
      }
    ],
    "small-event-videography": [
       {
        id: "basic", name: "Essential", price: 500, description: "Capture the key moments of your event",
        features: ["2 hours of coverage", "1 videographer", "2-3 minute highlight film", "Digital delivery", "1 revision"]
      },
      {
        id: "standard", name: "Classic", price: 900, description: "Comprehensive video coverage of your event",
        features: ["4 hours of coverage", "1 videographer", "3-5 minute highlight film", "15-minute feature film", "Digital delivery", "2 revisions"]
      },
      {
        id: "premium", name: "Luxury", price: 1500, description: "Premium video coverage for special celebrations",
        features: ["6 hours of coverage", "2 videographers", "5-7 minute highlight film", "30-minute feature film", "Digital delivery", "3 revisions", "Drone footage (weather permitting)"]
      }
    ],
    "small-event-both": [
       {
        id: "basic", name: "Essential", price: 800, description: "Essential photo and video coverage for your event",
        features: ["2 hours of coverage", "1 photographer", "1 videographer", "50+ edited digital images", "2-3 minute highlight film", "Online gallery", "Digital delivery", "Print release", "1 revision (video)"]
      },
      {
        id: "standard", name: "Classic", price: 1500, description: "Comprehensive photo and video coverage",
        features: ["4 hours of coverage", "1 photographer", "1 videographer", "100+ edited digital images", "3-5 minute highlight film", "15-minute feature film", "Online gallery", "Digital delivery", "Print release", "2 revisions (video)"]
      },
      {
        id: "premium", name: "Luxury", price: 2500, description: "Premium photo and video coverage for special celebrations",
        features: ["6 hours of coverage", "1 photographer", "2 videographers", "200+ edited digital images", "5-7 minute highlight film", "30-minute feature film", "Online gallery", "Digital delivery", "Print release", "16x20 mounted print", "3 revisions (video)", "Drone footage (weather permitting)"]
      }
    ],
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
        id: "basic", name: "Package A (1hr)", price: 249, description: "Perfect for individuals or couples",
        features: ["Up to 1 hour session", "1 Location", "1 Outfit Change", "Online gallery", "Min. 5 Detailed Photos", "Min. 20 candids with access to cloud folder", "Print release"] // Adjusted features
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
  initializeEventTypes();
  setupFormSubmission();
  setupViewModeButtons();
  updateProgressBar(); // Set initial progress bar state
});

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

    // Create email content
    const { basePackage, selectedAddOns, eventType, serviceType } = currentState;
    const basePrice = basePackage.price;
    const addOnsPrice = selectedAddOns.reduce((total, addon) => total + addon.price, 0);
    const totalPrice = basePrice + addOnsPrice;

    const emailSubject = `New Package Builder Request - ${customerData.name}`;
    const emailBody = `
A new package has been configured via the website:

Customer Details:
--------------------
Name: ${customerData.name}
Email: ${customerData.email}
Phone: ${customerData.phone}
Event Date: ${customerData.eventDate}

Package Configuration:
--------------------
Event Type: ${eventType.name}
Service Type: ${serviceType.name}

Base Package: ${basePackage.name} ($${basePrice})
Features:
${basePackage.features.map(f => `  - ${f}`).join('\n')}

Selected Add-ons: (${selectedAddOns.length > 0 ? '$' + addOnsPrice : 'None'})
${selectedAddOns.length > 0
  ? selectedAddOns.map(addon => `  - ${addon.name} ($${addon.price})`).join('\n')
  : '  - None'}

Total Estimated Price: $${totalPrice}
--------------------

Additional Message from Customer:
--------------------
${customerData.message || '(No additional message provided)'}
`;

    // --- Sending the Data (Using mailto: for client-side simplicity) ---
    const mailtoLink = `mailto:getmonieproductions@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

    try {
        window.open(mailtoLink, '_blank');
        alert("Thank you for your request! Your email client should open shortly. Please review and send the email. We'll be in touch soon.");
        // Optionally reset the form or redirect
        // domElements.bookingForm.reset();
        // goToStep(1); // Reset builder to start
    } catch (error) {
        console.error("Error opening mailto link:", error);
        alert("Could not open your email client automatically. Please manually email getmonieproductions@gmail.com with your request details. We apologize for the inconvenience.");
         // Optional: Display the email body for copy-paste
         const fallbackDisplay = document.createElement('textarea');
         fallbackDisplay.value = emailBody;
         fallbackDisplay.rows = 15;
         fallbackDisplay.readOnly = true;
         fallbackDisplay.style.width = '100%';
         fallbackDisplay.style.marginTop = '1rem';
         domElements.bookingForm.appendChild(document.createTextNode("Please copy the details below and email us:"));
         domElements.bookingForm.appendChild(fallbackDisplay);
    }
  });
}

// --- STEP INITIALIZATION FUNCTIONS ---

function initializeEventTypes() {
  if (!domElements.eventTypeGrid) return;
  domElements.eventTypeGrid.innerHTML = "";

  packageData.eventTypes.forEach(eventType => {
    const card = createSelectionCard(eventType, selectEventType);
    domElements.eventTypeGrid.appendChild(card);
  });
}

function initializeServiceTypes() {
  if (!domElements.serviceTypeGrid || !currentState.eventType) return;
  domElements.serviceTypeGrid.innerHTML = "";

  packageData.serviceTypes.forEach(serviceType => {
    const card = createSelectionCard(serviceType, selectServiceType);
    domElements.serviceTypeGrid.appendChild(card);
  });

  if (domElements.selectedEventNameEl) {
      domElements.selectedEventNameEl.textContent = currentState.eventType.name;
  }
}

function initializeBasePackages() {
  if (!currentState.eventType || !currentState.serviceType) return;
  const packageKey = `${currentState.eventType.id}-${currentState.serviceType.id}`;
  const packages = packageData.packages[packageKey] || []; // Ensure packages is an array

  if (domElements.eventServiceTitleEl) {
     domElements.eventServiceTitleEl.textContent = `${currentState.eventType.name} ${currentState.serviceType.name}`;
  }

  // Initialize Card View
  if (domElements.packageCardsView) {
    domElements.packageCardsView.innerHTML = "";
    packages.forEach(pkg => {
        const card = createPackageCard(pkg);
        domElements.packageCardsView.appendChild(card);
    });
  }

  // Initialize Comparison View
  if (domElements.packageComparisonView) {
    domElements.packageComparisonView.innerHTML = ""; // Clear previous table
    if (packages.length > 0) {
        const table = createComparisonTable(packages);
        domElements.packageComparisonView.appendChild(table);
        addComparisonSelectListeners(packages); // Add listeners after table is in DOM
    } else {
        domElements.packageComparisonView.innerHTML = "<p class='empty-message'>No packages defined for this combination.</p>";
    }
  }

  setViewMode(currentState.viewMode); // Apply current view mode
}


function initializeAddOns() {
  if (!currentState.basePackage || !currentState.serviceType || !currentState.eventType) return;

  // Update selected package display
  if (domElements.selectedPackageNameEl) domElements.selectedPackageNameEl.textContent = currentState.basePackage.name;
  if (domElements.selectedPackagePriceEl) domElements.selectedPackagePriceEl.textContent = `$${currentState.basePackage.price}`;
  if(domElements.selectedPackageFeaturesContainer) {
      domElements.selectedPackageFeaturesContainer.innerHTML = ""; // Clear previous features
      currentState.basePackage.features.forEach(feature => {
          const featureItem = document.createElement("div");
          featureItem.className = "feature-item";
          featureItem.textContent = feature;
          domElements.selectedPackageFeaturesContainer.appendChild(featureItem);
      });
  }


  // Update total price display
  updateTotalPrice();

  // Determine relevant add-ons (photography, videography, or both)
  let relevantAddOnKeys = [];
  if (currentState.serviceType.id === 'photography') {
      relevantAddOnKeys.push('photography');
  } else if (currentState.serviceType.id === 'videography') {
      relevantAddOnKeys.push('videography');
  } else if (currentState.serviceType.id === 'both') {
      relevantAddOnKeys.push('photography', 'videography', 'both');
  }

  // Get all compatible add-ons from relevant categories
  const allCompatibleAddOns = relevantAddOnKeys.flatMap(key =>
      (packageData.addOns[key] || [])
          .filter(addon =>
              addon.compatibleEvents && addon.compatibleEvents.includes(currentState.eventType.id)
          )
  );

  // Get unique categories from compatible add-ons, sorted
  const categories = [...new Set(allCompatibleAddOns.map(addon => addon.category || 'General'))].sort();

  // Create category tabs
  if (domElements.categoryTabsContainer) {
      domElements.categoryTabsContainer.innerHTML = ""; // Clear existing tabs
      categories.forEach((category, index) => {
          const tab = document.createElement("button");
          tab.className = "category-tab";
          tab.textContent = category;
          tab.dataset.category = category;
          if (index === 0) tab.classList.add("active"); // Activate first tab

          tab.addEventListener("click", () => {
              domElements.categoryTabsContainer.querySelectorAll(".category-tab").forEach(t => t.classList.remove("active"));
              tab.classList.add("active");
              showAddOnsForCategory(category, allCompatibleAddOns); // Pass compatible add-ons
          });
          domElements.categoryTabsContainer.appendChild(tab);
      });
  }

  // Show add-ons for the first category initially
  if (categories.length > 0) {
      showAddOnsForCategory(categories[0], allCompatibleAddOns);
  } else {
      if(domElements.addOnsGrid) domElements.addOnsGrid.innerHTML = "<p class='empty-message'>No add-ons available for this selection.</p>";
  }

  updateSelectedAddOnsList(); // Refresh selected add-ons display
}


// --- CARD/TABLE CREATION FUNCTIONS ---

function createSelectionCard(item, selectCallback) {
  const card = document.createElement("div");
  card.className = "selection-card";
  card.dataset.id = item.id; // Use dataset for easier selection

  const cardImage = document.createElement("div");
  cardImage.className = "card-image";
  if (item.imageUrl) {
    cardImage.style.backgroundImage = `url('${item.imageUrl}')`; // Ensure quotes for URL
  } else {
    cardImage.style.backgroundColor = '#eee'; // Fallback color
  }

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

function createPackageCard(pkg) {
  const card = document.createElement("div");
  card.className = "package-card";
  card.dataset.id = pkg.id;

  // Header
  const cardHeader = document.createElement("div");
  cardHeader.className = "package-card-header";
  cardHeader.innerHTML = `
    <h3>${pkg.name}</h3>
    <p class="price">$${pkg.price}</p>
  `;

  // Description
  const description = document.createElement("p");
  description.className = "description";
  description.textContent = pkg.description;

  // Features
  const featuresList = document.createElement("ul");
  featuresList.className = "features-list";
  pkg.features.forEach(feature => {
    const featureItem = document.createElement("li");
    featureItem.textContent = feature;
    featuresList.appendChild(featureItem);
  });

  // Button
  const selectButton = document.createElement("button");
  selectButton.className = "select-button";
  selectButton.textContent = "Select";
  selectButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent card click if button is clicked directly
      selectBasePackage(pkg);
  });

  card.appendChild(cardHeader);
  card.appendChild(description);
  card.appendChild(featuresList);
  card.appendChild(selectButton);

  return card;
}

function createComparisonTable(packages) {
    const table = document.createElement("table");
    table.className = "comparison-table";

    // --- Header Row ---
    const headerRow = table.insertRow();
    headerRow.insertCell().outerHTML = "<th>Features</th>"; // Feature column header

    packages.forEach(pkg => {
        const th = document.createElement("th");
        th.innerHTML = `
            <div class="package-header">
              <h3>${pkg.name}</h3>
              <p class="price">$${pkg.price}</p>
              <p class="description">${pkg.description}</p>
              <button class="select-button" data-id="${pkg.id}">Select</button>
            </div>
        `;
        headerRow.appendChild(th);
    });

    // --- Feature Rows ---
    const allFeaturesSet = new Set();
    packages.forEach(pkg => pkg.features.forEach(feature => allFeaturesSet.add(feature)));
    const allFeatures = Array.from(allFeaturesSet).sort(); // Consistent order

    allFeatures.forEach(feature => {
        const row = table.insertRow();
        const featureCell = row.insertCell();
        featureCell.textContent = feature;
        featureCell.className = "feature-label";

        packages.forEach(pkg => {
            const cell = row.insertCell();
            cell.innerHTML = pkg.features.includes(feature) ? '✓' : '—';
            cell.className = pkg.features.includes(feature) ? 'feature-included' : 'feature-not-included';
        });
    });

    return table;
}

function createAddOnCard(addon) {
    const card = document.createElement("div");
    card.className = "add-on-card";
    card.dataset.id = addon.id;

    const isSelected = currentState.selectedAddOns.some(a => a.id === addon.id);
    if (isSelected) card.classList.add("selected");

    // Header
    const cardHeader = document.createElement("div");
    cardHeader.className = "add-on-card-header"; // Changed class name for consistency
    cardHeader.innerHTML = `
        <h3>${addon.name}</h3>
        <p class="price">$${addon.price}</p>
    `;

    // Description
    const description = document.createElement("p");
    description.className = "description"; // Changed class name
    description.textContent = addon.description;

    // Button
    const selectButton = document.createElement("button");
    selectButton.className = "select-button"; // Changed class name
    selectButton.textContent = isSelected ? "Remove" : "Add";
    selectButton.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleAddOn(addon, card, selectButton);
    });

    card.appendChild(cardHeader);
    card.appendChild(description);
    card.appendChild(selectButton);

    return card;
}


// --- SELECTION & TOGGLE FUNCTIONS ---

function selectEventType(eventType) {
  currentState.eventType = eventType;
  currentState.serviceType = null;
  currentState.basePackage = null;
  currentState.selectedAddOns = [];
  highlightSelectedCard(domElements.eventTypeGrid, eventType.id);
  initializeServiceTypes();
  goToStep(2);
}

function selectServiceType(serviceType) {
  currentState.serviceType = serviceType;
  currentState.basePackage = null;
  currentState.selectedAddOns = [];
  highlightSelectedCard(domElements.serviceTypeGrid, serviceType.id);
  initializeBasePackages();
  goToStep(3);
}

function selectBasePackage(pkg) {
  currentState.basePackage = pkg;
  currentState.selectedAddOns = []; // Reset add-ons on new package selection

  // Highlight in both views
  highlightSelectedCard(domElements.packageCardsView, pkg.id);
  highlightComparisonSelection(pkg.id);

  initializeAddOns();
  goToStep(4);
}

function toggleAddOn(addon, cardElement, buttonElement) {
  const addonIndex = currentState.selectedAddOns.findIndex(a => a.id === addon.id);

  if (addonIndex > -1) { // If selected, remove
    currentState.selectedAddOns.splice(addonIndex, 1);
    cardElement?.classList.remove("selected"); // Use optional chaining
    if (buttonElement) buttonElement.textContent = "Add";
  } else { // If not selected, add
    currentState.selectedAddOns.push(addon);
     cardElement?.classList.add("selected");
    if (buttonElement) buttonElement.textContent = "Remove";
  }

  updateSelectedAddOnsList();
  updateTotalPrice();
}


// --- UI UPDATE FUNCTIONS ---

function highlightSelectedCard(container, selectedId) {
    if (!container) return;
    container.querySelectorAll('.selection-card, .package-card').forEach(card => {
        if (card.dataset.id === selectedId) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
}

function highlightComparisonSelection(selectedPackageId) {
    if (!domElements.packageComparisonView) return;
    domElements.packageComparisonView.querySelectorAll('.select-button').forEach(button => {
        if (button.dataset.id === selectedPackageId) {
            button.classList.add('selected'); // Assuming 'selected' class styles the button
            button.textContent = 'Selected';
        } else {
            button.classList.remove('selected');
            button.textContent = 'Select';
        }
    });
}


function addComparisonSelectListeners(packages) {
    if (!domElements.packageComparisonView) return;
    const selectButtons = domElements.packageComparisonView.querySelectorAll(".select-button");
    selectButtons.forEach(button => {
        // Remove previous listener if any to prevent duplicates
        button.replaceWith(button.cloneNode(true));
    });
    // Add new listeners to the cloned buttons
    domElements.packageComparisonView.querySelectorAll(".select-button").forEach(button => {
        button.addEventListener("click", function() {
            const packageId = this.dataset.id;
            const selectedPackage = packages.find(p => p.id === packageId);
            if (selectedPackage) {
                selectBasePackage(selectedPackage);
            }
        });
    });
}


function showAddOnsForCategory(category, compatibleAddOns) {
    if (!domElements.addOnsGrid) return;
    domElements.addOnsGrid.innerHTML = ""; // Clear previous

    const addOnsForCategory = compatibleAddOns.filter(
        addon => (addon.category || 'General') === category
    );

    if (addOnsForCategory.length === 0) {
        domElements.addOnsGrid.innerHTML = "<p class='empty-message'>No add-ons in this category.</p>";
        return;
    }

    addOnsForCategory.forEach(addon => {
        const card = createAddOnCard(addon);
        domElements.addOnsGrid.appendChild(card);
    });
}

function updateSelectedAddOnsList() {
  if (!domElements.selectedAddOnsList) return;
  domElements.selectedAddOnsList.innerHTML = ""; // Clear

  if (currentState.selectedAddOns.length === 0) {
    domElements.selectedAddOnsList.innerHTML = "<p class='empty-message'>No add-ons selected yet</p>";
  } else {
    currentState.selectedAddOns.forEach(addon => {
      const item = document.createElement("div");
      item.className = "selected-add-on";

      item.innerHTML = `
        <div class="add-on-info">
          <h4>${addon.name}</h4>
          <p>$${addon.price}</p>
        </div>
      `;

      const removeButton = document.createElement("button");
      removeButton.className = "remove-button";
      removeButton.innerHTML = "×"; // Use HTML entity for 'x'
      removeButton.setAttribute("aria-label", `Remove ${addon.name}`);
      removeButton.onclick = () => { // Use onclick for simplicity here
          // Find the corresponding card and button in the grid to update its state
          const addOnCard = domElements.addOnsGrid?.querySelector(`.add-on-card[data-id="${addon.id}"]`); // Optional chaining
          const button = addOnCard ? addOnCard.querySelector(".select-button") : null;
          toggleAddOn(addon, addOnCard, button); // This will handle state update and UI refresh
      };

      item.appendChild(removeButton);
      domElements.selectedAddOnsList.appendChild(item);
    });
  }
}

function updateTotalPrice() {
  const basePrice = currentState.basePackage ? currentState.basePackage.price : 0;
  const addOnsPrice = currentState.selectedAddOns.reduce((total, addon) => total + addon.price, 0);
  const totalPrice = basePrice + addOnsPrice;

  if (domElements.basePackagePriceEl) domElements.basePackagePriceEl.textContent = `$${basePrice}`;
  if (domElements.addOnsPriceEl) domElements.addOnsPriceEl.textContent = `$${addOnsPrice}`;
  if (domElements.totalPriceEl) domElements.totalPriceEl.textContent = `$${totalPrice}`;
}

function updateProgressBar() {
  domElements.progressBarSteps.forEach((step, index) => {
    const stepNumber = index + 1;
    step.classList.remove("active", "completed");
    if (stepNumber < currentState.step) {
      step.classList.add("completed");
    } else if (stepNumber === currentState.step) {
      step.classList.add("active");
    }
  });
}

function updateSummary() {
    if (!currentState.eventType || !currentState.serviceType || !currentState.basePackage) {
        // Handle incomplete state - maybe show a message in summary area
        console.warn("Attempted to update summary with incomplete state.");
        if (domElements.summaryContainer) { // Added check
            // Clear previous summary or show placeholder
            domElements.summaryContainer.innerHTML = "<p class='empty-message'>Please complete package selections.</p>";
        }
        return;
    }

    // --- Populate Summary ---
    if (domElements.summaryEventTypeEl) domElements.summaryEventTypeEl.textContent = currentState.eventType.name;
    if (domElements.summaryServiceTypeEl) domElements.summaryServiceTypeEl.textContent = currentState.serviceType.name;
    if (domElements.summaryPackageNameEl) domElements.summaryPackageNameEl.textContent = currentState.basePackage.name;
    if (domElements.summaryPackagePriceEl) domElements.summaryPackagePriceEl.textContent = `$${currentState.basePackage.price}`;

    // Package Features
    if (domElements.summaryPackageFeaturesContainer) {
        domElements.summaryPackageFeaturesContainer.innerHTML = ""; // Clear
        currentState.basePackage.features.forEach(feature => {
            const item = document.createElement("div");
            item.className = "summary-feature";
            item.textContent = feature;
            domElements.summaryPackageFeaturesContainer.appendChild(item);
        });
    }

    // Add-Ons
    if (domElements.summaryAddOnsContainer) {
        domElements.summaryAddOnsContainer.innerHTML = ""; // Clear
        if (currentState.selectedAddOns.length === 0) {
            domElements.summaryAddOnsContainer.innerHTML = "<p class='empty-message'>No add-ons selected</p>";
        } else {
            currentState.selectedAddOns.forEach(addon => {
                const item = document.createElement("div");
                item.className = "summary-add-on";
                item.innerHTML = `
                    <span class="summary-add-on-name">${addon.name}</span>
                    <span class="summary-add-on-price">$${addon.price}</span>
                `;
                domElements.summaryAddOnsContainer.appendChild(item);
            });
        }
    }

    // Totals
    const basePrice = currentState.basePackage.price;
    const addOnsPrice = currentState.selectedAddOns.reduce((total, addon) => total + addon.price, 0);
    const totalPrice = basePrice + addOnsPrice;

    if (domElements.summaryBasePriceEl) domElements.summaryBasePriceEl.textContent = `$${basePrice}`;
    if (domElements.summaryAddonsPriceEl) domElements.summaryAddonsPriceEl.textContent = `$${addOnsPrice}`;
    if (domElements.summaryTotalPriceEl) domElements.summaryTotalPriceEl.textContent = `$${totalPrice}`;
}

// --- NAVIGATION & VIEW LOGIC ---

function setViewMode(mode) {
    currentState.viewMode = mode;
    if (!domElements.cardViewBtn || !domElements.comparisonViewBtn || !domElements.packageCardsView || !domElements.packageComparisonView) return;

    if (mode === "card") {
        domElements.cardViewBtn.classList.add("active");
        domElements.comparisonViewBtn.classList.remove("active");
        domElements.packageCardsView.style.display = "grid"; // Or appropriate display value
        domElements.packageComparisonView.style.display = "none";
    } else { // comparison mode
        domElements.cardViewBtn.classList.remove("active");
        domElements.comparisonViewBtn.classList.add("active");
        domElements.packageCardsView.style.display = "none";
        domElements.packageComparisonView.style.display = "block"; // Or appropriate display value
    }
}

function goToStep(stepNumber) {
  // Validate step number
  if (stepNumber < 1 || stepNumber > 5) return;

  // Hide all steps
  domElements.stepContainers.forEach(stepDiv => {
    stepDiv.style.display = 'none';
  });

  // Show target step
  const targetStep = document.getElementById(`step-${stepNumber}`);
  if (targetStep) {
    targetStep.style.display = 'block';
    currentState.step = stepNumber;
    updateProgressBar();

    // Re-initialize step content if necessary (e.g., dynamic content)
    // Example: if step 3 content depends on step 2 selection and needs refresh
    // if (stepNumber === 3) initializeBasePackages();
    // if (stepNumber === 4) initializeAddOns();

    if (stepNumber === 5) {
        updateSummary(); // Update summary when navigating TO it
    }
  } else {
    console.error(`Step element with ID step-${stepNumber} not found.`);
  }
}

function goToNextStep() {
  // Add validation if needed (e.g., ensure a selection is made before proceeding)
  if (currentState.step === 1 && !currentState.eventType) {
      alert("Please select an event type.");
      return;
  }
  if (currentState.step === 2 && !currentState.serviceType) {
       alert("Please select a service type.");
       return;
  }
  if (currentState.step === 3 && !currentState.basePackage) {
       alert("Please select a base package.");
       return;
  }
  // Step 4 allows proceeding without add-ons

  if (currentState.step < 5) {
    goToStep(currentState.step + 1);
  }
}

function goToPreviousStep() {
  if (currentState.step > 1) {
    goToStep(currentState.step - 1);
  }
}

// Utility function to scroll to the builder
function scrollToBuilder() {
  const builderSection = document.getElementById("package-builder-section");
  if (builderSection) {
    builderSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// --- END FILE: package-builder.js ---
