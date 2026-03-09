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
       <div className="flex flex-col items-center py-16 px-6 md:px-12 lg:px-20 bg-first-color">
            <div className="text-center flex flex-col gap-y-4 max-w-2xl">
                <h2 className='text-head-color text-3xl md:text-4xl font-bold'>Our Specialty</h2>
                <p className='text-p-color'>We provide the world class services with the best medical team!</p>
            </div>

            {/* تم تحسين الـ Grid والـ Gap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 w-full max-w-7xl">
                {items.map((item, index)=>{
                    return(
                        <div key={index} className='flex flex-col group cursor-pointer items-center text-center gap-y-6 p-8 md:p-10 rounded-2xl bg-white hover:bg-btn-color hover:scale-105 duration-300 shadow-sm transition-all'>
                            {/* حاوية الأيقونة */}
                            <div className='bg-first-color rounded-xl p-4 flex justify-center items-center h-20 w-20 group-hover:bg-white/20 transition-colors'>
                                <img src={item.img} alt={item.title} className="w-12 h-12 object-contain" />
                            </div>

                            <div className='flex flex-col gap-y-3'>
                                <h4 className='font-bold text-xl md:text-2xl group-hover:text-white transition-colors'>{item.title}</h4>
                                <p className='text-p-color text-sm md:text-base group-hover:text-white/90 transition-colors'>
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
