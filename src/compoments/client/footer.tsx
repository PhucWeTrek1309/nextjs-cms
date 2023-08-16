import StyleClient from '../../styles/client.module.css'

export default function FooterClient() {
    return(
        <footer className={StyleClient.footerClient}>
            <div className={StyleClient.footerBox}>
                <div className={StyleClient.footerCol}>
                    <div className={StyleClient.footerTitle}>Liên hệ</div>
                    <div className={StyleClient.footerGroup}>
                        <div className={StyleClient.footerItem}>Thông Tin Liên hệ</div>
                        <div className={StyleClient.footerItem}>Thông Tin Liên hệ</div>
                    </div>
                </div>
                <div className={StyleClient.footerCol}>
                    <div className={StyleClient.footerTitle}>Liên hệ</div>
                    <div className={StyleClient.footerGroup}>
                        <div className={StyleClient.footerItem}>Thông Tin Liên hệ</div>
                        <div className={StyleClient.footerItem}>Thông Tin Liên hệ</div>
                    </div>
                </div>
                <div className={StyleClient.footerCol}>
                    <div className={StyleClient.footerTitle}>Liên hệ</div>
                    <div className={StyleClient.footerGroup}>
                        <div className={StyleClient.footerItem}>Thông Tin Liên hệ</div>
                        <div className={StyleClient.footerItem}>Thông Tin Liên hệ</div>
                    </div>
                </div>
                <div className={StyleClient.footerCol}>
                    <div>Facebook</div>
                </div>
            </div>
        </footer>
    )
}