import style from "./charged.module.css"
import {AiFillStar} from 'react-icons/ai'

export default function Charged({props}){
    const {price}=props;
    const date=new Date();
    let day= date.getDay();
    let month=date.getMonth();
    let year=date.getFullYear();

    let checkin=day+'/'+month+'/'+year;
    let checkout=(day+7)+'/'+month+'/'+year;
    return <div className={style.container}>
        <div className={style.charg_pernight_review}>
            <div className={style.pernight}>
                ${price} <span>night</span>
            </div>
            <div className={style.review}>
                <span>
                    <AiFillStar size={14} color="#f9375a"/>
                    5.0
                </span>
                .
                <span>
                    88 reviews
                </span>
            </div>
        </div>
        <div className={style.date_guest}>
            <div className={style.date}>
                <div className={style.check}>
                    <b>Check in</b>
                    <p>{checkin}</p>
                </div>
                <div className={style.check}>
                    <b>Check out</b>
                    <p>{checkout}</p>
                </div>
            </div>
            <div className={style.guest}>
                
            </div>
        </div>
        <div className={style.button}></div>
        <div className={style.bill}></div>
        <div className={style.total}></div>
    </div>
}