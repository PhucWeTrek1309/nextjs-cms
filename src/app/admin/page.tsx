import MenuDashboard from '@/compoments/menuDashboard'
import React from 'react'
import PageStyles from '../../styles/pageAdmin.module.css'

const HomeAdmin = () => {
  return (
    <div className={PageStyles.pageContainer}>
        <div className={PageStyles.pageBox}>
            <MenuDashboard/>
        </div>
    </div>
    
  )
}

export default HomeAdmin