import image1 from '../Images/image 1.png'
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
        <div className="py-16 px-6 md:px-12 lg:px-16 xl:px-20 gap-40 bg-first-color">
            <div className='flex flex-col gap-y-6'>
                <h2 className='text-head-color text-4xl font-bold'>Read feedback about our Services and wonderful team!</h2>
                <span className='text-p-color'>We take care of our patients just like a family member . Read the testimonials from our patients. </span>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  mt-6'>
                {feedbacks.map((feedback)=>{
                    return(
                        <div key={feedback.id} className='bg-white rounded-2xl py-12 px-8 cursor-pointer hover:scale-105 duration-200'>
                            <div>
                                <img src={comment} alt="comment" />
                                <h3 className='text-p-color mt-3'>{feedback.comment}</h3>
                            </div>
                            <div className='flex items-center gap-2 mt-10'>
                                <div>
                                    <img className='w-12 h-12 rounded-full' src={feedback.img} alt="Michael" />
                                </div>
                                <div>
                                    <h5 className='font-semibold'>{feedback.name}</h5>
                                    <span className='text-p-color mt-3'>{feedback.job}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}