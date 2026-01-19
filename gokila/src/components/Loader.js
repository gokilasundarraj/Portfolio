import loaderImg from "../img/db.jpg"; 

const Loader = () => {
  return (
    <div className="loader-overlay">
      <div className="loader-box">
        <img src={loaderImg} alt="Loading" className="loader-image" />
        <div className="loader-spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
