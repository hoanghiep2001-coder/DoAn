function Button({
  primary,
  normal,
  light,
  to,
  link,
  href,
  children,
  className,
}) {
  let Component = "button";

  const props = {
    primary,
    normal,
    light,
    to,
    link,
    href,
  };

  if (href) {
    Component = "a";
  }

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
}

export default Button;
