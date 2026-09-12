export const AppConfig =  () => {
  return {
	enviroment: process.env.NODE_ENV || 'dev',
	port: process.env.PORT || 3000,
	mongodb: process.env.MONGODB || 'mongodb://arturouo_db_user:DJZoHXiPosnjoV1q@mongodbcluster.0uitjrl.mongodb.net/',//,nest-pokemon?retryWrites=true&w=majority',
	defaultLimit: process.env.DEFAULT_LIMIT || 5
  }}