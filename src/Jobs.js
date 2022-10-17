import React from 'react'

function Jobs() {
  return (
    <div>Jobs</div>
  )

  function addJobs(props){
    const lavoro = 'lavorouno'
    return <h1>Inserisci nuovo lavoro</h1>
  }
  function delJobs(props){
    return <h1>elimina un lavoro in corso</h1>
  }

  addJobs()
}


export default Jobs