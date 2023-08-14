import Image from 'next/image'
import StyleLogin from '../../styles/login.module.css'

export default function AdminPage() {
  return (
   <div className={StyleLogin.loginContainer}>
        <div className={StyleLogin.boxContainer}>
            <div className={StyleLogin.loginTitle}>Đăng nhập hệ thống</div>
            <form>
                <div className={StyleLogin.boxInput}>
                    <input type="text" placeholder='Tên Đăng Nhập' className={StyleLogin.tbName} />
                    <input type="password"  placeholder='Mật Khẩu' className={StyleLogin.tbPassword}/>
                </div>
                <button className={StyleLogin.btnLogin}>Đăng nhập</button>
            </form>
        </div>
   </div>
  )
}
