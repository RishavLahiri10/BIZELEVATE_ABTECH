import React from "react";
import { useAdmission } from "./AdmissionProvider";
const variants = { primary: "btn-primary", secondary: "btn-secondary", "outline-light": "btn-outline-light" };
export default function Button({ href = "#", variant = "primary", children, className = "", onClick, as = "a", type = "button", serviceId = "", ...props }) {
  const openAdmission = useAdmission();
  const classes = `${variants[variant] || variants.primary} ${className}`;
  // Admission triggers use buttons so opening the dialog does not change the URL hash.
  if (href === "#admission" || as === "button") {
    return <button {...props} type={type} className={classes} onClick={event => {
      onClick?.(event);
      if (!event.defaultPrevented && href === "#admission") openAdmission?.(serviceId);
    }}>{children}</button>;
  }
  return <a {...props} href={href} onClick={onClick} className={classes}>{children}</a>;
}
