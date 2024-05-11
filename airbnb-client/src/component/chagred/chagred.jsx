import style from './charged.module.css';
import { AiFillStar } from 'react-icons/ai';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { BsCurrencyDollar } from 'react-icons/bs';
import { getBill } from '../../utils';
import { useState } from 'react';

export default function Charged(props) {
  const { price, star, handleReserve, reserve } = props;
  const [guest, setGuest] = useState(1);

  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  console.log(day, month, year);

  let checkin = day + '/' + month + '/' + year;
  let dayout = day + 3 > 30 ? day + 3 - 30 : day + 3;
  let checkout =
    dayout + 3 + '/' + (day + 3 > 30 ? month + 1 : month) + '/' + year;
  let string = day + '-' + checkout;

  const bill = getBill(price, guest, 3, 0.1);
  const handleClick = () => {
    handleReserve(bill.total, string);
  };

  return (
    <div className={style.container}>
      <div className={style.charg_pernight_review}>
        <div className={style.pernight}>
          <BsCurrencyDollar />
          {price} <span>night</span>
        </div>
        <div className={style.review}>
          <span className={style.review_star}>
            <AiFillStar size={14} color="#f9375a" />
            {star}
          </span>

          <span className={style.review_quantity}>88 reviews</span>
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
            <p>{guest} guest</p>
          </div>
          <div className={style.guest_icon}>
            <IoMdArrowDropup onClick={() => setGuest(guest + 1)} />
            <IoMdArrowDropdown
              onClick={() => guest > 1 && setGuest(guest - 1)}
            />
          </div>
        </div>
      </div>
      <div className={style.button_notes}>
        <p className={style.reserve}>
          {reserve ? 'You reserved this room' : 'Reverse your reservation'}
        </p>
        <button onClick={handleClick}>{reserve ? 'Cancle' : 'Reverse'}</button>
        <p>You will not be charged yet</p>
      </div>
      <div className={style.bill}>
        <div>
          <div className={style.col1}>{price} x 3 nights</div>
          <div className={style.col2}>
            <BsCurrencyDollar />
            {bill.total}
          </div>
        </div>
        <div>
          <div className={style.col1}>Cleaning fee</div>
          <div className={style.col2}>
            <BsCurrencyDollar />
            {bill.cleanFee}
          </div>
        </div>
        <div>
          <div className={style.col1}>Airbnb service fee</div>
          <div className={style.col2}>
            <BsCurrencyDollar />
            {bill.airbnbFee}
          </div>
        </div>
        <div>
          <div className={style.col1}>Discount 10%</div>
          <div className={style.col2}>
            -<BsCurrencyDollar />
            {bill.discount}
          </div>
        </div>
      </div>
      <div className={style.total}>
        <div>Total before taxes</div>
        <div>
          <BsCurrencyDollar />
          {bill.total}
        </div>
      </div>
    </div>
  );
}
