import React, { Component } from "react";
import GoogleLogin from "react-google-login";
export class App extends Component {
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.profileObj);
    // $.post(
    //   "/jquery/submitData", // url
    //   { response: response.profileObj }, // data to be submit
    //   function (data, status, jqXHR) {
    //     // success callback
    //     $("p").append("status: " + status + ", data: " + data);
    //   }
    // );
  };

  render() {
    return (
      <div class="loginBtn">
        <GoogleLogin
          clientId="46745175131-ui1hav0m4qp63qraod70ia5e2beds6qr.apps.googleusercontent.com"
          buttonText="Log in"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    );
  }
}

export default App;
