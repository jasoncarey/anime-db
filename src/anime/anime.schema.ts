import { z } from 'zod';

export const createAnimeSchema = z
  .object({
    name: z.string(),
    description: z.string(),
    releaseYear: z.string(),
    genre: z.string(),
    studio: z.string(),
  })
  .required();

export type CreateAnimeDto = z.infer<typeof createAnimeSchema>;
