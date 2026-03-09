import comment from '../Images/comment.png'
import img1 from '../Images/img1.png'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.png'
import img4 from '../Images/img4.png'

export default function Feedback(){
    const feedbacks = [
        {id:'1', name:'Michael', job:'Patient', img:img1, comment:'Amazing team and amazing treatment from the best doctor in the world',},
        {id:'2', name:'Michael', job:'Patient', img:img2, comment:'Amazing team and amazing treatment from the best doctor in the world',},
        {id:'3', name:'Michael', job:'Patient', img:img3, comment:'Amazing team and amazing treatment from the best doctor in the world',},
        {id:'4', name:'Michael', job:'Patient', img:img4, comment:'Amazing team and amazing treatment from the best doctor in the world',},
    ]
    return(
        /* تم استبدال gap-40 بـ flex flex-col و gap-12 لتكون المسافات منطقية */
        <div className="py-16 px-6 md:px-12 lg:px-20 bg-first-color flex flex-col gap-12">
            
            {/* الجزء الخاص بالعناوين */}
            <div className='flex flex-col gap-y-4 max-w-2xl'>
                <h2 className='text-head-color text-3xl md:text-4xl font-bold leading-tight'>
                    Read feedback about our Services and wonderful team!
                </h2>
                <p className='text-p-color'>
                    We take care of our patienccccccccts just like a family member. Read the testimonials from our patients.
                </p>
            </div>

            {/* الجزء الخاص بالـ Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {feedbacks.map((feedback)=>{
                    return(
                        <div key={feedback.id} className='bg-white rounded-2xl p-8 cursor-pointer hover:scale-105 duration-200 shadow-sm flex flex-col justify-between'>
                            <div>
                                <img src={comment} alt="comment" className="w-8 h-8" />
                                <p className='text-p-color mt-4 text-sm leading-relaxed'>
                                    "{feedback.comment}"
                                </p>
                            </div>
                            
                            <div className='flex items-center gap-3 mt-8'>
                                <img className='w-12 h-12 rounded-full object-cover' src={feedback.img} alt={feedback.name} />
                                <div>
                                    <h5 className='font-bold text-sm'>{feedback.name}</h5>
                                    <span className='text-xs text-gray-500'>{feedback.job}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}


