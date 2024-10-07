import React from 'react'

export const ConsumerPolicyPresentational = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[80%]'>
            <div className='m-4 text-4xl font-extrabold'>
                Consumer Policy
            </div>
            <div className='ml-4'>
                At ShopWithAnurag, we are committed to providing a seamless and trustworthy shopping experience for all our customers. Below you will find our consumer policies, designed to ensure transparency and fairness.
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    1. Shipping Policy
                </div>
                <div>
                    <div className='ml-4'>
                        We aim to deliver your orders promptly and efficiently. Here are our shipping policies:
                    </div>
                    <ul className='ml-4'>
                        <li><span className=' font-bold'>Processing Time:</span> Orders are processed within 1-2 business days.</li>
                        <li><span className=' font-bold'>Shipping Methods:</span> We offer standard, expedited, and express shipping options.</li>
                        <li><span className=' font-bold'>Shipping Costs:</span> Shipping costs are calculated at checkout based on the selected shipping method and destination.</li>
                        <li><span className=' font-bold'>International Shipping:</span> We ship worldwide. International shipping times and costs vary by destination.</li>
                    </ul>
                </div>
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    2. Payment Methods
                </div>
                <div>
                    <div className='ml-4'>
                        We accept various payment methods to ensure a convenient shopping experience:
                    </div>
                    <ul className='list-disc pl-8'>
                        <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
                        <li>PayPal</li>
                        <li>UPI</li>
                    </ul>
                </div>
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    3. Warranty Policy
                </div>
                <div>
                    <div className='ml-4'>
                        Our products come with a warranty to protect against manufacturing defects:
                    </div>
                    <ul className='ml-4'>
                        <li><span className=' font-bold'>Warranty Period:</span> The warranty period varies by product and is specified on the product page.</li>
                        <li><span className=' font-bold'>Coverage:</span> The warranty covers manufacturing defects but does not cover damage caused by misuse, accidents, or normal wear and tear.</li>
                    </ul>
                </div>
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    4. Updates to Policies
                </div>
                <div className='ml-4'>
                    We may update our policies from time to time. Any changes will be posted on this page, and we encourage you to review our policies periodically to stay informed.
                </div>
            </div>
        </div>
    </div>
  )
}
