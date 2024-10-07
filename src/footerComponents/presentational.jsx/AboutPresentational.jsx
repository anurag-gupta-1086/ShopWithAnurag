import React from 'react'

export const AboutPresentational = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[80%]'>
            <div className='m-4 text-4xl font-extrabold'>
                About Us
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    Our Story
                </div>
                <div>
                    Welcome to ShopWithAnurag, where passion meets fashion! Founded in 2024, we embarked on a journey to revolutionize the shopping experience by offering unique, high-quality products at unbeatable prices. Our love for style and innovation drives us to curate a diverse collection that caters to all tastes and preferences.
                </div>
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    Our Mission
                </div>
                <div>
                    At ShopWithAnurag, our mission is simple: to provide our customers with a seamless and enjoyable shopping experience. We strive to be a one-stop-shop for all your needs, offering a wide range of products that combine quality, affordability, and style. Your satisfaction is our top priority, and we are dedicated to exceeding your expectations every time you shop with us.
                </div>
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    What We Offer
                </div>
                <div>
                    <div className='mb-1'>
                        We take pride in offering a carefully curated selection of products across various categories, including:
                    </div>
                    <ul className='ml-2'>
                        <li><span className=' font-bold'>Fashion:</span> Trendy and timeless clothing, accessories, and footwear for men, women, and children.</li>
                        <li><span className=' font-bold'>Home & Living:</span> Stylish home decor, furniture, and essentials to create a cozy and beautiful living space.</li>
                        <li><span className=' font-bold'>Electronics:</span> The latest gadgets and tech accessories to keep you connected and entertained.</li>
                        <li><span className=' font-bold'>Beauty & Health:</span> Premium beauty products and health essentials to help you look and feel your best.</li>
                    </ul>
                </div>
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    Our Values
                </div>
                <ul>
                    <li><span className=' font-bold'>Quality:</span> We believe in offering only the best. Every product in our store is handpicked to ensure it meets our high standards of quality and durability.</li>
                    <li><span className=' font-bold'>Customer Satisfaction:</span> Your happiness is our success. We are committed to providing exceptional customer service and a hassle-free shopping experience.</li>
                    <li><span className=' font-bold'>Innovation:</span> We continuously explore new trends and ideas to bring you fresh and exciting products that enhance your lifestyle.</li>
                    <li><span className=' font-bold'>Sustainability:</span> We are dedicated to promoting sustainable practices and offering eco-friendly products that contribute to a better future for our planet.</li>
                </ul>
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    We promise to provide you with:
                </div>
                <ul className='list-disc p-4'>
                    <li>A user-friendly shopping experience with easy navigation and secure payment options.</li>
                    <li>Fast and reliable shipping to get your purchases to you as quickly as possible.</li>
                    <li>Excellent customer support to assist you with any inquiries or concerns.</li>
                </ul>
                <div>
                    Thank you for choosing ShopWithAnurag. We look forward to serving you and making your shopping experience unforgettable.
                </div>
            </div>
        </div>  
    </div>
  )
}
