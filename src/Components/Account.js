import { House } from "react-bootstrap-icons";
import { FiSettings } from "react-icons/fi";
import { FaGifts } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { FaPiggyBank } from "react-icons/fa";

const Account = () => {
  const div = {
    height: " 53rem",
    width: "20rem",
    backgroundColor: "#f8f8f8",
    borderRadius: "2rem 0rem 0rem 1rem"
  };

  const img = {
    height: "5rem",
    width: "5rem",
    borderRadius: "3rem",
    marginTop: "5rem"
  };

  const ul = {
    listStyle: "none",
    margin: "1rem",
    textAlign: "center"
  };

  const divul = {
    margin: "3rem",
    lineHeight: "3rem"
  };

  return (
    <div style={div}>
      <div>
        <img
          src="data:image/jpeg;base64,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"
          style={img}
          alt="some"
        />

        <h3>Scott Grant</h3>
      </div>

      <div style={divul}>
        <ul style={ul}>
          <li>
            {" "}
            <House /> Home{" "}
          </li>
          <li>
            {" "}
            <FaPiggyBank /> Deposits{" "}
          </li>
          <li>
            {" "}
            <FaGifts /> Offers{" "}
          </li>
          <li>
            {" "}
            <FiCreditCard /> Payments{" "}
          </li>
          <li>
            {" "}
            <FiSettings /> Settings{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Account;
