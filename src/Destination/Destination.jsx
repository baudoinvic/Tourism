
import Footer from '../components/Footer/Footer'
import NavBar from '../components/NavBar'
import DestinationPicture from './DestinationPicture/DestinationPicture'
import TravelGrid from './TravelGrid/TravelGrid'
import TravelGridInverse from './TravelGridInverse/TravelGridInverse'

const Destination = () => {
  return (
    <div>
        <NavBar/>
        <DestinationPicture/>
        <TravelGrid/>
        <TravelGridInverse/>
        <Footer/>
    </div>
  )
}

export default Destination