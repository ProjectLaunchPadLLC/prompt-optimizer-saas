import { optimizePrompt } from "./optimizer";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/api/optimize") {
      const body = await request.json();

      const result = optimizePrompt(body.prompt);

      return new Response(JSON.stringify({
        optimized: result
      }), {
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response("Not found", { status: 404 });
  }
};
