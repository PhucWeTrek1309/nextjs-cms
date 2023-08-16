import StyleClient from '../../styles/client.module.css'

export default function ServicesHome(){
    return (
        <section className={StyleClient.servicesHomePage}>
            <div className={StyleClient.servicestext}>
                Dịch vụ
            </div>
            <div className={StyleClient.servicesgroupImage}>
                <div className={StyleClient.WImage}>
                    <img src="" alt="" />
                </div>
                <div className={StyleClient.WImage}>
                    <img src="" alt="" />
                </div>
                <div className={StyleClient.WImage}>
                    <img src="" alt="" />
                </div>
            </div>
        </section>
    )
}