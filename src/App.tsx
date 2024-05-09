import { Header } from './components/Header'
import { Home } from './components/Home'
import headerImage from '/header-image.svg'

export function App() {
  return(
    <>
     <Header />
      <Home />
      <img src={ headerImage } alt="" />
      <button>CONTACT ME</button>
    </>
  )
}


