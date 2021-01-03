import { Footer } from "antd/lib/layout/layout";
import { useTranslation } from "react-i18next";

export const CopyrightFooter = () => {
  const { t } = useTranslation();

  return (
    <Footer style={{ textAlign: "center" }}>{t("common.copyright")}</Footer>
  );
};
