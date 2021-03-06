import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
        tableName: 'users',
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
    // this.hasOne(models.File, { foreignKey: 'avatar_id' });
    // this.hasMan(models.File, { foreignKey: 'avatar_id' });
  }

  async checkPassword(password) {
    const isTheSame = await bcrypt
      .compare(password, this.password_hash)
      .then(result => {
        return result;
      });

    return isTheSame;
  }
}

export default User;
