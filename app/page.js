
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import SupportForm from './components/SupportForm';

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="flex  flex-col items-center  p-10 gap-9">
      <h1 className='text-3xl'>Welcome to Lecture summary Support Page</h1>
      <SupportForm/>
    </main>
    <Footer/>
    </>
  )
}
