import Page from "./components/Page"
import TextReveal from "./components/Page1"
import Page2 from "./components/Page2";


function App() {


  return (
  <>
  <h1 className="text-5xl text-center font-bold underline">Gsap wali</h1>
  <Page/>
  <h1 className="text-5xl text-center font-bold underline">Framer-motion vali</h1>
  <TextReveal/>
  <h2 className="text-2xl text-center font-bold">animation dekhne ke liye page refresh karlena</h2>
  <Page2 />
  </>
  )
}

export default App
