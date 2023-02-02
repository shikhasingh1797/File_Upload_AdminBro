import React, { useState } from 'react'

const CustomComponent = (props) => {
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleUpload = async () => {
    const formData = new FormData()
    formData.append('image', file)
  
    try {
      const response = await fetch('http://localhost:8080/tmp/upload', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      
      <button onClick={handleUpload}>Upload</button>
      {file && <img src={file} alt="Uploaded" />}
    </div>
  )
}

export default CustomComponent
