import fastify from "fastify";

const app = fastify();

app.get('/hey', () => {
  return 'Hey Seedtag XD'
})

app.listen({
  port: 3333,
}).then(() => { 
  console.log("Server running on port 3333");
});
