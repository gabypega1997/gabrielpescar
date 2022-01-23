import { Fragment } from "react"
import StartPage from "../components/start/start"
import ProjectsSide from "../components/projects/project"
import ContactSide from "../components/contact/contact"
import AboutSide from "../components/about/about"




export default function Home() {
  return (
    <Fragment>
      <StartPage></StartPage>
      <ProjectsSide></ProjectsSide>
      <AboutSide></AboutSide>
      <ContactSide></ContactSide>
    </Fragment>
  )
}
