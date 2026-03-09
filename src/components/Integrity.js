import image1 from '../Images/img-1.png'
import image2 from '../Images/img-2.png'
import image3 from '../Images/img-3.png'
import image4 from '../Images/img-4.png'
import ComAbout from './ComAbout'

export default function Integrity(){
    return(
       <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-16 px-6 md:px-12 lg:px-20 gap-12 lg:gap-20 bg-white">
            
            {/* حاوية الصور */}
            <div className='grid grid-cols-2 gap-4 items-start order-2 lg:order-1'>
                <div className='flex flex-col gap-y-4'>
                    <img className='rounded-3xl w-full shadow-lg' src={image1} alt="Medical professional 1" />
                    <img className='rounded-3xl w-full shadow-lg' src={image2} alt="Medical professional 2" />
                </div>

                {/* تأثير الإزاحة (Offset) */}
                <div className='flex flex-col gap-y-4 mt-10 md:mt-16'>
                    <img className='rounded-3xl w-full shadow-lg' src={image3} alt="Medical professional 3" />
                    <img className='rounded-3xl w-full shadow-lg' src={image4} alt="Medical professional 4" />
                </div>
            </div>

            {/* نصوص القسم */}
            <div className="order-1 lg:order-2">
                <ComAbout 
                    hint='Integrity' 
                    to='/#' 
                    title='Our Stellar Values' 
                    desc='The cornerstone of our establishment is ‘Making the benefits of exceptional medical services reach the people without Discrimination.’ We strive to live up to this philosophy through our stellar values, that are the pillars of every service that we offer under the banner of our prestigious hospital.' 
                />
            </div>
        </div>
    )

}
