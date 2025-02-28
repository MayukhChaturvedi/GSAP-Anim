import Page from "./components/Page"
import TextReveal from "./components/Page1"
import Page2 from "./components/Page2";


function App() {


  return (
  <>
  <h1 className="text-5xl text-center font-bold underline">Gsap</h1>
  <Page/>
  <h1 className="text-5xl text-center font-bold underline">Framer-motion</h1>
  <TextReveal/>
  <Page2 />
  </>
  )
}

export default App
