import db from "../models/index.cjs";

const { User, Bootcamp } = db;

const UsersController = {};

UsersController.createUser = async (req, res, next) => {
  const data = req.body;

  try {
    const user = await User.create(data);

    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error al crear el usuario" });
  }
};

UsersController.findUserById = async (req, res, next) => {
  const { id } = req.params;
  console.log(`Buscando usuario con ID: ${id}`);

  try {
    const user = await User.findByPk(id, {
      include: [
        {
          model: Bootcamp,
          through: { attributes: [] }, // Excluye atributos de la tabla intermedia
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.json(user);
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Error al obtener el usuario y sus bootcamps" });
  }
};

UsersController.findAll = async (req, res, next) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Bootcamp,
          through: { attributes: [] }, // Excluye atributos de la tabla intermedia
        },
      ],
    });

    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error al obtener los usuarios" });
  }
};

UsersController.updateUserById = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const [updatedRows] = await User.update(data, {
      where: { id },
    });

    if (!updatedRows) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const updatedUser = await User.findByPk(id);
    return res.json(updatedUser);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error al actualizar el usuario" });
  }
};

UsersController.deleteUserById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletedRows = await User.destroy({
      where: { id },
    });

    if (!deletedRows) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.json({ message: "Usuario eliminado" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error al eliminar el usuario" });
  }
};

export { UsersController };