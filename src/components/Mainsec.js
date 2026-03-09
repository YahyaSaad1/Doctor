import imgDoc from '../Images/Group 4.png'

export default function Mainsec(){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-5 px-6 md:px-12 lg:px-16 xl:px-20 bg-first-color">
            <div className="flex flex-col gap-y-6 justify-center md:w-3/4">
                <div className="leading-loose">
                    <span className="text-head-color text-5xl font-bold mr-2">Get Expert</span>
                    <span className="text-5xl font-bold text-text-color">Medical Consultation!</span>
                </div>
                <div>
                    <span className='text-p-color'>Our doctors provide expert medical advice and consultation. Get in touch with our team to discuss.</span>
                </div>
                <div>
                    <input className="rounded-lg outline-none w-full py-2 px-4 border-2 hover:border-text-color duration-200" type="search" placeholder="Search Doctors in your location" name="search" id="search" />
                </div>
            </div>
            <div className="flex justify-center">
                <div className="mt-16">
                    <img className='h-96' src={imgDoc} alt="imgDoc" />
                </div>
            </div>
        </div>
    )
}