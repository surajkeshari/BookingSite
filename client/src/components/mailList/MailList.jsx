import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save Time,Save Money</h1>
      <span className="maildesc">Sign Up and we will send the best offers for U</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList
