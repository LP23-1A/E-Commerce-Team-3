import { Request, Response } from "express";
import { orderModel } from "../model/order";
import { v4 as uuidv4 } from "uuid";

const createOrder = async (req: Request, res: Response) => {
  const id = uuidv4();
  const orderNumber = hashUuid(id);
  try {
    const orderData = { ...req.body, orderNumber };
    const newOrder = await orderModel.create(orderData);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ error });
  }
};
const hashUuid = (uuid: string): string => {
    const hash: string = uuid.split("-").join("");
    return hash.substring(0, 8);
  };
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await orderModel
      .find()
      .populate("products")
      .populate("userId");
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
const getOrderById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const order = await orderModel
      .findById(id)
      .populate("products")
      .populate("userId");
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error });
  }
};
const updateOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedOrder = await orderModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error });
  }
};
const deleteOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedOrder = await orderModel.findByIdAndDelete(id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getOrderByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const orders = await orderModel
      .find({ userid: userId })
      .populate("product");
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error });
  }
};
export {
  createOrder,
  getAllOrders,
  getOrderById,
  getOrderByUserId,
  updateOrder,
  deleteOrder,
};
