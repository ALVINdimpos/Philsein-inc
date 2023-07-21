import { BrowserRouter, Routes, Route } from "react-router-dom";
import LANDING from "../Pages/landing"
import LOGIN from "../Pages/login"
// import FOOTER from "../Layouts/Footer/index"
// import REGISTER from "../Pages/register"
// import JOBS from "../Pages/jobs"
// import JOB from "../Pages/job"
// import ABOUT from "../Pages/about"
// import CONTACT from "../Pages/contact"
// import BLOG from "../Pages/blog"
// import FAQ from "../Pages/faq"
// import WAGE from "../Pages/wage"
// import HISTORY from "../Pages/history"
// import ADVANTAGES from "../Pages/advantages"
// import VALUES from "../Pages/values"

export default function index(){
    return(
        <BrowserRouter>
        <Routes>
            <Route index element={<LANDING />} />
            <Route path="login" element={<LOGIN />} />
        </Routes>
      </BrowserRouter>

            /* <Route path="/register">
                    <REGISTER/>
                </Route>
                <Route path="/jobs">
                    <JOBS/>
                </Route>
                <Route path="/job">
                    <JOB/>
                </Route>
                <Route path="/about">
                    <ABOUT/>
                </Route>
                <Route path="/contact">
                    <CONTACT/>
                </Route>
                <Route path="/blog">
                    <BLOG/>
                </Route>
                <Route path="/faq">
                    <FAQ/>
                </Route>
                <Route path="/wage">
                    <WAGE/>
                </Route>
                <Route path="/history">
                    <HISTORY/>
                </Route>
                <Route path="/advantages">
                    <ADVANTAGES/>
                </Route>
                <Route path="/values">
                    <VALUES/>
                </Route> */
    )
}