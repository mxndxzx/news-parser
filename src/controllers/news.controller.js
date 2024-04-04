const service = require('../services/news.service');
const logger = require('../logger/api.logger');

// Methods controller
class Controller {

    async getOne(req,res) {
        const articleId = req.params.articleId;

        const response = await service.getOne(articleId);

        if ( response != '' && !response.message ) {
            res.status(201).send({
                status: "OK",
                data: response,
            });
        } else if (response.name) {
            res.status(502).send({
                status: "FAILED",
                err: response.message,
            });
        } else {
            res.status(401).send({
                status: "ERROR",
                err: "No records found with the given id"
            });
        };
    };

    async getAll(req,res) {
        const response = await service.getAll();

        if ( response != '' && !response.message) {
            res.status(201).send({
                status: "OK",
                data: response,
            });
        } else if (response.name) {
            res.status(502).send({
                status: "FAILED",
                err: response.message,
            });
        } else {
            res.status(401).send({
                status: "ERROR",
                err: "No records found with the given id"
            });
        };
    };

    async save(req,res) {
        const { body } = req;

        const response = await service.save(body);

        if (response.id) {
            res.status(201).send({
                status: "OK",
                data: response
            })
        } else {
            res.status(502).send({
                status: "ERROR",
                err: response.message
            })
        };
    };

    async update(req,res) {
        const { body } = req;
        const articleId = req.params.articleId;

        const response = await service.update(body, articleId);

        if ( response != '' && !response.message ) {
            res.status(201).send({
                status: "OK",
                data: response,
            });
        } else if (response.name) {
            res.status(502).send({
                status: "FAILED",
                err: response.message,
            });
        } else {
            res.status(401).send({
                status: "ERROR",
                err: "No records found with the given id"
            });
        };
    };

    async delete(req,res) {
        const articleId = req.params.articleId;

        const response = await service.delete(articleId);

        if ( response != '' && !response.message ) {
            res.status(201).send({
                status: "OK",
                data: response,
            });
        } else if (response.name) {
            res.status(502).send({
                status: "FAILED",
                err: response.message,
            });
        } else {
            res.status(401).send({
                status: "ERROR",
                err: "No records found with the given id"
            });
        };
    };
};

module.exports = new Controller();