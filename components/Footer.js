function Footer() {
  return (
    <div className="bg-gray-1">  
      <div className="grid grid-cols-1 md:grid-cols-4 space-y-10 px-32 py-14 mt-6">
        <div className="space-y-2 text-lg text-gray-9 mt-10">
          <h5 className="font-bold">Partner</h5>
          <p>Group of Eight</p>
          <p>DabWave</p>
        </div>
        <div className="space-y-2 text-lg text-gray-9">
          <h5 className="font-bold">Roles</h5>
          <p>Candidate</p>
          <p>Auditor</p>
          <p>Auditor Pro</p>
        </div>
        <div className="space-y-2 text-lg text-gray-9">
          <h5 className="font-bold">Feedback</h5>
          <p>Report a bug</p>
          <p>Have an issue</p>
        </div>
        <div className="space-y-2 text-lg text-gray-9">
          <h5 className="font-bold">Host</h5>
          <p>DabAZ</p>
          <p>DabWave</p>
          <p>Vercel</p>
        </div>
      </div>
      <div className="text-center">
          © 2022 DabAZ All rights reserved.
      </div>
    </div>
  )
}

export default Footer
