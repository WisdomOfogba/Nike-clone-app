import { hamburger } from "../assets/icons"

const   MenuButton = ({ type, icon, title, onClick}) => {
    return (
      <button 
      className="hidden max-lg:block hover:bg-slate-200  rounded-full p-2 transition-all"
      type={type}
      onClick={onClick}
      >
          <img src={icon} alt={title} width={25} height={25} />
      </button>
    )
  }
  
export default MenuButton