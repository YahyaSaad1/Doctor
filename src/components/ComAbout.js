import Btn from './Btn'

export default function ComAbout({hint, title, desc, to}){
    return(
        <div className='flex flex-col gap-y-6 leading-relaxed'>
            <span className='text-text-color mt-10'>{hint}</span>
            <h2 className='text-head-color text-4xl font-bold'>{title}</h2>
            <span className='text-p-color'>{desc}</span>
            <Btn title='Contact Us' to={to} />
        </div>
    )
}