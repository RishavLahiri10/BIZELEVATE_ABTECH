import React from "react";

/**
 * Reusable Button / Link component.
 *
 * Usage:
 *   <Button href="#contact" variant="primary">Get Admission Guidance</Button>
 *   <Button href="tel:+91..." variant="secondary">Call Now</Button>
 *
 * variant: "primary" | "secondary" | "outline-light"
 */
const variantClassMap = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  "outline-light": "btn-outline-light",
};

export default function Button({
  href = "#",
  variant = "primary",
  children,
  className = "",
  onClick,
  target,
  rel,
  type,
  as = "a",
}) {
  const classes = `${variantClassMap[variant] || variantClassMap.primary} ${className}`;

  if (as === "button") {
    return (
      <button type={type || "button"} onClick={onClick} className={classes}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={classes} target={target} rel={rel}>
      {children}
    </a>
  );
}
