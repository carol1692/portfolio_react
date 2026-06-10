import Footer from "../../components/footer/Footer";
import Layout from "../../components/layout/Layout";
import Contact from "../../pages/contact/Contact"
import Projects from "../projects/Projects";
import Resume from "../resume/Resume";
import Skills from "../skills/Skills";
import Home from "./Home";
import HomeLandingComponent from "./HomeLandingComponent";

export default function HomeLanding() {
  return (
    <>
    <Layout>
        <HomeLandingComponent />
        <Skills />
        <Resume />
        <Resume />
        <Resume />
    </Layout>
        
   
    </>
   
  )
}
