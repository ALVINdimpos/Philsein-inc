import logo from '../assets/Images/logo.svg'
import Layout from './layout'

const index = (props) => {
    return (
        <Layout>
            <div className="flex justify-between items-center border-b border-gray-300">
                <h1 className="text-2xl font-semibold pt-2 pb-6">Dashboard</h1>
            </div>
            {/* STATISTICS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
                <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-400 uppercase">Application</p>
                        <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-semibold">0</h1>
                        </div>
                    </div>
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-400 uppercase">User</p>
                        <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-semibold">1</h1>
                        </div>
                    </div>
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-400 uppercase">Querries</p>
                        <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-semibold">121</h1>
                        </div>
                    </div>
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-400 uppercase">Referral</p>
                        <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-semibold">243</h1>
                        </div>
                    </div>
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
                </div>
            </div>
            <div className='flex mt-9 w-full h-full items-center justify-center'>
                <div>Welcome to Your Dashboard</div>
            </div>
        </Layout>
    )
}


export default index