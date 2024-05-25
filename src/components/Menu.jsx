import { close } from "../assets/icons"
import { navLinks } from "../constants"

const Menu = ({onClose}) => {
  return (
    <section className='top-0 right-0 h-full w-[50%] sm:w-[40%] md:w-[30%] flex flex-col sm:px-8 px-4 py-8 lg:hidden bg-coral-red shadow-sm fixed gap-6'>
        <div className="w-[90%] flex flex-col items-end">
            <button className="hover:bg-black hover:bg-opacity-15  rounded-full p-2 transition-all">
                <img
                    onClick={onClose}
                    src={close}
                    alt="close-menu"
                    height={25}
                    width={25}
                    className="inline-block cursor-pointer lg:hidden "
                />
            </button>
        </div>
        <ul className="hidden max-lg:flex flex-col">
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a
                        href={item.href}
                        className='flex items-center justify-center font-montserrat leading-normal flexCenter cursor-pointer text-lg text-white rounded-full hover:bg-white hover:text-coral-red p-3 w-full transition-all'
                        >
                        {item.label}
                    </a>
                 </li>
            ))}
        </ul>
    </section>
      
  )
}

export default Menu