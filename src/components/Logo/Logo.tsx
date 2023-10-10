import s from "./style.module.css"

export function Logo ({image, title, subtitle} : any){
    return <>
        <div className={s.container}>
            <img src={image} alt="LOGO" className={s.img}/>
            <span className={s.title}>{title}</span>
        </div>
        <span className={s.subtitle}>{subtitle}</span>
    </>
}