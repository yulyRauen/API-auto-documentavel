import fastify from "fastify";
import fastifyCors from "@fastify/cors";

const app = fastify();

app.listen({ port: 3000 }).then(() => {
  console.log("Server Running!");
});
