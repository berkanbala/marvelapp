import { Header } from "../common/components/ui/layout/header/header";
import { Outlet } from "react-router-dom";
import { Footer } from "../common/components/ui/layout/footer/footer";
import styles from "./appLayout.module.scss";

export const AppLayout = () => {
  return (
    <div className={styles.container}>
      <Header className={styles.header} />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};
