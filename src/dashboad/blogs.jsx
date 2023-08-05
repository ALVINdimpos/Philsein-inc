import Layout from './layout'


export default function blogs() {
  return (
    <Layout>
      <div className="flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold pt-2 pb-6">Blogs</h1>
      </div>
      {/* STATISTICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
          <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
              <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase">Value</p>
                  <div className="flex items-center space-x-2">
                      <h1 className="text-xl font-semibold">$13,500</h1>
                      <p className="text-xs bg-green-50 text-green-500 px-1 rounded">+4.5</p>
                  </div>
              </div>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
              <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase">Users</p>
                  <div className="flex items-center space-x-2">
                      <h1 className="text-xl font-semibold">819</h1>
                      <p className="text-xs bg-green-50 text-green-500 px-1 rounded">+7.4</p>
                  </div>
              </div>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </div>
          <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
              <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase">Orders</p>
                  <div className="flex items-center space-x-2">
                      <h1 className="text-xl font-semibold">121</h1>
                      <p className="text-xs bg-red-50 text-red-500 px-1 rounded">-2.9</p>
                  </div>
              </div>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
          </div>
          <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
              <div className="space-y-2">
                  <p className="text-xs text-gray-400 uppercase">Tickets</p>
                  <div className="flex items-center space-x-2">
                      <h1 className="text-xl font-semibold">243</h1>
                      <p className="text-xs bg-green-50 text-green-500 px-1 rounded">+3.1</p>
                  </div>
              </div>
              <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" /></svg>
          </div>
      </div>
      {/* END OF STATISTICS */}
      <section>
        <div className="blogs">
          <div className="header mb-10 font-semibold">
            <p>List of Blogs</p>
            <br />
            <hr />
          </div>
          <div className="blog flex">
            <div className='w-[10%] min-w-[52px] max-[768px]:hidden shadow-lg border-l border-t border-b rounded-l-lg flex justify-center items-center'>
                  <p>1</p>
            </div>
            <div className="shadow-lg max-[768px]:rounded-lg min-[769px]:rounded-r-lg p-2 flex flex-col gap-3 border">
              <div className="content flex flex-col gap-3">
                <h1 className='title'>Title Of A Blog</h1>
                <div className="body text-ellipsis">
                  Do est enim fugiat laborum ipsum sint quis consectetur aliquip commodo. Sint ullamco in nulla ullamco sint. Adipisicing duis excepteur in dolor deserunt sit deserunt qui nostrud eu. Veniam voluptate ea nisi cillum elit dolor consectetur. Nostrud exercitation est sit occaecat. Anim in aliqua laborum cupidatat minim. Tempor laborum cupidatat eiusmod proident aliquip ipsum dolor qui ad cillum.
                </div>
                <div className="date">2027 May 12</div>
              </div>
              <div className="actions flex w-[80%] self-center gap-3">
                <button type="button" className="publish w-[30%] bg-blue-500 rounded-md p-2 text-white">Publish</button>
                <button type="button" className="delete w-[30%] bg-red-500 rounded-md p-2 text-white">Delete</button>
                <button type="button" className="update w-[30%] bg-purple-500 rounded-md p-2 text-white">Update</button>
                <button type="button" className="update w-[30%] bg-green-500 rounded-md p-2 text-white">Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
