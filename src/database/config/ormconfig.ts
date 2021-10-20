export function ormConfig(): any {
  return {
    type: 'mongodb',
    url: 'mongo://localhost:27071',
    entities: ['./entity/*.ts'],
    synchronize: true,
    useNewUrlParser: true,
    logging: true,
    useUnifiedTopology: true,
  };
}
