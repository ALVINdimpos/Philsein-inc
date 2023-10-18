import { useEffect, useState } from 'react'
import Layout from './layout'
import { formatDate } from '../Services/Utils/index'
import { toast } from 'react-toastify'

export default function Blogs() {
  const [blogs, setBlogs] = useState([])
  const [unpublished, setUnpublished] = useState(0)
  const [published, setPublished] = useState(0)
  const [deleteBlog, _] = useState('')

  useEffect(async () => {
    const getApps = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
      const res = await (
        await fetch('https://cautious-erin-pig.cyclic.app/blogs/all', config)
      ).json()
      setBlogs((_) => res.data)
      const uRead = res.data.filter((item) => item.publish == false)
      const Read = res.data.filter((item) => item.publish == true)
      setPublished((_) => Read?.length)
      setUnpublished((_) => uRead?.length)
    }
    getApps()
  }, [])

  const DeleteBlog = async (deleteBlog) => {
    if (deleteBlog?.length < 1) {
      return 0
    }
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
    const res = await (
      await fetch(`https://cautious-erin-pig.cyclic.app/blogs/${deleteBlog}`, {
        method: 'DELETE',
        ...config,
      })
    ).json()
    if (res.status === 200) {
      toast.success(res.message, { toastId: `${deleteBlog}` })
      setBlogs((prev) => prev.filter((app) => app._id != deleteBlog))
    }
    return 1
  }
  const publishBlog = async (publishBlog) => {
    if (publishBlog?.length < 1) {
      return 0
    }
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
    const res = await (
      await fetch(`https://cautious-erin-pig.cyclic.app/blogs/${publishBlog}`, {
        method: 'PATCH',
        ...config,
      })
    ).json()
    if (res.status === 200) {
      toast.success(res.message, { toastId: `${publishBlog}` })
    }
    return 1
  }

  const handleDelete = (e) => {
    const res = DeleteBlog(e.target.id)
  }
  const handlePublish = (e) => {
    const res = publishBlog(e.target.id)
  }
  return (
    <Layout>
      <div className="flex justify-between items-center border-b border-gray-300">
        <h1 className="text-2xl font-semibold pt-2 pb-6">Blogs</h1>
      </div>
      {/* STATISTICS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">
        <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
          <div className="space-y-2">
            <p className="text-xs text-gray-400 uppercase">Total Blogs</p>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-semibold">
                {published + unpublished}
              </h1>
            </div>
          </div>
          <svg
            className="w-12 h-12 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
          <div className="space-y-2">
            <p className="text-xs text-gray-400 uppercase">
              Total Published Blogs
            </p>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-semibold">{published}</h1>
            </div>
          </div>
          <svg
            className="w-12 h-12 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </div>
        <div className="bg-white shadow rounded-sm flex justify-between items-center py-3.5 px-3.5">
          <div className="space-y-2">
            <p className="text-xs text-gray-400 uppercase">
              Total Unpublished Blogs
            </p>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-semibold">{unpublished}</h1>
            </div>
          </div>
          <svg
            className="w-12 h-12 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        </div>
      </div>
      {/* END OF STATISTICS */}
      <section>
        <div className="blogs flex flex-col gap-10">
          <div className="header mb-10 font-semibold">
            <p>List of Blogs</p>
            <br />
            <hr />
          </div>
          {blogs?.length
            ? blogs.map((blog, idx) => (
                <div className="blog flex" key={idx}>
                  <div className="w-[10%] min-w-[52px] max-[768px]:hidden shadow-lg border-l border-t border-b rounded-l-lg flex justify-center items-center">
                    <p>{idx + 1}</p>
                  </div>
                  <div className="shadow-lg flex-1 max-[768px]:rounded-lg min-[769px]:rounded-r-lg p-2 flex flex-col gap-3 border">
                    <div className="content flex flex-col gap-3">
                      <h1 className="title">{blog.title}</h1>
                      <div className="body text-ellipsis">
                        {blog.body.slice(0, blog.body.length % 100)}
                      </div>
                      <div className="date">{formatDate(blog.createdAt)}</div>
                    </div>
                    <div className="actions flex w-[80%] self-center gap-3">
                      <button
                        type="button"
                        className="publish w-[30%] bg-blue-500 rounded-md p-2 text-white"
                        id={blog._id}
                        onClick={handlePublish}
                      >
                        Publish
                      </button>
                      <button
                        type="button"
                        className="delete w-[30%] bg-red-500 rounded-md p-2 text-white"
                        id={blog._id}
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        className="update w-[30%] bg-purple-500 rounded-md p-2 text-white"
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="update w-[30%] bg-green-500 rounded-md p-2 text-white"
                      >
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : 'There are no blogs available'}
        </div>
      </section>
    </Layout>
  )
}
