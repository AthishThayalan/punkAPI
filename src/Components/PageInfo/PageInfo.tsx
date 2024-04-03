import "./PageInfo.scss";
type PageInfoProps = {
  currentPage: number;
};
const PageInfo = ({ currentPage }: PageInfoProps) => {
  return (
    <div className="page-info">
      <p>Page {currentPage}</p>
    </div>
  );
};
export default PageInfo;
