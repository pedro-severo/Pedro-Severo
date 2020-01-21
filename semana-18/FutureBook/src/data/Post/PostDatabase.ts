import { PostGateway } from './../../business/gateways/Post/PostGateway';
import { PostType, Post } from "../../business/entities/Post";
import { KnexConnection } from "../KnexConnection/knexConnection";

export class PostModel {
    constructor(
        public picture: string, 
        public description: string, 
        public type: PostType,
        public userId: string,
        public creationDate: Date = new Date(),
    ) {};
};

export class PostEntityMapper {
    entityToModel(entity: Post): PostModel {
        return {
            picture: entity.getPicture(),
            description: entity.getDescription(),
            type: entity.getType(),
            userId: entity.getUserId(),
            creationDate: entity.getDate()
        };
    };
};


export class PostDataBase extends KnexConnection implements PostGateway {
    private postEntityMapper: PostEntityMapper;

    constructor() {
        super();
        this.postEntityMapper = new PostEntityMapper();
    };

    async createPost(post: Post) {
        await this.connection('posts_fbook').insert(this.postEntityMapper.entityToModel(post));
    };
};