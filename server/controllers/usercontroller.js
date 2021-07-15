const router = require("express").Router();
const { User } = require("../models");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { UniqueConstraintError } = require("sequelize/lib/errors");

/* SIGN UP*/
// router.post("/register", async (req, res) => {
//   //object deconstructing to separate data when sent in the body;
//   let { firstName, lastName, email, password } = req.body;

//   try {
//     const newUser = await User.create({
//       firstName,
//       lastName,
//       email,
//       password: bcrypt.hashSync(password, 13),
//     });

//     const token = jwt.sign(
//       { id: newUser.id, email: newUser.email },
//       process.env.JWT_SECRET,
//       { expiresIn: 60 * 60 * 24 }
//     );
//     res.status(201).json({
//       message: "User registered!",
//       user: newUser,
//       token,
//     });
//   } catch (error) {
//     if (error instanceof UniqueConstraintError) {
//       res.status(409).json({
//         message: "Email already in use.",
//       });
//     } else {
//       res.status(500).json({
//         error: "Failed to register user.",
//       });
//     }
//   }
// });
router.post("/register", async (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, 13),
    });

    let token = jwt.sign(
      { id: newUser.id, email: newUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: 60 * 60 * 24,
      }
    );

    res.status(201).json({
      message: "User successfully registered",
      user: newUser,
      token,
    });
  } catch (err) {
    if (err instanceof UniqueConstraintError) {
      res.status(409).json({
        message: "Email already in use",
      });
    } else {
      res.status(500).json({
        message: "Failed to register user",
      });
    }
  }
});

/* LOGIN */
router.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    let loginUser = await User.findOne({
      where: { email },
    });
    // console.log("loginUser", loginUser)

    if (loginUser && (await bcrypt.compare(password, loginUser.password))) {
      const token = jwt.sign(
        { id: loginUser.id, email: loginUser.email },
        process.env.JWT_SECRET,
        { expiresIn: 60 * 60 * 24 }
      ); //86,400 seconds ACTUAL MATH

      res.status(200).json({
        message: "Login succeeded!",
        user: loginUser,
        token,
      });
    } else {
      res.status(401).json({
        message: "Login Failed: User information incorrect.",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Error logging in!",
    });
  }
});

module.exports = router;

//npm install bcryptjs
//npm install jsonwebtoken
