import React from 'react'

type Props = {
  title: string
}

function Heading({title}: Props) {
  return (
    <div>
      <h2 className='text-4xl text-blue-200'>{title}</h2>
    </div>
  )
}

export default Heading