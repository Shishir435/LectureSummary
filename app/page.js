
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import SupportForm from './components/SupportForm';

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex  flex-col items-center  p-8 gap-7">
      <h1 className='text-3xl'>Welcome To Lecture Summary Support Page</h1>
      <p className='text-2xl'>Please Submit your queries and suggestions here.</p>
      <SupportForm/>
    </main>
    <Footer/>
    </>
  )
}
