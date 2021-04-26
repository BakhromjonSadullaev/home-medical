import styles from "../../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationContainer}>
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
  );
};

export default Navigation;
