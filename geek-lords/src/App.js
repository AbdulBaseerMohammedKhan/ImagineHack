import React, { Component } from "react";
import GoogleLogin from "react-google-login";
export class App extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
  };
  render() {
    return (
      <div>
        <GoogleLogin
          clientId="46745175131-ui1hav0m4qp63qraod70ia5e2beds6qr.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default App;
