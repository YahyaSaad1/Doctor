export default function NavLink(){
    const Links = [
        {name:'Home', to:'/#'},
        {name:'Specialties', to:'/#'},
        {name:'Doctors', to:'/#'},
        {name:'OPO', to:'/#'},
    ]
    return(
        <ul className="flex gap-6">
            {Links.map((link)=>{
            return(
                <li className="cursor-pointer font-bold duration-200 hover:text-text-color hover:scale-110">{link.name}</li>
            )
            })}
        </ul>
    )
}