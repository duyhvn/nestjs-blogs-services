import {BlogConfig} from 'src/database/entities/BlogConfig';

export interface BlogConfigRepository {

    findOneByBlogConfigId(id: number): Promise<BlogConfig>;

}
