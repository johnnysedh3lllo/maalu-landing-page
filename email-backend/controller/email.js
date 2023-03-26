import SubscribeModel from "../model/email.js";
import mongoose from "mongoose";

//subscribe a user with their email
export const subscribeUser = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(req.body);

    if (email === "") {
      res.status(400);
      throw new Error("Please add your email!");
    }

    const userExist = await SubscribeModel.findOne({ email });

    if (userExist) {
      res.status(403).json({ message: "Email Already Exists!" });
      // throw new Error("Email Already Exist!");
    }

    const emailUser = new SubscribeModel({ email });

    await emailUser.save();

    res.status(200).json({ emailUser });
  } catch (error) {
    console.log(error);
  }
};

// get all user email
export const getsubscribeUser = async (req, res) => {
  try {
    const email = await SubscribeModel.find();

    res.status(200).json(email);
  } catch (error) {
    console.log(error);
  }
};

// get a user email
export const getASubscribedUser = async (req, res) => {
  try {
    const { id } = req.params;
    const email = await SubscribeModel.find({ id });

    res.status(200).json(email);
  } catch (error) {
    console.log(error);
  }
};

//unsubscribe a user
export const unsubscribeUser = async (req, res) => {
  try {
    const { id } = req.params;

    const userEmail = await SubscribeModel.findById(id);

    if (!userEmail) {
      res.status(400);
      throw new Error("The email does not exist!");
    }
    await SubscribeModel.findByIdAndRemove(id);

    res.status(200).json("email successfully deleted");
  } catch (error) {
    console.log(error);
  }
};
