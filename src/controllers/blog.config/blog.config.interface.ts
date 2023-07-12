import {BlogConfig} from 'src/database/entities/BlogConfig';
import {ResponseBlogConfigDto,} from './dtos/blog.config.dto';

export interface BlogConfigMapper {
    mapToBlogConfigDto(blogConfig: BlogConfig): ResponseBlogConfigDto;
}

export interface BlogConfigService {
    findBlogConfig(id: number): Promise<ResponseBlogConfigDto>;
}
