export default function NavBtns(){
    const Btns = [
        {name:'Home', to:'/#'},
        {name:'Specialties', to:'/#'},
    ]
    return(
        <div className="flex gap-2 md:gap-4">
            {Btns.map((link)=>{
            return(
                <div className="border-2 font-bold border-text-color rounded-lg p-2 cursor-pointer duration-200 hover:scale-110 hover:text-text-color"><span>{link.name}</span></div>
            )
            })}
        </div>
    )
}