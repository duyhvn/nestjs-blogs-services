import {BlogConfigMapper} from './blog.config.interface';
import {ResponseBlogConfigDto,} from './dtos/blog.config.dto';
import {BlogConfig} from 'src/database/entities/BlogConfig';

export class BlogConfigMapperImpl implements BlogConfigMapper {
    mapToBlogConfigDto(blogConfig: BlogConfig): ResponseBlogConfigDto {
        const {id, secretKey, name} = blogConfig;
        return {
            id: id,
            name: name,
            secretKey: secretKey,
        } as ResponseBlogConfigDto;
    }

}
