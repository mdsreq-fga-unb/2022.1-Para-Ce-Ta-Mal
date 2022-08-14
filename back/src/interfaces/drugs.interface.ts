import { Drug } from "@prisma/client";

export type CreateDrugData = Omit<Drug, "id">;
