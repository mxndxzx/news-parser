const { connect } = require('../config/db.config');
const logger = require('../logger/api.logger');

class Service {
    
    db = {};

    constructor() {
        this.db = connect();
        // Dev
        this.db.sequelize.sync().then( () => {
            logger.info('Synced DB');
        });
    };

    async getOne(articleId) {
        try {
            const article = await this.db.noticias.findAll({
                where: {
                    id: articleId
                }
            });

            return article;
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        };
    };
    
    async getAll() {
        try {
            const article = await this.db.noticias.findAll()

            return article;
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        };
    };

    async save(body) {
        logger.info('Pre-service::', body)

        try {
            const newArticle = await this.db.noticias.create(body);

            return newArticle;
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        };
    };

    async update(body, articleId) {
        try {
            const newArticle = await this.db.noticias.update(body, {
                where: {
                    id: articleId
                }
            });
            
            return newArticle;
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        };
    };

    async delete(articleId) {
        try {
            data = await this.db.noticias.destroy({where: {id: articleId}});
            return data;
        } catch (err) {
            logger.error('Error::' + err);
            return err;
        };
    };
};

module.exports = new Service();