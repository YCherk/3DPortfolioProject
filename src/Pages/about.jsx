import { useLocation, useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import Navbar from '../components/Navbar';

export default function About() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAboutPage = location.pathname === '/about';

  const handleButtonClick = () => {
    navigate('/projects');
  };

  return (
    <div>
      <Spline className="absolute inset-0 z-0" scene="https://prod.spline.design/7pGJkMvL8cAxarNq/scene.splinecode" />
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar className={isAboutPage ? 'text-white' : 'text-black'} />
      </header>
      <button
        onClick={handleButtonClick}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-3 rounded-md shadow-lg text-lg font-semibold hover:bg-gray-100"
      >
        Collect Card
      </button>
    </div>
  )
}
