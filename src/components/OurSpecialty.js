import specialty1 from '../Images/specialty1.png'
import specialty2 from '../Images/specialty2.png'
import specialty3 from '../Images/specialty3.png'
import specialty4 from '../Images/specialty4.png'
import specialty5 from '../Images/specialty5.png'
import specialty6 from '../Images/specialty6.png'
import specialty7 from '../Images/specialty7.png'
import specialty8 from '../Images/specialty8.png'
import specialty9 from '../Images/specialty9.png'

export default function OurSpecialty(){
    const items=[
        {title: 'Dentistry', desc:'Get consultation Form our Dentistry team', img:specialty1},
        {title: 'General Diagnosis', desc:'Get consultation form our General Diagnosis team', img:specialty2},
        {title: 'Neuro Surgery', desc:'Get consultation form our Neuro Surgery team', img:specialty3},
        {title: 'Cardiology', desc:'Get consultation form our Cardiology team', img:specialty4},
        {title: 'Pharmacy', desc:'Get consultation form our Pharmacy team', img:specialty5},
        {title: 'Trained Staff', desc:'Get consultation form our Trained staff team', img:specialty6},
        {title: 'DNA Mapping', desc:'Get consultation form our DNA Mapping team', img:specialty7},
        {title: 'Ophthalmology', desc:'Get consultation form our  Ophthalmology team', img:specialty8},
        {title: 'Medical Aid', desc:'Get consultation form our Emergency Medical Aid Team', img:specialty9},
    ]
    return(
        <div className="items-center py-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-first-color">
            <div className="text-center flex flex-col gap-y-4">
                <h2 className='text-head-color text-4xl font-bold'>Our Specialty</h2>
                <span className='text-p-color'>We provide the world class services with the | best medical team!</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-16 gap-8 md:gap-12 items-center">
            {items.map((item)=>{
                return(
                    <div className='flex flex-col group cursor-pointer items-center text-center gap-y-5 min-h-80 p-16 rounded-2xl bg-white hover:bg-btn-color hover:scale-105 duration-200'>
                        <div className='bg-first-color rounded-xl p-5 flex justify-center items-center h-20 w-20'>
                            <img src={item.img} alt="img" />
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <h4 className='font-bold text-2xl'>{item.title}</h4>
                            <span className='text-p-color text-md group-hover:text-white'>{item.desc}</span>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}