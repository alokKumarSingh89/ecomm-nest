export function ormConfig(): any {
  return {
    type: 'mongodb',
    url: 'mongodb://mongodb/nestapi',
    entities: [__dirname + '/../../components/**/**/*.entity{.ts,.js}'],
    synchronize: true,
    useNewUrlParser: true,
    logging: true,
    useUnifiedTopology: true,
  };
}
