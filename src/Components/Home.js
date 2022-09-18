import Account from "./Account";
import Activedeposit from "./Active-Deposits";

const Home = () => {
  const home = {
    margin: "5rem",
    backgroundColor: "#ffff",
    borderRadius: "2rem 2rem 2rem 2rem",
    display: "flex"
  };

  return (
    <div style={home}>
      <Account />
      <Activedeposit />

      {/* #f8f8f8
#7746d3
#634ad6
#58c193
#6dc17f
#facd51
#e98271
#595282 */}
    </div>
  );
};

export default Home;
