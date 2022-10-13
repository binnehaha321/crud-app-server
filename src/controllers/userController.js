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
    message: userData?.message,
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
    message: userData?.message,
  });
};

let getUsers = async (req, res) => {
  let id = req.query.id;

  if (!id) {
    return res.status(500).json({
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

let deleteUserById = async (req, res) => {
  let id = req.query.id;

  if (!id) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing required params",
      users: [],
    });
  } else if (!Number(id)) {
    return res.status(500).json({
      errCode: 2,
      message: "Param is invalid",
      users: [],
    });
  }

  const users = await userService.deleteUser(id);
  return res.status(200).json({
    errCode: 0,
    message: "Delete user successfully!",
    users,
  });
};

let updateUserById = async (req, res) => {
  // GET USER BY ID
  let id = req.query.id;
  if (!id) {
    return res.status(500).json({
      errCode: 1,
      message: "Missing required params",
      users: [],
    });
  } else if (!Number(id)) {
    return res.status(500).json({
      errCode: 2,
      message: "Param is invalid",
      users: [],
    });
  }

  // GET BODY DATA
  const bodyData = await req.body;
  const userData = await userService.updateUser(id, bodyData);
  return res.status(200).json({
    errCode: 0,
    message: "Update user successfully!",
    users: userData,
  });
};

module.exports = {
  handleLogin,
  handleRegister,
  getUsers,
  deleteUserById,
  updateUserById,
};
