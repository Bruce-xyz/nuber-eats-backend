import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { RestaurantsModule } from "./restaurants/restaurants.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true // 메모리
      // 파일로 만들때 autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    RestaurantsModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
