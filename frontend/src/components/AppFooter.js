import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        Developed by { }
        <a href="https://architsangal.github.io/Portfolio/#/" target="_blank" rel="noopener noreferrer">
          Archit Sangal
        </a>
        <span className="ms-1"></span>
        { } and { }
        <a href="https://www.linkedin.com/in/aditya-vardhan-5aa583201/" target="_blank" rel="noopener noreferrer">
          Aditya Vardhan
        </a>

      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
