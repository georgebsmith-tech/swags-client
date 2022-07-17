import { useState } from "react";
import { Typography } from "@mui/material";
import CustomBtn from "../customBtn/customBtn";
import styles from "./laundrySubmit.module.css";

export default function LaundrySubmit({ isopen, setIsopen }) {
  //   [show, setShow] = useState(false);
  const content = (
    <div className={styles.parent} onClick={() => setIsopen(false)}>
      <div className={styles.child} onClick={() => setIsopen(true)}>
        <div className={styles.image}>
          <img src="/images/correct.png" alt="confirmed" width="100%" />
        </div>
        <div className={styles.text}>
          <Typography
            variant="subtitle2"
            fontFamily="Poppins"
            fontSize="14px"
            fontWeight="bold"
            color="black"
            //   ml="10px"
          >
            Swag has received your orders <br />
            Your total orders is N40,00.
          </Typography>
        </div>
        <CustomBtn style={{ padding: "13px 67px" }} click={setIsopen}>
          Continue
        </CustomBtn>
      </div>
    </div>
  );
  return <div>{isopen ? content : ""}</div>;
}
