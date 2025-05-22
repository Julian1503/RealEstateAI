import Layout from '@components/layout/home/Layout'

export default function Flyer() {
  return (
    <Layout>
      <div className="max-w-lg mx-auto">
        <input type="file" className="mb-4" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Upload and Generate</button>
        <div className="border p-4 rounded">
          <p>Flyer preview appears here.</p>
        </div>
      </div>
    </Layout>
  )
}