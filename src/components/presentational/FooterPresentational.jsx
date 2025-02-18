import React from 'react'
import { Link } from 'react-router-dom'

export const FooterPresentational = () => {
  return (
    <div className='bg-gray-400'>
        <div className='w-full h-[10px]'>
        </div>
        <div className='flex justify-evenly bg-black'>
            <div>
                <div className='text-white pt-4 p-1'>
                    <Link to='/about'>
                        About Us
                    </Link>
                </div>
                <div className='text-white p-1'>
                    <Link to='/contact'>
                        Contact Us
                    </Link>
                </div>
                <div className='text-white p-1'>
                    <Link to='/faq'>
                        FAQ
                    </Link>
                </div>
                <div className='text-white p-1'>
                    <Link to='/careers'>
                        Careers
                    </Link>
                </div>
            </div>
            <div>
                <div className='text-white pt-4 p-1'>
                    <Link to='/consumerpolicy'>
                        Consumer Policy
                    </Link>
                </div>
                <div className='text-white p-1'>
                    <Link to='/cancellation'>
                        Cancellation & Returns
                    </Link>
                </div>
                <div className='text-white p-1'>
                    <Link to='/termsofuse'>
                        Terms of Use
                    </Link>   
                </div>
                <div className='text-white p-1'>
                    <Link to='/privacypolicy'>
                        Privacy Policy
                    </Link>
                </div>
            </div>
            <div>
                <div className='text-white pt-4'>
                    Registered Office Address:
                </div>
                <div className='text-white'>
                    <div>
                        ShopWithAnurag Office, Floor no-12
                    </div>
                    <div>
                        Building xyz, New Delhi, 110001
                    </div>
                </div>
                <div className='flex pt-5'>
                    <a href='https://www.instagram.com/' target='_blank'>
                        <div className='text-white py-1 pr-2'>
                            <img className='w-10 h-10 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110' src="data:image/jpeg;base64,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QEBAQEBBqq3DrXcwaNrRs5lyNXo5j5qN7Dqf02eMNXKltczIGKLG5mLBuoY1jY5mJ8ajsnFmB8axstizzvYs7LYs88kanC2tmB7FbVbEvO9iurKyJYHsVtZWxLA9qvrKyJbnAMm3TESSgthGnc5/Nuby9S3MOOZ6y5mu4nGKJpj62/w7uKNrWhrQGtaAAALAAahZbjzFrTad57yvRgQEBAQEBAQEBAQEBAQEHmqKRrtI0HsK0NRoa5Otekrseea9JeGSJzdYty7FxsuC+OdrQ263i3ZaqUxBa4LEsxLA9qwsiWB7EWxLzvapQtiXmkapwurLzvarIW1lbFSvkdmsaXHkGrnOxbGOlrT0gvnpjje0uiwrJljbPns92sMGlg5/GPYuph00V62cbVcTtf5cfSP+3RBbblCAgICAgICAgICAgICAgICAgoRfXpUbVi0bSRMx2eeSiadXF7QtHLw7HbrXovrntHd530bxuPMVoX4flr26roz1lhfE4a2nqK1b4Mle8LYvWfNhcFVyz6LItDA8Jyz6LItDEYHnU0nmaSra4b27RKfi0jvK9mETO8ENG9xt2BbWPQ5beWyFtbjr+Xsp8noxpkcX8g4rfmt/Fw+tfqndrZOI3npWNm2hgYwZrGho3AWW9WkVjaIaF72vO9p3ZFJEQEBAQEBAQEBAQEBAQEBAQEBAQEBAQLLHLBvKlliKwzvKqkwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg//9k="/>
                        </div>
                    </a>
                    <a href='https://x.com/home?lang=en' target='_blank'>
                        <div className='text-white py-1 pr-2'>
                            <img className='w-10 h-10 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRP8qRIaKUrrHgduMUnjoR-RWrpJbhsc2Fow&s"/>
                        </div>
                    </a>
                    <a href='https://www.youtube.com/' target='_blank'>
                        <div className='text-white py-1 pr-2'>
                            <img className='w-10 h-10 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/////AAD/xcX/q6v/srL/uLj//Pz/6Oj/2Nj/+Pj/3d3/9PT/8PD/x8f/v7//Rkb/Y2P/PT3/0ND/y8v/cXH/4+P/k5P/Hh7/nZ3/iIj/1NT/6+v/3Nz/fn7/VVX/IyP/DQ3/MjL/aWn/Vlb/dnb/oqL/QkL/XV3/j4//Zmb/GBj/hIT/n5//dHT/MDD/Tk70z9TjAAAE/klEQVR4nO2daV/iMBCHkVLKWY7Scosoh6Ir3//bLV1RBDmyM5NO+vP/vNs3JI8Lmcx0khYKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4D1XpjHMSTyqgbNYth6PulHd4n6T98PwyLzag7qkziYNyoV7WnfIlqI6iNoqLvLZPhtNe+b81nD3dUHmbz1n27Nx0mS88Po1EtaOiIB1EpWaxbHYbL/3l3WutFUoqCLOTG/rSTidZ5OlN/bFMvTmaKdp/MktiSX9jSdvuiFVrw6861tY6YR9KCPW2lHzyWJf2CvrbPGfqCS2tNW+YCNSnBQNvkIkKLanmjLXKRjcxvsa3tcYW2hGCobXEVicDo7nc0ZcMX9LQdbuCxDV2MhN/pcwUjbYObNJmGj9oCN3lkGmrP3wCeYFN7+gbwvqZD7ekbMGQZalYsTJlzBKvaszeCU46raE/eiArDsKQ9eSNKDMNn7ckbwVlqXE6cDnBSqDwspXd3HYZhNlV7Lg90wbL23A2h1zIa2lM3pEE2jLWnbgi95DbRnrohE7JhV3vqhnTJhgK502DF/4ybFMmGPn/wKIudn082FJjc7s9bfuV/zHXoG9Mlf/B/X6Dgnv9B11iSDQf8wfc/kaLVouSAbCiQWnwtAgJ/rYvQk4spf/DDMle39xh5SjYUmNP3hbxiK1XpkQ0F0sPjUGUpctATxC1/8JNgXLZSntySDQW+VT+2G7GFyEFPgQU6oM5sqJrikWNGNhQY/OyWUTxyOGcoHjncM5SOHFRBiTLN5cRGMnJQCzV1gbGvpG6CkaNONJQoRF1NToMngRFSqF21Et1eN9LvpkxLLrWHT6LUdrPA8CYwCLnYJlFqu11CkYgc1GKbxNNDkyIRP3KMiIYSxUSzMhg3clDLiRLdQqaFPl7koDZ9Z2lYCNYKhsUsDQuFP5mMomfIWm5yYMgMGVRDie5gs7G5YZ/aKZyVIT/pd9tQYvtNNczidyiTQjm80gilwc4aipUyqIaW9zSC5Sg3d22SJUWqoc3cQii530PNLezlh9IPhakdphLHDs8Zyj+eoR5EtFSnsfCIjVqnsVJrs/KYlFprs1AvtfSom9q6J9Gpf2woUjo8A7lbX2Ds74b2Wk6ogrKGYiX8M5ANBZqgPw3ttn6RDd/5Y+8N7bbvvZMNpXoxrDXS7KH3Yggcr9wZNqyf0qQfshTo+oqsNrTtoXd9CUxumMWdPQnZMB8HuzgdtHk4I5tCPyfr6q0tp9BvccnHEVJ6K0YhLye7OOfVszgswWfFMHT/RoUUzq0KifbkjaCHw7wERM5J55H25I2g9pqk5OOIJf2AZcH1K5Q+4F2kxGkByYo1yzCD1IcN/dRTSh6WGs5CU/gFdwzlYFfDvSdK4km3Xdi37mkL3IQr6PzWlLMp/cD1LFjgRnOB484WeeMLun1JDedqmgNjbY0rCF3Q7u6NX5xbvo5wtaoodhf0Lk908bfYYeWFP3AvLPID4QnjF22lI9o23nURCzxsE2Jq6/0P5dCFFwj0QtF3Bvwg9odbrerNZjv0bf3vnVCvFb1ksV5l88qS2Wq9SLxijfEAhkO5Pg7iSrcZlrzB8+vi5ak1pzcG9eetp5fF6/PAK4XNbiUOxnW730gG5WpqXju878k/ed+Tf3jfUy01qTqrAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAECUv8gfbKj5f8bLAAAAAElFTkSuQmCC"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>  
  )
}
