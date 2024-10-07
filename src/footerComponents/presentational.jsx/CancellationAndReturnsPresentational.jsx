import React from 'react'

export const CancellationAndReturnsPresentational = () => {
  return (
    <div className='flex justify-center'>
        <div className='w-[80%]'>
            <div className='m-4 text-4xl font-extrabold'>
                Cancellation and Returns Policy
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    Order Cancellation: 
                </div>
                <div>
                    <div className='font-bold'>
                        1. Before Shipment:
                    </div>
                    <ul className='mb-1 list-disc pl-4'>
                        <li>Orders can be canceled at no charge before they are shipped. To cancel an order, please contact our Customer Service team at +919999999999.</li>
                        <li>Once the order is successfully canceled, you will receive a confirmation email.</li>
                    </ul>
                </div>
                <div>
                    <div className='font-bold'>
                        2. After Shipment:
                    </div>
                    <ul className='mb-1 list-disc pl-4'>
                        <li>If your order has already been shipped, it cannot be canceled. However, you can return the item once it arrives following our return policy below.</li>
                    </ul>
                </div>
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    Return Policy:
                </div>
                <div>
                    <div className='font-bold'>
                        1. Eligibility:
                    </div>
                    <ul className='mb-1 list-disc pl-4'>
                        <li>Items must be returned within 30 days of the delivery date.</li>
                        <li>Items must be unused, in original packaging, and in the same condition as when received.</li>
                        <li>Certain items are non-returnable, including personalized items, perishable goods, and final sale products. Please refer to the product page for specific details.</li>
                    </ul>
                </div>
                <div>
                    <div className='font-bold'>
                        2. Process:
                    </div>
                    <ul className='mb-1 list-disc pl-4'>
                        <li>To initiate a return, please contact our Customer Service team at +919999999999 or log into your account and fill out the return request form.</li>
                        <li>Once your return request is approved, you will receive a return authorization number and instructions on how to send back the item.</li>
                    </ul>
                </div>
                <div>
                    <div className='font-bold'>
                        3. Return Shipping:
                    </div>
                    <ul className='mb-1 list-disc pl-4'>
                        <li>Customers are responsible for return shipping costs unless the item is defective or incorrect.</li>
                        <li>We recommend using a trackable shipping service or purchasing shipping insurance. We do not guarantee that we will receive your returned item.</li>
                    </ul>
                </div>
                <div>
                    <div className='font-bold'>
                        4. Refunds:
                    </div>
                    <ul className='mb-1 list-disc pl-4'>
                        <li>Once your return is received and inspected, we will send you an email to notify you of the approval or rejection of your refund.</li>
                        <li>If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 7-10 business days.</li>
                    </ul>
                </div>
            </div>
            <div className='m-4'>
                <div className='mb-2 text-2xl font-bold'>
                    Exchanges:
                </div>
                <ul className='mb-1 list-disc pl-4'>
                    <li>We only replace items if they are defective or damaged. If you need to exchange it for the same item, contact our Customer Service team at +919999999999 for assistance.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
