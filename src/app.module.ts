import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfig } from './config/app.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load:[AppConfig]//,
      //validationSchema: JoiValidationSchema,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    //MongooseModule.forRoot(process.env.MONGODB ?? 'mongodb://localhost:27017/nest-pokemon',{
    // MongooseModule.forRoot('mongodb://arturouo_db_user:DJZoHXiPosnjoV1q@mongodbcluster.0uitjrl.mongodb.net',{///nest-pokemon?retryWrites=true&w=majority',{
    //   dbName: 'nest-pokemon',
    // }),
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: 'mongodb://arturouo_db_user:DJZoHXiPosnjoV1q@mongodbcluster.0uitjrl.mongodb.net',
        dbName: 'nest-pokemon'
      }),
    }),
    PokemonModule,
    CommonModule,
    SeedModule,  
  ],
})
export class AppModule {}
