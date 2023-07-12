import {Module} from '@nestjs/common';
import {DatasourceModule} from "./configs/datasource.module";
import {ConfigModule} from "@nestjs/config";
import {BlogConfigModule} from "./configs/blog.config.module";
import {BlogConfigController} from "./controllers/blog.config/blog.config.controller";
import {BlogConfigServiceImpl} from "./controllers/blog.config/blog.config.service";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        DatasourceModule,
        BlogConfigModule
    ],
    controllers: [BlogConfigController],
    providers: [BlogConfigServiceImpl],
})
export class AppModule {
}
