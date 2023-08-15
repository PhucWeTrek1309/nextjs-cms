import StyleClient from '../../styles/client.module.css'
import introduceImg from '../../../public/client/introduce.svg'

import Image from 'next/image'

export default function IntroduceHomePage() {
    return(
        <section className={StyleClient.introduceHomepage}>
            <div className={StyleClient.introduceLeft}>
                <div className={StyleClient.textLeft}>Chuyên cung cấp dịch vụ order Taobao,1688,Tmall,... Vận chuyển hàng từ Trung Quốc về Việt Nam với tốc độ nhanh, giá hợp lý, uy tín và đảm bảo</div>
                <button className={StyleClient.btnLeft}>Xem thêm</button>
            </div>
            <div className={StyleClient.introduceRight}>
                <div className={StyleClient.WImage}>
                <Image src={introduceImg} alt="" />
                </div>
            </div>
        </section>
    )
}