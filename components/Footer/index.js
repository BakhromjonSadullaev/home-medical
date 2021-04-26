import styles from "../../styles/Footer.module.css";
import { ImPhone } from "react-icons/im";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.green}></div>
      <div className={styles.container}>
        <div className={styles.footerContainer}>
          <div className={styles.aboutCompany}>
            <h2>О компании</h2>
            <p>
              Система Aquilion Prime SP разработана для своевременного
              выполнения клинических задач.
            </p>
            <img src="LOGO@2x.png" alt="" />
          </div>
          <div className={styles.fastLinks}>
            <h2>Быстрые ссылки</h2>
            <div className={styles.links}>
              <div className={styles.linksContainer}>
                <p>главная</p>
                <p>о компании</p>
                <p>Сервисы</p>
                <p>Контакты</p>
              </div>
              <div className={styles.linksContainer}>
                <p>Проекты</p>
                <p>FAQ</p>
                <p>События</p>
              </div>
            </div>
          </div>
          <div className={styles.aboutCompany}>
            <h2>адрес</h2>
            <h5>Мирзо-Улугбекский ул. ЧУСТ, 1 100077</h5>
          </div>
          <div className={styles.contact}>
            <h2>контакты</h2>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-5px",
                }}
              >
                <ImPhone style={{ marginRight: "5px" }} />
                <p>+998 (95) 475 05 85</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "-15px",
                }}
              >
                <ImPhone style={{ marginRight: "5px" }} />
                <p> +998 (97) 353 31 33</p>
              </div>
            </div>
            <div className={styles.icons}>
              <AiFillFacebook style={{ fontSize: "21px" }} />
              <AiOutlineTwitter style={{ fontSize: "21px" }} />
              <AiOutlineInstagram style={{ fontSize: "21px" }} />
              <AiFillYoutube style={{ fontSize: "21px" }} />
            </div>
          </div>
        </div>
      </div>
      <p className={styles.lisence}>© 2020 · Все права защищены</p>
    </div>
  );
};

export default Footer;
