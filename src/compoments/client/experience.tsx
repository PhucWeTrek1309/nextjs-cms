import StyleClient from '../../styles/client.module.css'

export default function ExperienceHomePage() {
    return(
        <section className={StyleClient.experienceHomepage}>
           <div className={StyleClient.experienceText}>KINH NGHIỆM MUA HÀNG</div>
            <div className={StyleClient.experienceGroup}>
                <div className={StyleClient.experienceItem}>
                    <div className={StyleClient.experienceItemText}>
                        <div className={StyleClient.experienceItemTitle}>CAM KẾT DỊCH VỤ</div>
                        <div className={StyleClient.experienceItemDecs}>Đền bù 100% tiền hàng nếu nhập hàng sai yêu cầu của khách hàng</div>
                    </div>
                </div>
                <div className={StyleClient.experienceItem}>
                    <div className={StyleClient.experienceItemText}>
                        <div className={StyleClient.experienceItemTitle}>CAM KẾT DỊCH VỤ</div>
                        <div className={StyleClient.experienceItemDecs}>Đền bù 100% tiền hàng nếu nhập hàng sai yêu cầu của khách hàng</div>
                    </div>
                </div>
                <div className={StyleClient.experienceItem}>
                    <div className={StyleClient.experienceItemText}>
                        <div className={StyleClient.experienceItemTitle}>CAM KẾT DỊCH VỤ</div>
                        <div className={StyleClient.experienceItemDecs}>Đền bù 100% tiền hàng nếu nhập hàng sai yêu cầu của khách hàng</div>
                    </div>
                </div>
            </div>
        </section>
    )
}