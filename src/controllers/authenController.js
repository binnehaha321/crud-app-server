import authenService from "../services/authenService";

let handleLogin = async (req, res) => {
  let email = await req.body.email;
  let password = await req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      message: "Missing inputs",
    });
  }

  let userData = await authenService.handleUserLogin(email, password);
  return res.status(userData?.errCode).json({
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
      message: "Missing inputs",
    });
  }

  let userData = await authenService.handleUserRegister({ ...user });
  return res.status(200).json({
    errCode: userData?.errCode,
    message: userData?.message,
  });
};

let getUsers = async (req, res) => {
  let userId = req.query.userId;

  const users = await authenService.getAllUsers(userId);
  return res.status(200).json({
    message: "Get users successfully!",
    users,
  });
};

let deleteUserById = async (req, res) => {
  let userId = req.query.userId;

  if (!userId) {
    return res.status(500).json({
      message: "Missing required params",
      users: [],
    });
  }

  const users = await authenService.deleteUser(userId);
  return res.status(200).json({
    message: "Delete user successfully!",
    users,
  });
};

let updateUserById = async (req, res) => {
  // GET USER BY ID
  let userId = req.query.userId;
  if (!userId) {
    return res.status(500).json({
      message: "Missing required params",
      users: [],
    });
  }

  // GET BODY DATA
  const bodyData = await req.body;
  const userData = await authenService.updateUser(userId, bodyData);
  return res.status(200).json({
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
