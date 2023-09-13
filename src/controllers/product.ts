import { Request, Response } from "express";
import { createProduct, updateProduct } from "../services/product";
import { buildResponse } from "../services/http";
import tryCatch from "../utils/tryCatch";
import { ApiError } from "../errors/ApiError";

export const createProductController = tryCatch(
  async (req: Request, res: Response) => {
    const id = await createProduct(req.body);
    const response = buildResponse({
      message: "New Product created successfully",
      data: {
        productId: id,
      },
    });
    res.status(201).json(response);
  }
);

export const updateProductController = tryCatch(
  async (req: Request, res: Response) => {
    const count = await updateProduct(
      parseInt(req.params.id),
      req.body.changes
    );
    if (count === 0) {
      throw new ApiError(404, "Product not found");
    }
    const response = buildResponse({
      message: `${count} row updated successfully`,
    });
    res.status(200).json(response);
  }
);
