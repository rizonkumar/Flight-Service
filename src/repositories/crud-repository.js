const logger = require("../config/logger-config");
const { MESSAGES } = require("../utils/constants");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const response = await this.model.create(data);
    return response;
  }

  async destory(data) {
    const response = await this.model.destory({
      where: {
        id: data,
      },
    });
    return response;
  }

  async get(data) {
    const response = await this.model.findByPk(data);
    return response;
  }

  async getAll(data) {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      logger.error(MESSAGES.ERROR.DATABASE_ERROR);
      throw error;
    }
  }

  async update(id, data) {
    // data -> {col:  val, ...}
    const response = await this.model.update(data, {
      where: {
        id: id,
      },
    });
    return response;
  }
}

module.exports = CrudRepository;
