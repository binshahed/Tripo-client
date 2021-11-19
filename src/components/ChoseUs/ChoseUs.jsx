import about from "../../image/evan-dennis-i--IN3cvEjg-unsplash.jpg";
import "./Chose.css";

const ChoseUs = () => {
  return (
    <div className="chose-us container">
      <h1 className="mb-5 text-center">
        Why <span className="text-warning">Chose us?</span>
      </h1>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img className="chose-img" src={about} alt="" />
        </div>
        <div className="col-md-6 col-sm-12">
          <div>
            <p>
              <strong>Cost Effective: </strong>
              We are very well known that how much you have worked hard for your
              savings. In addition, we want you to save as much as possible on
              your trips and get the best services and other VIP facilities
              within that budget at the same time.
            </p>
            <p>
              <strong>No hidden charges: </strong>
              This is the most common thing that is suffered by most of the
              people. Even we face many questions regarding hidden charges.
              Therefore, Oboskash travel agency has a policy that says “NO
              HIDDEN CHARGES”.
            </p>
            <p>
              <strong>Quality Assurance: </strong>
              This is the next important thing after costing factor. If you take
              one or two weeks off from your everyday life, you want these weeks
              to be the most relaxing and fun-filled weeks of your life. We know
              how hard it is to take days off from work.
            </p>
            <p>
              <strong>Hassle-free traveling: </strong>
              What is the point of traveling if you have to through a lot of
              hassles and obstacles? To ensure that this trust and mood-breaking
              experience do not happen, our expert team is there to take care of
              it all
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoseUs;
