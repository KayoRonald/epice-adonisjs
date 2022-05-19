import Database from '@ioc:Adonis/Lucid/Database'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Users from 'App/Models/User'

export default class UsersController {
  public async index({ }: HttpContextContract) {
    const users = await Users.all()
    return users
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only(['name', 'email', 'curso'])
    const users = await Users.create(data)
    return users
  }

  // public async store({ }: HttpContextContract) {

  // }

  public async show({ params }: HttpContextContract) {
    const users = await Users.findOrFail(params.email)
    return users
  }

  // public async edit({ }: HttpContextContract) {

  // }

  public async update({request, params }: HttpContextContract) {
    const namee = request.only(['name'])
    const users = await Database.from('user_epices')
      .where(params.email)
      .update(namee)
    return users
  }

  public async destroy({ response, params }: HttpContextContract) {
    const users = await Users.findOrFail(params.email)
    await users.delete()
    return response.status(201).json({ message: 'deletado com sucesso!' })
  }
}
