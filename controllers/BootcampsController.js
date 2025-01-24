import * as db from '../models/index.cjs'

const { Bootcamp, User } = db.default

const BootcampController = {}

BootcampController.createBootcamp = async (req, res, next) => {
  const data = req.body

  try {
    const bootcamp = await Bootcamp.create(data);
    return res.json(bootcamp)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Error al crear el Bootcamp' })
  }
}

BootcampController.addUser = async (req, res, next) => {
  const { bootcampId, userId } = req.body

  try {
    const bootcamp = await Bootcamp.findByPk(bootcampId);
    const user = await User.findByPk(userId)

    if (!bootcamp || !user) {
      return res.status(404).json({ message: 'Bootcamp o Usuario no encontrado' })
    }

    // Establece la relación entre el Usuario y el Bootcamp
    await bootcamp.addUser(user)

    return res.json({ message: 'Usuario agregado al Bootcamp exitosamente' })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Error al agregar el usuario al Bootcamp' })
  }
}

BootcampController.findById = async (req, res, next) => {
  const { id } = req.params

  try {
    const bootcamp = await Bootcamp.findByPk(id, {
      include: [User], // Incluye a los usuarios asociados al Bootcamp
    })

    if (!bootcamp) {
      return res.status(404).json({ message: 'Bootcamp no encontrado' })
    }

    return res.json(bootcamp)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Error al obtener el Bootcamp' })
  }
}

BootcampController.findAll = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.findAll({
      include: [User], // Incluye a los usuarios asociados a cada Bootcamp
    })

    return res.json(bootcamps)
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Error al obtener los Bootcamps' })
  }
}

export { BootcampController }
