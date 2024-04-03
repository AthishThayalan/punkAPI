import "./PageInfo.scss";
type PageInfoProps = {
  currentPage: number;
  numberOfResults: number;
};
const PageInfo = ({ currentPage, numberOfResults }: PageInfoProps) => {
  return (
    <div className="page-info">
      <p className="page-info__number">Page: {currentPage}</p>
      <p className="page-info__results">Number of Results: {numberOfResults}</p>
    </div>
  );
};
export default PageInfo;
