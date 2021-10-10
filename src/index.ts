import app from './app';
import routes from './routes';

app.use(routes);

app.listen(5000, () => {
  console.log(`Listen on port http://localhost:${5000}`)
})