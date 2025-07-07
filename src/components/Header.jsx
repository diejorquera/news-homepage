import { NavBar } from './NavBar'
import logo from '/Users/diegojorquera/Documents/Proyectos Frontend/news-homepage/src/assets/images/logo.svg'

export const Header = () => {
  return (
    <header className="bg-red-500 flex place-content-between items-center">
      <img src={logo} alt="Logo" />
      <NavBar />
    </header>
  )
}
