
import './App.css'
import logo from '../src/assets/Logo-06.png'
import Lottie from "lottie-react"
import animation from './assets/Animation - 1711444933119.json'
import animationPhone from './assets/Animation - 1711446966142.json'

function App() {
  

  return (
    <>
      <div className='flex px-5 flex-col freshbg justify-center'>
        
        <div className='md:-mt-24 md:-mb-20 flex justify-center w-[400px] md:w-[650px] mx-auto'>
        <Lottie className='text-current' animationData={animation}/>
        </div>
        <h2 className='text-5xl md:text-7xl text-center -mt-10 uppercase font-bold'>_Under Construction</h2>
        <h2 className='text-center mt-8 text-xl font-medium font-mono'>Welcome to Fresh Food Official website! We're busy crafting something amazing just for you. <br /> Stay tuned for an exciting new online experience coming your way soon. Get ready to explore and discover what we have in store for you. </h2>
        <img className='w-[300px] mt-10 -mb-4 mx-auto' src={logo} alt="" />
        <div className='pb-12 text-center'>
          <h2 className='text-2xl font-semibold'>Contact Now</h2>
          <h4 className='text-lg font-semibold'>Address: 1101 Flushing Avenue, Brooklyn 11237.</h4>
          <h4>Email: contact@sarwarfooddistribution.com</h4>
          <div className='flex justify-center items-center'>
            
            <h3 className='text-xl font-semibold'>929-471-5485</h3>
            <div className='w-[70px] h-[70pz]'>
            <Lottie animationData={animationPhone}/>
            </div>
            <h3 className='text-xl font-semibold'>347-844 - 9037</h3>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
