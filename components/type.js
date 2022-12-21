import React from "react";
import Typed from "typed.js";
import useTranslation from "next-translate/useTranslation";
export function TypedBios() {
  let el = React.useRef(null);
  let typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: "#bios",
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);
  const { t } = useTranslation("Type");

  return (
    <>
      <ul id="bios" className="hidden">
        <li>
          {t("Live")} <b className="font-medium">Indonesia</b>.
        </li>
        <li>
          {t("myfirstprogram")} <b className="font-medium">HTML</b>.
        </li>
        <li>I love NODEJS.</li>
        <li>{t("workmost")}</li>
        <li>I love EDM music.</li>
      </ul>
      <span
        ref={el}
        className="text-lg text-neutral-900 dark:text-neutral-200"
      />
    </>
  );
}
