module.exports = (sequelize, DataTypes, Model) => {

    class Noticia extends Model {};

    Noticia.init({

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        volanta: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        titulo: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        descripcion: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        imgpath: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        pie: {
            type: DataTypes.STRING(80),
            allowNull: false
        },

        status: {
            type: DataTypes.STRING(1),
            allowNull: false
        },

        articulo: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: process.env.DB_TABLE,
        modelName: 'Noticias',
        createdAt: 'creado',
        updatedAt: 'actualizado',
        sequelize
    });
    
    return Noticia;
};