import image1 from '../Images/image 1.png'
import ComAbout from './ComAbout'

export default function AboutUs(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 items-center py-16 px-6 md:px-12 lg:px-16 xl:px-20 gap-x-40">
            <div className=''>
                <img src={image1} alt="image1" />
            </div>
            <ComAbout hint='About Us' to='/#' title='World-Class Preventive, Prescriptive & Curative Medical Practices' desc='Being in the healthcare sector, we consider it our paradigm duty to ensure Safety of our patients, effectiveness of our treatments, transparency in our practices, and absolute timely care.' />
        </div>
    )
}