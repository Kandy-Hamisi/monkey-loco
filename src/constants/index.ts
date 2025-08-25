// Website related constants
export const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Features",
    href: "/features",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const weeklyOutfitWinners = [
  {
    id: "1a2b3c4d-5e6f-7890-abcd-ef1234567890",
    user: {
      id: "user-001",
      username: "fashionista_maya",
      displayName: "Maya Chen",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108755-2616c96f40bb?w=150&h=150&fit=crop&crop=face",
      isVerified: true,
    },
    post: {
      id: "post-001",
      imageUrl: "./images/joshuari.jpg",
      caption:
        "Mixing vintage vibes with modern silhouettes ✨ This thrifted blazer paired with high-waisted trousers is giving me all the boss babe energy!",
      occasion: "Business Casual",
      weather: "Sunny",
      estimatedPrice: 12500, // $125.00 in cents
      likesCount: 2847,
      commentsCount: 156,
      createdAt: "2025-08-12T09:30:00.000Z",
    },
    outfit: {
      items: [
        {
          itemName: "Vintage Oversized Blazer",
          brand: "Thrifted",
          category: "outerwear",
          color: "Beige",
          price: 2500,
        },
        {
          itemName: "High-Waisted Wide Leg Trousers",
          brand: "Zara",
          category: "bottom",
          color: "Black",
          price: 4500,
        },
        {
          itemName: "Leather Loafers",
          brand: "Mango",
          category: "shoes",
          color: "Brown",
          price: 5500,
        },
      ],
    },
    contest: {
      votesReceived: 1847,
      rank: 1,
      contestId: "weekly-contest-001",
    },
    tags: ["vintage", "business-casual", "sustainable-fashion", "thrifted"],
  },
  {
    id: "2b3c4d5e-6f78-9012-bcde-f23456789012",
    user: {
      id: "user-002",
      username: "streetstyle_alex",
      displayName: "Alex Rodriguez",
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      isVerified: false,
    },
    post: {
      id: "post-002",
      imageUrl: "./images/ladies-stair.jpg",
      caption:
        "Street meets chic 🔥 Loving how this cropped jacket adds edge to a simple dress. Perfect for those unpredictable weather days!",
      occasion: "Casual Day Out",
      weather: "Partly Cloudy",
      estimatedPrice: 8900,
      likesCount: 1923,
      commentsCount: 89,
      createdAt: "2025-08-11T14:15:00.000Z",
    },
    outfit: {
      items: [
        {
          itemName: "Cropped Denim Jacket",
          brand: "Urban Outfitters",
          category: "outerwear",
          color: "Light Blue",
          price: 3500,
        },
        {
          itemName: "Midi Slip Dress",
          brand: "H&M",
          category: "dress",
          color: "Black",
          price: 2900,
        },
        {
          itemName: "Platform Sneakers",
          brand: "Converse",
          category: "shoes",
          color: "White",
          price: 2500,
        },
      ],
    },
    contest: {
      votesReceived: 1456,
      rank: 2,
      contestId: "weekly-contest-001",
    },
    tags: ["streetwear", "casual", "denim", "platform-shoes"],
  },
  {
    id: "3c4d5e6f-7890-1234-cdef-345678901234",
    user: {
      id: "user-003",
      username: "boho_bella",
      displayName: "Isabella Santos",
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      isVerified: true,
    },
    post: {
      id: "post-003",
      imageUrl: "./images/pexels-1.jpg",
      caption:
        "Channeling my inner boho goddess 🌸 This flowy dress with delicate jewelry is perfect for weekend brunches and garden parties!",
      occasion: "Brunch Date",
      weather: "Warm",
      estimatedPrice: 15600,
      likesCount: 3241,
      commentsCount: 201,
      createdAt: "2025-08-10T11:45:00.000Z",
    },
    outfit: {
      items: [
        {
          itemName: "Floral Maxi Dress",
          brand: "Free People",
          category: "dress",
          color: "Floral Print",
          price: 12800,
        },
        {
          itemName: "Layered Gold Necklaces",
          brand: "Mejuri",
          category: "accessory",
          color: "Gold",
          price: 1800,
        },
        {
          itemName: "Strappy Sandals",
          brand: "Sam Edelman",
          category: "shoes",
          color: "Tan",
          price: 1000,
        },
      ],
    },
    contest: {
      votesReceived: 1203,
      rank: 3,
      contestId: "weekly-contest-001",
    },
    tags: ["boho", "floral", "maxi-dress", "brunch-outfit", "feminine"],
  },
];

// Alternative: If you need it as a const for immediate use
// const nominees = weeklyOutfitNominees;

// end of website constants

// Auth field constants
export const FIELD_NAMES = {
  username: "Username",
  email: "Email",
  passwordHash: "Password",
  confirmPassword: "Confirm Password",
};

export const FIELD_TYPES = {
  username: "string",
  email: "email",
  password: "password",
  confirmPassword: "password",
};
// End of Auth field constants
