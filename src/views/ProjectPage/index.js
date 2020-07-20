import React from 'react'

import Lottie from '../../components/common/Lottie'
import pageNotFoundAnimation from '../../JsonFile/404page.json'
import { loadAnimations } from '../../utils/helper'

const ProjectPage = () => {
  return (
    <div className='container'>
      <Lottie options={loadAnimations(pageNotFoundAnimation)} />
    </div>
  )
}
export default ProjectPage
