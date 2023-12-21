import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '@/api/context'

export default function PreviousSearches () {
  const { cityHistory } = useContext(MyContext)
  return (
        <div>
            <h1>Previous Searches</h1>
        </div>
  )
}
