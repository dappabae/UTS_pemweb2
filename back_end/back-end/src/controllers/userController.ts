import { Request, Response } from "express";
import { prisma } from "../lib/db.js";

// 1. Menampilkan semua user
export const getUser = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(users);
  } catch (error: any) {
    res.status(500).json({
      message: "Gagal mengambil data user",
      errorName: error?.name,
      errorCode: error?.code,
      errorMessage: error?.message,
      databaseUrlAda: !!process.env.DATABASE_URL,
    });
  }
};

// 2. Menyimpan user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, foto } = req.body;

    if (!name || !email || !password || !foto) {
      return res.status(400).json({
        message: "Semua field wajib diisi",
      });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        foto,
      },
    });

    res.status(201).json({
      message: "User berhasil ditambahkan",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menambahkan user",
      error,
    });
  }
};

// 3. Menampilkan user berdasarkan id
export const showUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengambil detail user",
      error,
    });
  }
};

// 4. Mengupdate user
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email, password, foto } = req.body;

    const updatedUser = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
        password,
        foto,
      },
    });

    res.json({
      message: "User berhasil diupdate",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal mengupdate user",
      error,
    });
  }
};

// 5. Menghapus user
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    res.json({
      message: "User berhasil dihapus",
    });
  } catch (error) {
    res.status(500).json({
      message: "Gagal menghapus user",
      error,
    });
  }
};