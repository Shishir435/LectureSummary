

const Footer = () => {
    let date = new Date().getFullYear();
  return (
    <footer className="w-full fixed bottom-1 p-4">
        <p className="text-center">Copyright &copy;LectureSummary {date}</p>
    </footer>
  )
}
export default Footer