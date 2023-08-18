import Image from "next/image"
import Link from "next/link"
import imgUrl from '../android-chrome-192x192.png'
const LectureSummaryUrl="https://chrome.google.com/webstore/detail/speedysynopsis/mnejhfjohfbgdoadgjmfigodfagokeme?gclid=Cj0KCQjwrfymBhCTARIsADXTabkhCVR6HhP-QqZ9VUOx6Q8VGSQeF6AnPrSByTXhznQOkJHtQwXT5oEaAjujEALw_wcB"
const Navbar = () => {
  return (
    <nav className="flex justify-between p-10">
        <div className="nav-right"> <Link href={LectureSummaryUrl} target="_blank"><Image className="object-contain" src={imgUrl} width={32} height={32} alt="Lecture Summary"/></Link></div>
        <div className="nav-left flex gap-4">
            <Link href="https://shishirchaurasiya.site" target="_blank">Portfolio</Link>
            <Link href="https://linkedin.com/in/shishir-chaurasiya" target="_blank">Linkedin</Link>
            <Link href="https://www.youtube.com/playlist?list=PLeUrodOeaxgThsT3IfYQodpR7qRYzlMDF" target="_blank">Youtube</Link>
            <Link href="https://www.instagram.com/_shishir435/" target="_blank">Instagram</Link>
        </div>
    </nav>
  )
}
export default Navbar