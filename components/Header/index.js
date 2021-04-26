import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
import { MdPhoneInTalk } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <img src="/LOGO.png" alt="" />
          <h4>
            Медицинские <br /> технологии из японии
          </h4>
        </div>

        {/* <p className={styles.hamburger}>icon</p> */}
        <HiMenuAlt3
          onClick={() => setMobileMenu(!mobileMenu)}
          className={styles.hamburger}
          style={{ fontSize: "30px", cursor: "pointer", color: "#129e47" }}
        />
        <div className={styles.phoneContainer}>
          {/* icon */}
          {/* <PhoneInTalkIcon className={styles.icon} /> */}
          <div className={styles.call}>
            <MdPhoneInTalk className={styles.icon} />
            {/* text */}
            <div>
              <p className={styles.number}>
                <span className={styles.phoneCode}>+998</span> 97 353 31 33
              </p>
              <p className={styles.text}>нажмите чтобы позвонить</p>
            </div>
          </div>
          {/* button */}
          <button>Заказат звонок</button>
        </div>
      </div>

      {mobileMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobilePhone}>
            <div className={styles.call}>
              <MdPhoneInTalk className={styles.icon} />
              {/* text */}
              <div>
                <p className={styles.number}>
                  <span className={styles.phoneCode}>+998</span> 97 353 31 33
                </p>
                <p className={styles.text}>нажмите чтобы позвонить</p>
              </div>
            </div>
            {/* button */}
            <button>Заказат звонок</button>
          </div>
          <div className={styles.menuInMobile}>
            <p className={styles.active}>главная</p>
            <p>о компании</p>
            <p>сервисы</p>
            <p>продукты</p>
            <p>События</p>
            <p>Проекты</p>
            <p>решения подключ</p>
            <p>Контакты</p>
          </div>
        </div>
      )}

      {/* <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/test/hello">
        <a>hello</a>
      </Link> */}
    </div>
  );
};

export default Header;
