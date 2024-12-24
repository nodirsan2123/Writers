import React from 'react'
import { Mosaic } from 'react-loading-indicators'

export default function Loading() {
  return (
    <div className='min-h-[50vh] flex justify-center items-center'>
        <Mosaic color="#885df8" size="medium" text="" textColor="" />
    </div>
  )
}
