import { registerAs } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeOrmConfig = registerAs(
  'database',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '6111'),
    username: process.env.DB_USER ?? 'postgres',
    password: process.env.DB_PASSWORD ?? 'password',
    database: process.env.DB_DATABASE ?? 'tasks',
  })
)