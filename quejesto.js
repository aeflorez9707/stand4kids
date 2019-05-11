firebase.auth().signInWithEmailAndPassword(this.state.yourEmail, this.state.yourPassword
).then((userData) =>
  {
    this.setState({
            loading: false
          });
          AsyncStorage.setItem('userData', JSON.stringify(userData));
          this.props.navigator.push({
            component: Account
          });
  }
).catch((error) =>
    {
          this.setState({
            loading: false
          });
    alert('Login Failed. Please try again'+error);
});
