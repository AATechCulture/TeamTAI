const getToken = (username) =>
  axios.get(`http://localhost:3001/token/${username}`).then((twilioUser) => {twilioUser.data.jwt; console.log(twilioUser.data)});
