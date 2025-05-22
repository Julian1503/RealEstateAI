import Layout from '@components/layout/home/Layout'
import {useState} from 'react'

export default function ImageTools() {
  const [tab, setTab] = useState('enhancer')
  return (
    <Layout>
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setTab('enhancer')} className="px-4 py-2 border">Enhancer</button>
        <button onClick={() => setTab('transfer')} className="px-4 py-2 border">Style Transfer</button>
        <button onClick={() => setTab('staging')} className="px-4 py-2 border">Virtual Staging</button>
      </div>
      <div>
        <input type="file" className="mb-4" />
        <div className="border p-4 rounded">
          <p>{tab} preview here.</p>
        </div>
      </div>
    </Layout>
  )
}