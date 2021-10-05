import React, { useContext } from "react";

import { Link } from "gatsby";

import { LangContext } from "../../context/languageProvider";

import useLanguages from "../../hooks/useLanguages";

const Navigator = ({
  article,
  page,
  archive,
  home,
  ariaLabel,
  className,
  text,
  children,
  to,
}) => {
  const { currentLanguage } = useContext(LangContext);

  const { defaultLanguage, defaultBlogPath } = useLanguages();
  return (
    <Link
      aria-label={ariaLabel}
      className={className}
      to={
        article
          ? currentLanguage === defaultLanguage
            ? `/${defaultBlogPath}/${to}` // If navigating from a default language page, keep link as it is
            : `/${currentLanguage}/${defaultBlogPath}/${to}` // If navigating from a secondary language page, add current language slug
          : page
          ? currentLanguage === defaultLanguage
            ? `/${to}` // If navigating from a default language page, keep link as it is
            : `/${currentLanguage}/${to}` // If navigating from a secondary language page, add current language slug
          : archive
          ? currentLanguage === defaultLanguage
            ? `/${defaultBlogPath}` // If navigating from a default language page, keep link as it is
            : `/${currentLanguage}/${defaultBlogPath}` // If navigating from a secondary language page, add current language slug
          : home
          ? currentLanguage === defaultLanguage
            ? "/" // If navigating from a default language page, keep link as it is
            : `/${currentLanguage}` // If navigating from a secondary language page, add current language slug
          : "/"
      }
    >
      {text}
      {children}
    </Link>
  );
};

export default Navigator;