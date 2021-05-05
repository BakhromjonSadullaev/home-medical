import React, { useState } from "react";

import styles from "../../styles/Navigation.module.css";

import Link from "next/link";

const Navigation = () => {
  const [active1, setActive1] = useState(true);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);
  const [active7, setActive7] = useState(false);
  const [active8, setActive8] = useState(false);
  return (
    <div className={styles.navigation}>
      <div className={styles.navigationContainer}>
        <Link href="/">
          <p
            onClick={() => (
              setActive1(true),
              setActive2(false),
              setActive3(false),
              setActive4(false),
              setActive5(false),
              setActive6(false),
              setActive7(false),
              setActive8(false)
            )}
            className={active1 && styles.active}
          >
            главная
          </p>
        </Link>
        <Link href="about">
          <p
            onClick={() => (
              setActive1(false),
              setActive2(true),
              setActive3(false),
              setActive4(false),
              setActive5(false),
              setActive6(false),
              setActive7(false),
              setActive8(false)
            )}
            className={active2 && styles.active}
          >
            о компании
          </p>
        </Link>
        <p
          onClick={() => (
            setActive1(false),
            setActive2(false),
            setActive3(true),
            setActive4(false),
            setActive5(false),
            setActive6(false),
            setActive7(false),
            setActive8(false)
          )}
          className={active3 && styles.active}
        >
          сервисы
        </p>
        <p
          onClick={() => (
            setActive1(false),
            setActive2(false),
            setActive3(false),
            setActive4(true),
            setActive5(false),
            setActive6(false),
            setActive7(false),
            setActive8(false)
          )}
          className={active4 && styles.active}
        >
          продукты
        </p>
        <p
          onClick={() => (
            setActive1(false),
            setActive2(false),
            setActive3(false),
            setActive4(false),
            setActive5(true),
            setActive6(false),
            setActive7(false),
            setActive8(false)
          )}
          className={active5 && styles.active}
        >
          События
        </p>
        <p
          onClick={() => (
            setActive1(false),
            setActive2(false),
            setActive3(false),
            setActive4(false),
            setActive5(false),
            setActive6(true),
            setActive7(false),
            setActive8(false)
          )}
          className={active6 && styles.active}
        >
          Проекты
        </p>
        <p
          onClick={() => (
            setActive1(false),
            setActive2(false),
            setActive3(false),
            setActive4(false),
            setActive5(false),
            setActive6(false),
            setActive7(true),
            setActive8(false)
          )}
          className={active7 && styles.active}
        >
          решения подключ
        </p>
        <p
          onClick={() => (
            setActive1(false),
            setActive2(false),
            setActive3(false),
            setActive4(false),
            setActive5(false),
            setActive6(false),
            setActive7(false),
            setActive8(true)
          )}
          className={active8 && styles.active}
        >
          Контакты
        </p>
      </div>
    </div>
  );
};

export default Navigation;
