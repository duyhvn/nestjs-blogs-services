import {Injectable} from '@nestjs/common';
import {DataSource, Repository} from 'typeorm';
import {BlogConfig} from 'src/database/entities/BlogConfig';
import {BlogConfigRepository} from "../blog.config.repository";

@Injectable()
export class BlogConfigRepositoryImpl extends Repository<BlogConfig> implements BlogConfigRepository {

    constructor(private datasource: DataSource) {
        super(BlogConfig, datasource.createEntityManager());
    }

    async findOneByBlogConfigId(id: number): Promise<BlogConfig> {
        return await this.findOneOrFail({
            select: {id: true, name: true, secretKey: true},
            where: {id: id}
        });
    }
}
