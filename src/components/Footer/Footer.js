import React from "react";

export default props => (
  <footer
    className="page-footer font-small bg-dark text-white"
    style={props.fix ? { position: "fixed", bottom: "0", width: "100%" } : {}}
  >
    <div className="footer-copyright text-center py-3">
      © 2020 Copyright:
      <a href="https://google.com"> byron-codes.com.br</a>
    </div>
  </footer>
);
