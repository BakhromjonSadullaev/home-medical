import React from "react";
import styled from "../../styles/Advantage/Advantage.module.css";

import { HiDocumentText, HiOutlineDocumentText } from "react-icons/hi";
const Advantage = () => {
  return (
    <div className={styled.advantages}>
      <h1 className={styled.title}>преимущество</h1>
      <div className={styled.advantageContainer}>
        <div style={{ color: "#129e47" }} className={styled.advantage}>
          <HiOutlineDocumentText
            style={{
              padding: "10px",
              borderRadius: "50%",
              backgroundColor: "#129e47",
              color: "white",
            }}
            className={styled.icon}
          />
          <h2>Больше клинических возможностей</h2>
          <p>
            Система Aquilion Prime SP разработана для своевременного выполнения
            клинических задач.
          </p>
        </div>

        <div className={styled.advantage}>
          <HiOutlineDocumentText
            style={{
              color: "black",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "#dcdcdc",
            }}
            className={styled.icon}
          />
          <h2>Больше клинических возможностей</h2>
          <p>
            Система Aquilion Prime SP разработана для своевременного выполнения
            клинических задач.
          </p>
        </div>

        <div className={styled.advantage}>
          <HiOutlineDocumentText
            style={{
              color: "black",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "#dcdcdc",
            }}
            className={styled.icon}
          />
          <h2>Больше клинических возможностей</h2>
          <p>
            Система Aquilion Prime SP разработана для своевременного выполнения
            клинических задач.
          </p>
        </div>

        <div className={styled.advantage}>
          <HiOutlineDocumentText
            style={{
              color: "black",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "#dcdcdc",
            }}
            className={styled.icon}
          />
          <h2>Больше клинических возможностей</h2>
          <p>
            Система Aquilion Prime SP разработана для своевременного выполнения
            клинических задач.
          </p>
        </div>

        <div className={styled.advantage}>
          <HiOutlineDocumentText
            style={{
              color: "black",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "#dcdcdc",
            }}
            className={styled.icon}
          />
          <h2>Больше клинических возможностей</h2>
          <p>
            Система Aquilion Prime SP разработана для своевременного выполнения
            клинических задач.
          </p>
        </div>

        <div className={styled.advantage}>
          <HiOutlineDocumentText
            style={{
              color: "black",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "#dcdcdc",
            }}
            className={styled.icon}
          />
          <h2>Больше клинических возможностей</h2>
          <p>
            Система Aquilion Prime SP разработана для своевременного выполнения
            клинических задач.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
