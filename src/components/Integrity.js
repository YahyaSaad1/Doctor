import image1 from '../Images/img-1.png'
import image2 from '../Images/img-2.png'
import image3 from '../Images/img-3.png'
import image4 from '../Images/img-4.png'
import ComAbout from './ComAbout'

export default function Integrity(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-16 px-6 md:px-12 lg:px-16 xl:px-20 gap-x-40">
            <div className='grid grid-cols-2 gap-4 items-start'>
                <div className='flex flex-col gap-y-4 items-center'>
                    <img className='rounded-3xl w-60' src={image1} alt="image1" />
                    <img className='rounded-3xl w-60' src={image2} alt="image2" />
                </div>

                <div className='flex flex-col gap-y-4 items-center mt-12'>
                    <img className='rounded-3xl w-60' src={image3} alt="image3" />
                    <img className='rounded-3xl w-60' src={image4} alt="image4" />
                </div>
            </div>
            <ComAbout hint='Integrity' to='/#' title='Our Stellar Values' desc='The cornerstone of our establishment is ‘Making the benefits of exceptional medical services reach the people without Discrimination.’ We strive to live up to this philosophy through our stellar values, that are the pillars of every service that we offer under the banner of our prestigious hospital.' />
        </div>
    )
}