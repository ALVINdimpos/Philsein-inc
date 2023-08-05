import Layout from './layout'
import { useState, useEffect } from 'react';
import { formatDate } from '../Services/Utils';
import {toast} from "react-toastify";


export default function staff_forms() {
    const [apps, setApps] = useState([]);
    const [unread, setUnread] = useState(0);
    const [read, setRead] = useState(0);
    const [deleteApp, setDelete] = useState("");

    useEffect(() => {
        const getApps = async () => {
            const config = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
            const res = await (await fetch("http://localhost:3000/staff", config)).json();
            setApps(_ => res.data);
            const uRead = res.data.filter(item => item.readStatus==false);
            const Read = res.data.filter(item => item.readStatus==true);
            setRead(_ => Read?.length);
            setUnread(_ => uRead?.length);
            // console.log(res.data)
        }

        getApps();
    }, [])

    const DeleteApp = async (deleteApp) => {
        if(deleteApp?.length < 1) {
            return 0
        }
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        const res = await (await fetch(`http://localhost:3000/staff/${deleteApp}`, {
            "method": "DELETE",
            ...config
        })).json();
        if (res.status === 200) {
            toast.success(res.message, {toastId: `${deleteApp}`})
            setApps(prev => prev.filter(app => app._id != deleteApp))
        }
        return 1
    }


    const handleDelete = (e) => {
        const res = DeleteApp(e.target.id)
    }
    return (
        <Layout>
            <div className="flex justify-between items-center border-b border-gray-300">
            <h1 className="text-2xl font-semibold pt-2 pb-6">Staff Applications</h1>
            </div>
            {/* STATISTICS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
                <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-400 uppercase">Total Applications</p>
                        <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-semibold">{read + unread}</h1>
                        </div>
                    </div>
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-400 uppercase">Total Read Applications</p>
                        <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-semibold">{read}</h1>
                        </div>
                    </div>
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-400 uppercase">Total Unread Applications</p>
                        <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-semibold">{unread}</h1>
                        </div>
                    </div>
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
            </div>
            {/* END OF STATISTICS */}
            <section>
            <div className="bg-white shadow rounded-sm my-2.5 overflow-x-auto">
                <table className="min-w-max w-full table-auto">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Wants</th>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Company Name</th>
                            <th className="py-3 px-6 text-left">Company Email</th>
                            <th className="py-3 px-6 text-center">Phone</th>
                            <th className="py-3 px-6 text-center">Size</th>
                            <th className="py-3 px-6 text-center">City</th>
                            <th className="py-3 px-6 text-center">Province</th>
                            <th className="py-3 px-6 text-center">Status</th>
                            <th className="py-3 px-6 text-center">Date</th>
                            <th className="py-3 px-6 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                    {apps.length?
                        apps.map((app, idx) => (
                            <tr className="border-b border-gray-200 even:bg-gray-100 hover:bg-gray-100" key={idx}>
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    {app.want_to_hire}
                                </td>
                                <td className="py-3 px-6 text-left">
                                    {app.first_name} {app.last_name}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    {app.company_name}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    {app.company_email}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    {app.size_of_company}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    {app.phone_number}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    {app.city}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    {app.province}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className={`${app.readStatus?"bg-green-200":"bg-purple-200"} bg-green-200 ${app.readStatus?"text-green-500":"text-purple-600"} py-1 px-3 rounded-md text-xs`}>{app.readStatus? "Read": "Unread"}</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    {formatDate(app.createdAt)}
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        <div className="w-4 mr-2 transform hover:text-red-500 hover:scale-110 cursor-pointer" onClick={handleDelete} id={app._id}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleDelete} id={app._id}>
                                                <path onClick={handleDelete} id={app._id} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )):
                        <tr className=" border-b border-gray-200 hover:bg-gray-100">
                            <td className='h-10 flex items-center justify-center' colSpan="7"> There are no Available Staff Applications</td>
                        </tr>
                        }
                    </tbody>
                </table>
            </div>
            </section>
        </Layout>
    )
}
