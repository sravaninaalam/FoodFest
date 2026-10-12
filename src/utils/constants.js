import {
  Code2,UtensilsCrossed,Search,ShoppingCart,CreditCard,ClipboardList,ShieldCheck,Layers,
  RouterIcon,Palette,Package,Braces,CheckCircle2,Sparkles
} from "lucide-react";

export const LOGO_URL ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0RkJ62Zdd9P-mEKY3NgQOvD9-JT43dU1mCPv6i8H_llxfen3fln7RDQ&s=10'
 
// "https://corsproxy.io/?
// export const CDN_IMG_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

 export const CDN_IMG_URL="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,/"
export const HTL_MENU=
"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9522009&lng=77.7002645&restaurantId="

export const HOME_API=
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9522009&lng=77.7002645&page_type=DESKTOP_WEB_LISTING"

export const Green_Rating_Img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2fO06E83wILT6e9SNlK8MUEtKGAAmj8kzQ&usqp=CAU"
 
export const Yellow_Rating_Img="https://thumbs.dreamstime.com/b/five-point-yellow-star-icon-154791548.jpg"

export const Cart_Empty_Img="https://media.istockphoto.com/vectors/fast-food-chef-on-roller-skates-vector-id470852560?k=6&m=470852560&s=612x612&w=0&h=FsJsHwZlvFqbYQm_ke8rWceWr8FQpbWSHfGaikIEgRk="
export const HOME_API_CORS=`https://api.allorigins.win/raw?url=${encodeURIComponent(HOME_API)}`
export const HTL_MENU_CORS=`https://api.allorigins.win/raw?url=${encodeURIComponent(HTL_MENU)}`
export const CDN_URL_CORS=
`https://api.allorigins.win/raw?url=${CDN_IMG_URL}`




export const PLACEHOLDER_IMG =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,/rxawufahokq3ycr6vlg2'




  export const TechStack = [
    {  name: "React",
      description: "Builds reusable UI components and manages the interface.",
      icon: Code2,
      color: "bg-sky-100 text-sky-700",
    },
    {
      name: "JavaScript",
      description: "Powers application logic, events, and dynamic interactions.",
      icon: Braces,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      name: "Tailwind CSS",
      description: "Creates responsive layouts and consistent styling.",
      icon: Palette,
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      name: "Redux Toolkit",
      description: "Manages shared cart and order state across components.",
      icon: Layers,
      color: "bg-purple-100 text-purple-700",
    },
    {
      name: "React Router",
      description: "Handles navigation between pages in the application.",
      icon: RouterIcon,
      color: "bg-orange-100 text-orange-700",
    },
    {
      name: "Parcel",
      description: "Provides the development server and application bundling.",
      icon: Package,
      color: "bg-amber-100 text-amber-700",
    },
    {
      name: "Formik & Yup",
      description: "Help manage forms and validate user input.",
      icon: CheckCircle2,
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      name: "React Toastify",
      description: "Displays feedback messages for user actions.",
      icon: Sparkles,
      color: "bg-pink-100 text-pink-700",
    },
  ];
  
  export const Features = [
    {
      icon: Search,
      title: "Discover Restaurants",
      description:
        "Browse restaurants, explore food categories, and search for places to eat.",
    },
    {
      icon: UtensilsCrossed,
      title: "Explore Menus",
      description:
        "View restaurant menus and check food item details before ordering.",
    },
    {
      icon: ShoppingCart,
      title: "Smart Shopping Cart",
      description:
        "Add items, change quantities, remove products, or clear your cart.",
    },
    {
      icon: ShieldCheck,
      title: "Login & Signup",
      description:
        "Create an account, sign in, and log out of your FoodFest session.",
    },
    {
      icon: CreditCard,
      title: "Demo Checkout",
      description:
        "Experience a simulated card-payment flow without making a real payment.",
    },
    {
      icon: ClipboardList,
      title: "Order History",
      description:
        "View orders created after completing the demo checkout process.",
    },
  ];
