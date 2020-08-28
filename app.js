import { serve } from 'https://deno.land/std@0.66.0/http/server.ts'

const server = serve({
  port: 3000
})

for await (const req of server) {
  if (req.url == '/') {
    req.respond({
      status: 200,
      body: await Deno.open('./frontend/index.html')
    })
  }
}