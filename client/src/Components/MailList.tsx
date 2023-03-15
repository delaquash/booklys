import "../Styles/MailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <div className="mailTitle">Save time, save money!</div>
      <span className="mailDesc">
        Sign up and we'll send the best deals to you.
      </span>
      <div className="inputContainer">
        <input type="text" placeholder="Enter your mail" />
        <button>Suscribe</button>
      </div>
    </div>
  );
};

export default MailList;
