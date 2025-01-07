import { FastifyInstance } from "fastify";
import z from "zod";
import { FastifyTypedInstance } from "./types";

export async function routes(app: FastifyTypedInstance) {
  app.get(
    "/users",
    {
      schema: {
        tags: ["users"],
        description: "List users",
      },
    },
    () => {
      return [];
    }
  );

  app.post(
    "/user",
    {
      schema: {
        tags: ["users"],
        description: "Create a new user.",
        body: z.object({
          name: z.string(),
          email: z.string().email(),
        }),
      },
    },
    (request) => {
      const { name, email } = request.body;

      return {};
    }
  );
}
