const logger = require("../config/logger-config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destory(data) {
    try {
      const response = await this.model.destory({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      logger.error("Something went wrong in the CRUD Repo: create");
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      logger.error("Something went wrong in the CRUD Repo: create");
      throw error;
    }
  }
  async getAll(data) {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error("Something went wrong in the CRUD Repo: create");
      throw error;
    }
  }
  async update(id, data) {
    // data -> {col:  val, ...}
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      logger.error("Something went wrong in the CRUD Repo: create");
      throw error;
    }
  }
}

module.exports = CrudRepository;
