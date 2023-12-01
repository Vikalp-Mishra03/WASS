import React from 'react'
import Navbar from './component/Navbar'
import Main from './component/Main'
import Goal from './component/Goal'
import Services from './component/Services'
import Goal2 from './component/Goal2'
import Workflow from './component/Workflow'
import Form from './component/Form'
import Pricing from './component/Pricing'
import Newsletter from './component/Newsletter'
import Solution from './component/Solution'
import Security from './component/Security'
import Footer from './component/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Goal />
      <Services />
      <Goal2 />
      <Workflow />
      <Form />
      <Pricing />
      <Newsletter />
      <Solution />
      <Security />
      <Footer />
    </div>
  )
}
