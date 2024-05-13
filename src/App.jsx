import { Layout } from './components/layout.jsx'
import Navbar from './components/navbar.jsx'
import Blocs from './components/blocs.jsx'
import { Routes, Route, Navigate } from "react-router-dom"
import Inicio from './pages/inicio.jsx'
import Cursos from './pages/cursos.jsx'
import Certificados from './pages/certificados.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'
import Footer from './components/footer.jsx'
import { useState, useEffect } from 'react'

function App() {

  const [numero, setNumero] = useState(0)

  const incrementar = () => {
    setNumero(numero + 1)
  }

  useEffect (()=>{
    console.log("numero = "+ numero)
  }, [numero] )

  return (
    <>
      <div className="bg-accent min-h-screen">
        <Navbar/>
        <Layout >
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={incrementar}>{numero}
        </button>
            <Routes>
              <Route path="/" element={<Inicio/>} />
              <Route path="*" element={<Navigate to="/"/>} />
              <Route path="/cursos" element={<Cursos/>} />
              <Route path="/certificados" element={<Certificados/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
            </Routes>
        </Layout>
        {/*<Blocs />*/}
        <Footer/>
        
      </div>
    </>
  )
}

export default App

// https://www.youtube.com/watch?v=VQ2Kxo-zFRM