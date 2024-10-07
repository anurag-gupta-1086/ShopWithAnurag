import React from 'react'
import { HomePresentational } from '../presentational/HomePresentational';

export const Home = () => {
  const homepageData = {
    "Trending Products": [
      {
        "title":"Perfumes",
        "subtitle":"20% OFF",
        "imageUrl":"https://m.media-amazon.com/images/I/71NuaemkYqL._AC_SY290_.jpg",
      },
      {
        "title":"Shoes",
        "subtitle":"10% OFF",
        "imageUrl":"https://m.media-amazon.com/images/I/81tLQzejuzL._AC_SY290_.jpg",
      },
      {
        "title":"Creams",
        "subtitle":"15% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/51YYUuzb8lL._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Sunscreens",
        "subtitle":"5% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/61qZXVuSB9L._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Facial Masks",
        "subtitle":"5% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/81uPO+NbWcL._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Cleaners",
        "subtitle":"10% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/51S9kaDwauL._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Primers",
        "subtitle":"20% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/61IxKwQeYAL._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Hair Stylers",
        "subtitle":"5% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/516ltfOOD7L._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Brushes",
        "subtitle":"20% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/612P+MPnkmL._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Shampoos",
        "subtitle":"25% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/51XMTbnoWiL._AC_UL640_FMwebp_QL65_.jpg",
      }
    ],
    "Top Deals": [
      {
        "title":"Airpods",
        "subtitle":"90% OFF",
        "imageUrl":"https://images-eu.ssl-images-amazon.com/images/I/61SUj2aKoEL._AC_UL330_SR330,330_.jpg",
      },
      {
        "title":"Apple Watch",
        "subtitle":"70% OFF",
        "imageUrl":"https://images-eu.ssl-images-amazon.com/images/I/810wzMG3BJL._AC_UL330_SR330,330_.jpg",
      },
      {
        "title":"Conditioners",
        "subtitle":"65% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/61i8pP0VGVL._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Creams",
        "subtitle":"80% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/61eA7QhJSNL._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Dryers",
        "subtitle":"50% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/61m9+mGrjQL._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Soaps",
        "subtitle":"60% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/61i4Cp-87mL._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Detergents",
        "subtitle":"55% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/61B304RHorL._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Purse",
        "subtitle":"50% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/71smoRJEX+L._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Noodles",
        "subtitle":"40% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/71W61ls0b8L._AC_UL640_FMwebp_QL65_.jpg",
      },
      {
        "title":"Syrups",
        "subtitle":"50% OFF",
        "imageUrl":"https://f.media-amazon.com/images/I/71S21vuR4EL._AC_UL640_FMwebp_QL65_.jpg",
      }
    ],
    "Beauty & Makeup": [
      {
        "title":"Skin Care",
        "subtitle":"From Rs 199",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img22/Beauty/MegaFashionDays/Feb/GW/QC-PC_01._SY232_CB628322752_.jpg",
      },
      {
        "title":"Hair Care",
        "subtitle":"From Rs 99",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img22/Beauty/MegaFashionDays/Feb/GW/QC-PC_02._SY232_CB628322752_.jpg",
      },
      {
        "title":"Makeup",
        "subtitle":"From Rs 499",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img22/Beauty/MegaFashionDays/Feb/GW/QC-PC_03._SY232_CB628322753_.jpg",
      },
      {
        "title":"Perfumes",
        "subtitle":"From Rs 999",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img22/Beauty/MegaFashionDays/Feb/GW/QC-PC_04._SY232_CB628322752_.jpg",
      },
      {
        "title":"Luxury Beauty",
        "subtitle":"From Rs 2199",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img24/Beauty/June/WRS/deals/Luxury_Beauty_1._SY530_QL85_FMpng_.png",
      },
      {
        "title":"Beauty Devices",
        "subtitle":"From Rs 999",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img24/Beauty/June/WRS/flashsale/Beauty_Devices._SY530_QL85_FMpng_.png",
      },
      {
        "title":"Makeup Kit",
        "subtitle":"From Rs 1599",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img24/Beauty/June/WRS/fs/New-Age_Beauty_Brands._SY530_QL85_FMpng_.png",
      },
      {
        "title":"Professional",
        "subtitle":"From Rs 2999",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img24/Beauty/June/WRS/flashsale/Prof_Beauty._SY530_QL85_FMpng_.png",
      },
      {
        "title":"Luxury Minis",
        "subtitle":"From Rs 599",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img24/Beauty/June/WRS/fs/Luxury_Minis._SY530_QL85_FMpng_.png",
      },
      {
        "title":"Bath & Shower",
        "subtitle":"From Rs 999",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img24/Beauty/June/WRS/flashsale/Bath_n_Shower._SY530_QL85_FMpng_.png",
      }
    ],
    "Mens Wear": [
      {
        "title":"T-shirts",
        "subtitle":"From Rs 299",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JuneWRS/GW/PCQC/2x/Trendy_tshirts._SY232_CB556078875_.jpg",
      },
      {
        "title":"Shirts",
        "subtitle":"From Rs 899",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JuneWRS/GW/PCQC/2x/Shirts._SY232_CB556078875_.jpg",
      },
      {
        "title":"Smart Polos",
        "subtitle":"From Rs 499",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JuneWRS/GW/PCQC/2x/Polos._SY232_CB556078875_.jpg",
      },
      {
        "title":"Jeans",
        "subtitle":"From Rs 1099",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JuneWRS/GW/PCQC/1x/Jeans._SY116_CB556078874_.jpg",
      },
      {
        "title":"Classic Jeans",
        "subtitle":"From Rs 1699",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JUNEWRS24/SD/2x2/jeans._SY530_QL85_FMpng_.png",
      },
      {
        "title":"Denims",
        "subtitle":"From Rs 2199",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JUNEWRS24/SD/2x2/levis_flat_999_2._SY530_QL85_FMpng_.png",
      },
      {
        "title":"Sports Tees",
        "subtitle":"From Rs 599",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JUNEWRS24/SD/2x2/Sports_Tees_978x1300._SY530_QL85_FMpng_.png",
      },
      {
        "title":"Oversized",
        "subtitle":"From Rs 699",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JUNEWRS24/SD/2x2/oversizedtees._SY530_QL85_FMpng_.png",
      },
      {
        "title":"Casual Shirts",
        "subtitle":"From Rs 1499",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JUNEWRS24/SD/2x2/Casual_Shirts_978x1300._SY530_QL85_FMpng_.png",
      },
      {
        "title":"Work Wear",
        "subtitle":"From Rs 1899",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JUNEWRS24/SD/2x2/workwear._SY530_QL85_FMpng_.png",
      }
    ],
    "Womens Wear": [
      {
        "title":"Kurtas",
        "subtitle":"From Rs 799",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JuneWRS/GW/PCQC/2x/Kurtas._SY232_CB556078875_.jpg",
      },
      {
        "title":"Tops",
        "subtitle":"From Rs 199",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JuneWRS/GW/PCQC/2x/Tops._SY232_CB556078875_.jpg",
      },
      {
        "title":"Dresses",
        "subtitle":"From Rs 399",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JuneWRS/GW/PCQC/2x/Dresses._SY232_CB556078875_.jpg",
      },
      {
        "title":"Sarees",
        "subtitle":"From Rs 1499",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img21/MA2024/JuneWRS/GW/PCQC/2x/Sarees._SY232_CB556078875_.jpg",
      },
      {
        "title":"Casuals",
        "subtitle":"From Rs 1199",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/SDWRSTILES/Business_Casuals_978x1300._SX846_QL85_.jpg",
      },
      {
        "title":"Elegant Kurtas",
        "subtitle":"From Rs 1999",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/SDWRSTILES/Elegant_Kurtas_and_Sets_978x1300._SX846_QL85_.jpg",
      },
      {
        "title":"Work Wear",
        "subtitle":"From Rs 3399",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/SDWRSTILES/Work_Wear_Styles_978x1300._SX846_QL85_.jpg",
      },
      {
        "title":"Ethnic Wear",
        "subtitle":"From Rs 2499",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/SDWRSTILES/Ethnic_Wear_978x1300._SX846_QL85_.jpg",
      },
      {
        "title":"Oversized",
        "subtitle":"From Rs 399",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/GENXWRS/TRENDS/Next-Gen-Trends_01._SS400_QL85_.jpg",
      },
      {
        "title":"Flared Jeans",
        "subtitle":"From Rs 2999",
        "imageUrl":"https://f.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/GENXWRS/TRENDS/Next-Gen-Trends_03._SS400_QL85_.jpg",
      }
    ]
  }
  return (
    <div><HomePresentational homepageData = {homepageData}/></div>
  )
}
