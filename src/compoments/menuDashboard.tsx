'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import MenuStyle from '../styles/menuDashboard.module.css'
import { DataMenuAdmin } from '@/data/dataMenuAdmin'
import { DataSubMenuAdmin } from '@/data/dataSubMenuAdmin'


const MenuDashboard = () => {
  // state trạng thái khi nhấn vào menu
  const [activeMenu, setActiveMenu] = useState<number[]>([]);

  const handleMenuClick = (parentId: number) => {
    if (activeMenu.includes(parentId)) {
      setActiveMenu(activeMenu.filter(menu => menu !== parentId)); // Đóng subMenu nếu đã mở
    } else {
      setActiveMenu([...activeMenu, parentId]); // Mở subMenu nếu chưa mở
    }
  };
  // render subMenu 
  const renderSubMenu = (parentId : number) => {
    if (activeMenu.includes(parentId)) {
      return DataSubMenuAdmin.filter(item => item.ParentId === parentId).map(subItem => (
        <Link href={`${subItem.link}`} key={subItem.id} className={MenuStyle.menuSubItem}>
          {subItem.name}
        </Link>
      ));
    } else {
      return null
    }
  }

  return (
    <div className={MenuStyle.boxMenu}>
      <div className={MenuStyle.headerMenu}>CMS</div>
      <div className={MenuStyle.menuList}>
      {DataMenuAdmin.map((menuItem) => (
          <div
          key={menuItem.id}
          className={MenuStyle.menuItem}
        >
            <div className={MenuStyle.menuBox}  onClick={() => handleMenuClick(menuItem.id)}>
              <div className={MenuStyle.itemMenuText}>{menuItem.name}</div>
              <div
                className={`${MenuStyle.itemMenuIcon} ${
                  activeMenu.includes(menuItem.id) ? MenuStyle.menuItemactive : ''
                }`}
              ></div>
            </div>
            {renderSubMenu(menuItem.id)}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuDashboard