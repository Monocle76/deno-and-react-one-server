import { Application, Router } from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

interface ApiResponse {
  message: string
}

const app = new Application();

const router = new Router();

router
  .get("/api/message", ({ response }) => {
    response.body = <ApiResponse>{ message: "Hello, World!" }
  })

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen({ port: 80 })
