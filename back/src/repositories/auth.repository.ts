import { prisma } from "../config/database.js";
import { CreateUserData } from "../interfaces/auth.interface.js";

async function createUser(userData: CreateUserData) {
  return prisma.user.create({
    data: { ...userData },
  });
}

export default { createUser };
