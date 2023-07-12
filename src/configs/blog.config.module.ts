import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BlogConfig} from 'src/database/entities/BlogConfig';
import {BlogConfigServiceImpl} from '../controllers/blog.config/blog.config.service';
import {BlogConfigMapperImpl} from '../controllers/blog.config/blog.config.mapper';
import {BlogConfigController} from '../controllers/blog.config/blog.config.controller';
import {INJECT_COMPONENTS} from "../constants/blogs.constant";
import {BlogConfigRepositoryImpl} from "../database/repository/impl/blog.config.repository.impl";

@Module({
  imports: [TypeOrmModule.forFeature([BlogConfig])],
  providers: [
    {
      provide: INJECT_COMPONENTS.BLOG_CONFIG_REPOSITORY,
      useClass: BlogConfigRepositoryImpl,
    },
    {
      provide: INJECT_COMPONENTS.BLOG_CONFIG_SERVICE,
      useClass: BlogConfigServiceImpl,
    },
    {
      provide: INJECT_COMPONENTS.BLOG_CONFIG_MAPPER,
      useClass: BlogConfigMapperImpl,
    },
  ],
  controllers: [BlogConfigController],
  exports: [
    {
      provide: INJECT_COMPONENTS.BLOG_CONFIG_REPOSITORY,
      useClass: BlogConfigRepositoryImpl,
    },
    {
      provide: INJECT_COMPONENTS.BLOG_CONFIG_MAPPER,
      useClass: BlogConfigMapperImpl,
    },
    {
      provide: INJECT_COMPONENTS.BLOG_CONFIG_SERVICE,
      useClass: BlogConfigServiceImpl,
    },
  ],
})
export class BlogConfigModule {}
