import { headerLogo} from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'
import MenuButton from './MenuButton'
import Menu from './Menu'

const Nav = () => {
  const [menuVisible, setMenuVisibility] = useState(false);

  return (
    <header className='padding-x py-8 absolute z-20 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img 
                  src={headerLogo}  
                  alt='Logo'
                  width={130}
                  height={29}
                />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='font-montserrat leading-normal text-lg text-slate-gray'
                    >
                      {item.label}
                  </a>
                </li>
              ))}
            </ul>
            { menuVisible && <Menu onClose={() => setMenuVisibility(false)} />}
            <MenuButton
              type="button"
              title="Hamburger"
              icon={hamburger}
              onClick={() => setMenuVisibility(true)}
            />
        </nav>
    </header>
  )
}

export default Nav