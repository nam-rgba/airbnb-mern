import style from "./charged.module.css"
import {AiFillStar} from 'react-icons/ai'
import {IoMdArrowDropdown} from 'react-icons/io'

export default function Charged(props){
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
                <span className={style.review_star}>
                    <AiFillStar size={14} color="#f9375a"/>
                    5.0
                </span>
                
                <span className={style.review_quantity}>
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
                <div className={style.guest_text}>
                    <b>Guests</b>
                    <p>1 guest</p>
               </div>
               <div className={style.guest_icon}>
                    <IoMdArrowDropdown/>
               </div>
            </div>
        </div>
        <div className={style.button_notes}>
            <button>Reserve</button>
            <p>
            You will not be charged yet
            </p>
        </div>
        <div className={style.bill}>
            <div>
                <div className={style.col1}>
                    $336 x 5 nights
                </div>
                <div className={style.col2}>
                    $1830
                </div>
            </div>
            <div>
            <div className={style.col1}>
                    Cleaning fee
                </div>
                <div className={style.col2}>
                    $141
                </div>
            </div>
            <div>
            <div className={style.col1}>
                    Airbnb service fee
                </div>
                <div className={style.col2}>
                    $287
                </div>
            </div>
        </div>
        <div className={style.total}>
            <div>
                Total before taxes
            </div>
            <div>
                $2249
            </div>
        </div>
    </div>
}