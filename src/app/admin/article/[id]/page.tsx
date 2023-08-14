'use client'

import React, { useState } from 'react'
import { ItemData, ItemDataThreeColumn, ItemDataTwoColumn } from '@/data/articleForm';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormStyle from '../../../../styles/formCreate.module.css'

const Edit = () => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({ ...prevData, [name]: value }));
  };

  const handleCkEditorChange = (name:any, data:any) => {
    setFormData((prevData) => ({ ...prevData, [name]: data }));
  };

  const handleImageChange = (e:any) => {
    const selectedFile = e.target.files[0]; // Lấy tệp đã chọn
    setFormData((prevData) => ({ ...prevData, imageFile: selectedFile }));
  };
  

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Gửi dữ liệu formData lên server để thêm mới
    console.log(formData);
  };
  return (
    <div className={FormStyle.formContainer}>
        <h1 className={FormStyle.formTitle}>Sửa sản phẩm</h1>
        <div className={FormStyle.boxForm}>
          <form onSubmit={handleSubmit}>
            {ItemData.map((field) => (
              <div key={field.id} className={FormStyle.formItem}>
                <label htmlFor={field.name} className={FormStyle.formLabel}>{field.sub}</label>
                {field.type === 'CkEditor' ? (
                  <CKEditor
                    editor={ClassicEditor}
                    data={formData[field.name] || ''}
                    onChange={(event, editor) => handleCkEditorChange(field.name, editor.getData())}
                    onBlur={(event, editor) => console.log('Blur.', editor)}
                    onFocus={(event, editor) => console.log('Focus.', editor)}
                  />
                ) : (
                  field.type === 'file' ? (
                    <input
                      className={`${FormStyle.inputFile} ${FormStyle.inputInsert}`}
                      type='file'
                      id={field.name}
                      name={field.name}
                      onChange={handleImageChange}
                    />
                  ) : (
                    <input
                    className={`${FormStyle.inputText} ${FormStyle.inputInsert}`}
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={handleChange}
                    />
                  )
                )}
              </div>
        ))}
        {ItemDataThreeColumn.map((item) => (
           <div key={item.id} className={FormStyle.itemThree}>
              <label className='' htmlFor="">{item.sub}</label>
              <input
                className={`${FormStyle.inputInsert}`}
                type={item.type}
                id={item.name}
                name={item.name}
                value={formData[item.name] || ''}
                onChange={handleChange}
              />
           </div>
        ))}
           {ItemDataTwoColumn.map((item) => (
               <div key={item.id} className={FormStyle.itemTwo}>
               <label className='' htmlFor="">{item.sub}</label>
               <input
                 className={`${FormStyle.inputInsert}`}
                 type={item.type}
                 id={item.name}
                 name={item.name}
                 value={formData[item.name] || ''}
                 onChange={handleChange}
               />
            </div>
        ))}
        <button className={FormStyle.btnCreate} type="submit">Thêm mới</button>
      </form>
    </div>  
  </div>
  )
}

export default Edit