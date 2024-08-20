import {z} from 'zod';
export const messageSchema = z.object({
    content: z.string()
            .min(10,"Content must be atleast of 10 charcters")
            .max(300,"Content Must not exceed 300 characters")
})