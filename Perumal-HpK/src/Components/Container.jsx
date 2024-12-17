// eslint-disable-next-line react/prop-types
const Container = ({ children, container }) => {
  return <div className={container}>{children}</div>;
};

export default Container;
