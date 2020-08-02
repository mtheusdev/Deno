import { serve } from "https://deno.land/std@0.63.0/http/server.ts";
const s = serve({ port: 3000 });
console.log("http://localhost:3000/");
for await (const req of s) {
  req.respond({ body: "<h1>Hello World\n</h1>" });
}

// deno run --allow-net  app.ts <- para dar acesso a rede