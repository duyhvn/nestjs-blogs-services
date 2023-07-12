import {Inject, Injectable,} from '@nestjs/common';
import {BlogConfigRepository} from 'src/database/repository/blog.config.repository';
import {BlogConfigMapper, BlogConfigService} from './blog.config.interface';
import {ResponseBlogConfigDto} from './dtos/blog.config.dto';
import {INJECT_COMPONENTS} from "../../constants/blogs.constant";

@Injectable()
export class BlogConfigServiceImpl implements BlogConfigService {

    constructor(
        @Inject(INJECT_COMPONENTS.BLOG_CONFIG_REPOSITORY)
        private blogConfigRepository: BlogConfigRepository,
        @Inject(INJECT_COMPONENTS.BLOG_CONFIG_MAPPER)
        private blogConfigMapper: BlogConfigMapper,
    ) {
    }

    async findBlogConfig(id: number): Promise<ResponseBlogConfigDto> {
        return this.blogConfigMapper.mapToBlogConfigDto(await this.blogConfigRepository.findOneByBlogConfigId(id))
    }
}
