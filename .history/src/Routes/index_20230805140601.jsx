import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LANDING from '../Pages/landing'
import LOGIN from '../Pages/login'
import ReferralProgram from '../Pages/referral'
import ApplicationPage from '../Pages/applicationPage'
import Recruitment from '../Pages/recruitment'
<<<<<<< HEAD
import JOB from '../Pages/job'
=======
import AllJobsPage from '../Pages/AllJobsPage'
import JobNurse from '../Pages/JobNurse'
import JobNurseAuxiliary from '../Pages/JobNurseAuxiliary'
import JobOccupationalTherapist from '../Pages/JobOccupationalTherapist'
import JobSocialWorker from '../Pages/JobSocialWorker'
import JobPhysiotherapist from '../Pages/JobPhysiotherapist'
import JobInhalotherapist from '../Pages/JobInhalotherapist'
import JobPreposeAuxBeneficiaires from '../Pages/JobPreposeAuxBeneficiaires'
import JobTechnicienTravailSocial from '../Pages/JobTechnicienTravailSocial'
import Dashboad from "../dashboad/index"
>>>>>>> ft:add some pages
// import ABOUT from "../Pages/about"
import CONTACT from '../Pages/contact'
// import BLOG from "../Pages/blog"
import FAQ from '../Pages/FAQ'
// import WAGE from "../Pages/wage"
import HISTORY from '../Pages/history'
import ADVANTAGES from '../Pages/advantages'
import VALUES from '../Pages/values'

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LANDING />} />
        <Route path="login" element={<LOGIN />} />
        <Route path="job/:id" element={<JOB />} />
        <Route path="referral" element={<ReferralProgram />} />
        <Route path="application" element={<ApplicationPage />} />
        <Route path="recruitment" element={<Recruitment />} />
        <Route path="history" element={<HISTORY />} />
        <Route path="advantages" element={<ADVANTAGES />} />
        <Route path="values" element={<VALUES />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<CONTACT />} />
      </Routes>
    </BrowserRouter>
  )
}
