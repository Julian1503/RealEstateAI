import {useRouter} from 'next/router'
import Layout from '@components/layout/home/Layout'

export default function Generator() {
  const { query } = useRouter()
  const type = query.type

  return (
    <Layout >
      <h1 className="text-2xl font-bold mb-4">Generate {type}</h1>
      {/* Step form */}
      <div className="border p-4 rounded mb-4">
        <p>Step 1: Fill details for {type}</p>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Generate</button>
    </Layout>
  )
}