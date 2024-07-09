import { z } from "zod";

// Schemas
const adminSchema = z.object({
  id: z.number().optional(),
  username: z.string().min(1).max(50, {
    message: "El nombre de usuario no debe exceder los 50 caracteres",
  }),
  password: z
    .string()
    .min(4)
    .max(50, { message: "La contraseña debe tener entre 6 y 50 caracteres" }),
  role: z.enum(["admin", "user"]),
});

const loginSchema = z.object({
  username: z.string().min(1).max(50, {
    message: "Credeciales inválidas",
  }),
  password: z.string().min(4).max(50, { message: "Credenciales inválidas" }),
});

// Types
type TAdminSchema = z.infer<typeof adminSchema>;
type TLoginSchema = z.infer<typeof loginSchema>;

export type { TAdminSchema, TLoginSchema };
export { adminSchema, loginSchema };
