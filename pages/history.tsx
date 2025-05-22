import Layout from '@components/layout/home/Layout'

export default function History() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Content History</h1>
      <ul className="space-y-2">
        <li className="border p-2 rounded">Generated property description example</li>
        <li className="border p-2 rounded">Generated social media post example</li>
      </ul>
    </Layout>
  )
}