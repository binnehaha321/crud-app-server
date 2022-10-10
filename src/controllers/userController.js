import userService from "../services/userService";

let handleLogin = async (req, res) => {
  let email = await req.body.email;
  let password = await req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs",
    });
  }

  let userData = await userService.handleUserLogin(email, password);
  return res.status(200).json({
    errCode: userData?.errCode,
    message: userData?.errMsg,
    user: userData?.user || {},
  });
};

let handleRegister = async (req, res) => {
  const bodyData = await req.body;
  let user = {
    userId: bodyData.userId,
    email: bodyData.email,
    fullName: bodyData.fullName,
    gender: bodyData.gender,
    avatar: bodyData.avatar,
    address: bodyData.address,
    phoneNumber: bodyData.phoneNumber,
    roleId: bodyData.roleId,
    username: bodyData.username,
    password: bodyData.password,
  };
  if (!user.email || !user.password) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing inputs",
    });
  }
  let userData = await userService.handleUserRegister({ ...user });
  return res.status(200).json({
    errCode: userData?.errCode,
    message: userData?.errMsg,
  });
};

let getUsers = async (req, res) => {
  let id = req.body.id;

  if (!id) {
    return res.status(200).json({
      errCode: 1,
      message: "Missing required params",
      users: [],
    });
  }

  const users = await userService.getAllUsers(id);
  return res.status(200).json({
    errCode: 0,
    message: "Get users successfully!",
    users,
  });
};
module.exports = {
  handleLogin,
  handleRegister,
  getUsers,
};
