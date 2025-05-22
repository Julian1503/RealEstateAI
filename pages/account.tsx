import Layout from '@components/layout/home/Layout'

export default function Account() {
  return (
    <Layout>
      <h2 className="text-xl font-bold mb-4">Your Plan: Pro</h2>
      <p className="mb-4">Billing history and payment methods here.</p>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Cancel Plan</button>
    </Layout>
  )
}