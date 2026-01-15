import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'

function AgeGate({ onVerify }) {
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!day || !month || !year) {
      setError('Please enter your complete date of birth')
      return
    }

    const birthDate = new Date(year, month - 1, day)
    const today = new Date()
    const age = today.getFullYear() - birthDate.getFullYear()
    const monthDiff = today.getMonth() - birthDate.getMonth()
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }

    if (age < 18) {
      setError('You must be 18 years or older to access this site')
      return
    }

    // Validate date
    if (birthDate.getDate() != day || birthDate.getMonth() != month - 1 || birthDate.getFullYear() != year) {
      setError('Please enter a valid date')
      return
    }

    onVerify()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="text-amber-500 w-8 h-8" />
          <h2 className="text-2xl font-bold text-gray-900">Age Verification Required</h2>
        </div>
        
        <p className="text-gray-700 mb-6">
          You must be 18 years or older to access Strand Supply Co. Please verify your age to continue.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <input
                  type="number"
                  placeholder="Day"
                  min="1"
                  max="31"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Month"
                  min="1"
                  max="12"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Year"
                  min="1900"
                  max={new Date().getFullYear()}
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition"
          >
            Verify Age and Enter
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">
          This site contains information about research materials. By entering, you confirm you are of legal age.
        </p>
      </div>
    </div>
  )
}

export default AgeGate
