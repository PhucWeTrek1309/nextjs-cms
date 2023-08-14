import React from 'react'
import Link from 'next/link'
import StyleTable from '../../../styles/formTable.module.css'

const ArticleHome = () => {
  return (
    <div className={StyleTable.tableContainer}>
      <h1>Danh sách sản phẩm</h1>
      <div className={StyleTable.tableAction}>
        <div className={StyleTable.tableActionLeft}>
          <div className={StyleTable.tableSearch}>
            <input type="text" placeholder='Nhập từ khóa tìm kiếm' />
            <button className={StyleTable.searchBtn}>Tìm kiếm</button>
          </div>
          <div className={StyleTable.tableSort}>
            <select name="" id="">
              <option value="Danh mục">Danh mục</option>
            </select>
          </div>
        </div>
        <div className={StyleTable.tableActionRight}>
          <Link href={'article/create'} className={StyleTable.tableBtnAdd}>Thêm mới</Link>
        </div>
      </div>
      <div className={StyleTable.tableHeader}>
        <div className={StyleTable.colunmImage}>Ảnh</div>
        <div className={StyleTable.colunmName}>Tên</div>
        <div className={StyleTable.colunmOrder}>Số thứ tự</div>
        <div className={StyleTable.colunmView}>Lượt xem</div>
        <div className={StyleTable.colunmStatus}>Trạng thái</div>
        <div className={StyleTable.coulunmBtn}>Chức năng</div>
      </div>
      <div className={StyleTable.tableRow}>
        <div className={StyleTable.colunmImage}></div>
        <div className={StyleTable.colunmName}>Item 1</div>
        <div className={StyleTable.colunmOrder}>1</div>
        <div className={StyleTable.colunmView}>100</div>
        <div className={StyleTable.colunmStatus}>Active</div>
        <div className={StyleTable.coulunmBtn}>
          <button className={StyleTable.btnEdit}>Sửa</button>
          <button className={StyleTable.btnDelete}>Xóa</button>
          <button className={StyleTable.btnImage}>Ảnh</button>
        </div>
      </div>
    </div>
  )
}

export default ArticleHome