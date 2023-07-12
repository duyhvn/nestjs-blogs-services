import {Controller, Get, Inject, Param, ParseIntPipe,} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import {INJECT_COMPONENTS} from 'src/constants/blogs.constant';
import {BlogConfigService} from './blog.config.interface';
import {ENDPOINT_URL} from "../../constants/endpoint.url.constant";

@ApiTags(ENDPOINT_URL.BLOG_CONFIG)
@Controller(ENDPOINT_URL.BLOG_CONFIG)
export class BlogConfigController {
    constructor(
        @Inject(INJECT_COMPONENTS.BLOG_CONFIG_SERVICE)
        private blogConfigService: BlogConfigService,
    ) {
    }

    @Get('/:id')
    findIntegration(@Param('id', ParseIntPipe) id: number) {
        return this.blogConfigService.findBlogConfig(id);
    }
}
