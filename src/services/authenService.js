import db from "../models/index";
import bcrypt from "bcryptjs";

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          where: { email },
          raw: true,
        });
        if (user) {
          let check = bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 200;
            userData.message = "You're logged in!";
            delete user.id;
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 401;
            userData.message = "Wrong password";
          }
        } else {
          userData.errCode = 401;
          userData.message = "User not found";
        }
      } else {
        userData.errCode = 401;
        userData.message = "Your email is invalid";
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

const handleUserRegister = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await hashUserPassword(data?.password);
      await db.User.create({
        userId: data?.userId,
        email: data?.email,
        fullName: data?.fullName,
        gender: data?.gender,
        avatar: data?.avatar,
        address: data?.address,
        phoneNumber: data?.phoneNumber,
        roleId: data?.roleId,
        username: data?.username,
        password: hashPassword,
      });
      resolve({
        message: "Created user successfully!",
      });
    } catch (error) {
      reject(error);
    }
  });
};

const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let salt = bcrypt.genSaltSync(10);
      let hashPassword = bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (error) {
      reject(error);
    }
  });
};

const getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (!userId) {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
      } else {
        users = await db.User.findOne({
          where: { userId },
          attributes: {
            exclude: ["password"],
          },
        });
      }
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.destroy({ where: { userId } });
      let userList = await getAllUsers();
      resolve(userList);
    } catch (error) {
      reject(error);
    }
  });
};

const updateUser = (userId, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.update(data, { where: { userId } });
      let userList = await getAllUsers();
      resolve(userList);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLogin,
  handleUserRegister,
  getAllUsers,
  deleteUser,
  updateUser,
};
