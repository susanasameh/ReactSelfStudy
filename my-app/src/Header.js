function Header() {
    return (
      <nav>
        <ul id="navUl">
          {/* get img from net */}
          <img
            src="https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg?t=st=1730191583~exp=1730195183~hmac=89f434b4f3d10c3ffa9a706c8156c937185f0965a805a5866039182605d11e9e&w=740"
            alt="reactLogo2"
            style = {{ width : "100px", marginRight: "30px", marginTop : "", height: "100px"}}
                    
          />
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    listStyleType: "none",
                    padding: "0",
                    margin: "0",
                    width: "50%",
          }}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/career">Career</a>
            </li>
          </div>
        </ul>
      </nav>
    );
};
export default Header;