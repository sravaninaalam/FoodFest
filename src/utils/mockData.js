// cuisine must match restaurant.info.cuisines (Swiggy-style filter)
export const mockCategories = [
  {
    id: '1',
    label: 'Biryani',
    cuisine: 'Biryani',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=200&h=200&fit=crop',
  },
  {
    id: '2',
    label: 'Pizza',
    cuisine: 'Pizza',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop',
  },
  {
    id: '3',
    label: 'Burgers',
    cuisine: 'Burgers',
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop',
  },
  {
    id: '4',
    label: 'North Indian',
    cuisine: 'North Indian',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=200&h=200&fit=crop',
  },
  {
    id: '5',
    label: 'Chinese',
    cuisine: 'Chinese',
    image:
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=200&h=200&fit=crop',
  },
  {
    id: '6',
    label: 'Desserts',
    cuisine: 'Desserts',
    image:
      'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&h=200&fit=crop',
  },
  {
    id: '7',
    label: 'South Indian',
    cuisine: 'South Indian',
    image:
      'https://images.unsplash.com/photo-1668236543090-82eba5eeab74?w=200&h=200&fit=crop',
  },
];

export const mockRestaurants = [
  {
    info: {
      id: "101",
      name: "Spice Garden",
      cloudinaryImageId: "qoxluuv2ocvc3ffgdzug",
      cuisines: ["Indian", "Biryani", "North Indian"],
      avgRating: 4.3,
      costForTwo: "₹300 for two",
      sla: { deliveryTime: 30 },
    },
  },
  {
    info: {
      id: "102",
      name: "Pizza Hub",
      cloudinaryImageId: "rxawufahokq3ycr6vlg2",
      cuisines: ["Pizza", "Italian", "Fast Food"],
      avgRating: 4.1,
      costForTwo: "₹400 for two",
      sla: { deliveryTime: 25 },
    },
  },
  {
    info: {
      id: "103",
      name: "Burger King Street",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e9061e1e7e87",
      cuisines: ["Burgers", "American", "Fast Food"],
      avgRating: 3.9,
      costForTwo: "₹250 for two",
      sla: { deliveryTime: 20 },
    },
  },
  {
    info: {
      id: "104",
      name: "Dragon Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      cuisines: ["Chinese", "Asian", "Noodles"],
      avgRating: 4.4,
      costForTwo: "₹350 for two",
      sla: { deliveryTime: 35 },
    },
  },
  {
    info: {
      id: "105",
      name: "Sweet Tooth Cafe",
      cloudinaryImageId: "b9md9cpw1jpwcd8lf77c",
      cuisines: ["Desserts", "Bakery", "Beverages"],
      avgRating: 4.5,
      costForTwo: "₹200 for two",
      sla: { deliveryTime: 22 },
    },
  },
  {
    info: {
      id: "106",
      name: "South Kitchen",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      cuisines: ["South Indian", "Idli", "Dosa"],
      avgRating: 4.2,
      costForTwo: "₹180 for two",
      sla: { deliveryTime: 28 },
    },
  },
];

const menuByRestaurant = {
  101: {
    name: "Spice Garden",
    cuisines: ["Indian", "Biryani", "North Indian"],
    costForTwoMessage: "₹300 for two",
    cloudinaryImageId: "qoxluuv2ocvc3ffgdzug",
    categories: [
      {
        title: "Recommended",
        itemCards: [
          {
            card: {
              info: {
                id: "m1011",
                name: "Chicken Biryani",
                price: 28000,
                description: "Aromatic basmati rice with spicy chicken masala.",
                imageId: "a97aee54151dd2b3e0d8fda071e13a8a",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1012",
                name: "Paneer Butter Masala",
                price: 22000,
                description: "Creamy tomato gravy with soft paneer cubes.",
                imageId: "byonwwb1urjxhngqqbi4",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1013",
                name: "Butter Naan",
                defaultPrice: 5000,
                description: "Soft naan brushed with butter.",
                imageId: "em9kzyx8xvgxv6p5mrbu",
              },
            },
          },
        ],
      },
      {
        title: "Starters",
        itemCards: [
          {
            card: {
              info: {
                id: "m1014",
                name: "Chicken 65",
                price: 18000,
                description: "Crispy spicy fried chicken starter.",
                imageId: "n7bfebvqzjf8a7r6ybby",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1015",
                name: "Veg Manchurian",
                price: 15000,
                description: "Fried veggie balls in tangy sauce.",
                imageId: "soeg27u3tyqjqmxl8ghp",
              },
            },
          },
        ],
      },
    ],
  },
  102: {
    name: "Pizza Hub",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    costForTwoMessage: "₹400 for two",
    cloudinaryImageId: "rxawufahokq3ycr6vlg2",
    categories: [
      {
        title: "Pizzas",
        itemCards: [
          {
            card: {
              info: {
                id: "m1021",
                name: "Margherita Pizza",
                price: 19900,
                description: "Classic cheese and tomato pizza.",
                imageId: "dpventcrozvfni0lqbvu",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1022",
                name: "Farmhouse Pizza",
                price: 29900,
                description: "Loaded with fresh veggies and cheese.",
                imageId: "s5ld93rsknx0ztfrbvlv",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1023",
                name: "Chicken Pepperoni",
                price: 34900,
                description: "Pepperoni, mozzarella and herbs.",
                imageId: "ntw0x1t0s3k3v3q7zqz1",
              },
            },
          },
        ],
      },
    ],
  },
  103: {
    name: "Burger King Street",
    cuisines: ["Burgers", "American", "Fast Food"],
    costForTwoMessage: "₹250 for two",
    cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e9061e1e7e87",
    categories: [
      {
        title: "Burgers",
        itemCards: [
          {
            card: {
              info: {
                id: "m1031",
                name: "Classic Veg Burger",
                price: 9900,
                description: "Crispy patty with fresh veggies.",
                imageId: "iqh7edifojrdmxlrbtsm",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1032",
                name: "Chicken Burger",
                price: 14900,
                description: "Juicy chicken patty with mayo.",
                imageId: "x4wgxfhcke1nl7ndgv6o",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1033",
                name: "French Fries",
                price: 7900,
                description: "Crispy salted fries.",
                imageId: "rziyikkxkxvxvxxk1qfk",
              },
            },
          },
        ],
      },
    ],
  },
  104: {
    name: "Dragon Wok",
    cuisines: ["Chinese", "Asian", "Noodles"],
    costForTwoMessage: "₹350 for two",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    categories: [
      {
        title: "Noodles & Rice",
        itemCards: [
          {
            card: {
              info: {
                id: "m1041",
                name: "Veg Hakka Noodles",
                price: 16000,
                description: "Stir fried noodles with veggies.",
                imageId: "l2fg6i3z6x4zq4zq4zq4",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1042",
                name: "Chicken Fried Rice",
                price: 19000,
                description: "Wok tossed rice with chicken.",
                imageId: "ek9ivvqbynkdhfxxuwyi",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1043",
                name: "Chilli Chicken",
                price: 22000,
                description: "Spicy Indo-Chinese chicken.",
                imageId: "byonwwb1urjxhngqqbi4",
              },
            },
          },
        ],
      },
    ],
  },
  105: {
    name: "Sweet Tooth Cafe",
    cuisines: ["Desserts", "Bakery", "Beverages"],
    costForTwoMessage: "₹200 for two",
    cloudinaryImageId: "b9md9cpw1jpwcd8lf77c",
    categories: [
      {
        title: "Desserts",
        itemCards: [
          {
            card: {
              info: {
                id: "m1051",
                name: "Chocolate Brownie",
                price: 12000,
                description: "Warm chocolate brownie.",
                imageId: "b9md9cpw1jpwcd8lf77c",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1052",
                name: "Vanilla Ice Cream",
                price: 8000,
                description: "Classic vanilla scoop.",
                imageId: "qu4xwxslkakjvdphabke",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1053",
                name: "Cold Coffee",
                price: 10000,
                description: "Chilled creamy coffee.",
                imageId: "vunjhlpjdbkqnuagdmik",
              },
            },
          },
        ],
      },
    ],
  },
  106: {
    name: "South Kitchen",
    cuisines: ["South Indian", "Idli", "Dosa"],
    costForTwoMessage: "₹180 for two",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    categories: [
      {
        title: "Breakfast Specials",
        itemCards: [
          {
            card: {
              info: {
                id: "m1061",
                name: "Masala Dosa",
                price: 9000,
                description: "Crispy dosa with potato filling.",
                imageId: "f01666ac73626461d7455d9c24005cd4",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1062",
                name: "Idli Sambar",
                price: 7000,
                description: "Soft idlis with hot sambar.",
                imageId: "xbl67zvkfhcsedzq9n3m",
              },
            },
          },
          {
            card: {
              info: {
                id: "m1063",
                name: "Filter Coffee",
                price: 4000,
                description: "Traditional south Indian coffee.",
                imageId: "cciakymlmkxxvn4jvtzp",
              },
            },
          },
        ],
      },
    ],
  },
};

export const getMockMenu = (resId) => {
  const menu = menuByRestaurant[resId] || menuByRestaurant["101"];
  return {
    name: menu.name,
    cuisines: menu.cuisines,
    costForTwoMessage: menu.costForTwoMessage,
    cloudinaryImageId: menu.cloudinaryImageId,
    categories: menu.categories,
  };
};
