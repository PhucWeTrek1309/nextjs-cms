import StyleClient from '../../styles/client.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function HeaderClient() {
    return (
      <header className={StyleClient.boxHeader}>
        <div className={StyleClient.logo}>
            <img alt='logo' src='https://toppng.com/uploads/preview/file-history-one-piece-logo-11563071942adcognuldv.png' width={150} height={150}/>
        </div>
        <ul className={StyleClient.boxMenu}>
            <li> <Link href='' className={StyleClient.itemMenu}>Trang chủ</Link></li>
            <li> <Link href='' className={StyleClient.itemMenu}>Dịch vụ</Link></li>
            <li> <Link href='' className={StyleClient.itemMenu}>Hướng dẫn</Link></li>
            <li> <Link href='' className={StyleClient.itemMenu}>Bảng giá</Link></li>
            <li> <Link href='' className={StyleClient.itemMenu}>Hướng dẫn</Link></li>
        </ul>
      </header>
    )
  }
  