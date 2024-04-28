import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'

@Entity()
export class User {
  @ObjectIdColumn()
  id: string

  @Column()
  name: string

  @PrimaryGeneratedColumn()
  email: string

  @Column()
  password: string

  @Column()
  dateCreated: Date

  @Column()
  isVerified: boolean

  constructor(partial: Partial<User>) {
    Object.assign(this, partial)
    if (!this.id) {
      this.id = uuidv4()
    }
    this.dateCreated = new Date()
    this.isVerified = false
  }
}
