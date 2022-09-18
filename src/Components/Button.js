const Button = () => {
  const btn = {
    backgroundColor: "#634ad6",
    height: "2.5rem",
    width: "12rem",
    borderRadius: "1rem",
    color: "white",
    border: "none"
  };

  return (
    <section>
      <button style={btn}> ALL ACTIVE DEPOSITS </button>
    </section>
  );
};

const Button1 = () => {
  const btn = {
    backgroundColor: "#634ad6",
    height: "2.5rem",
    width: "12rem",
    borderRadius: "1rem",
    color: "white",
    border: "none"
  };

  return <button style={btn}> ALL CLOSED DEPOSITS </button>;
};

export { Button, Button1 };
