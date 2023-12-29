import "./PageBanner.css";
const PageBanner = ({ page }) => {
  return (
    <div className="page-banner">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-white py-40">
          <p className="text-xl mb-5">
            Home / <span className="font-bold">{page}</span>
          </p>
          <h3 className="text-5xl font-bold ">{page}</h3>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
