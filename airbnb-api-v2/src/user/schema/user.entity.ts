import { Entity, Column, PrimaryGeneratedColumn, ObjectIdColumn, OneToMany } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import { Rooms } from 'src/rooms/entities/room.entity'
import { Bookings } from 'src/bookings/entities/booking.entity'

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Rooms, (room) => room.host)
  rooms: Rooms[]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Bookings, (booking) => booking.customer)
  bookings: Bookings[]

  constructor(partial: Partial<User>) {
    Object.assign(this, partial)
    if (!this.id) {
      this.id = uuidv4()
    }
    this.dateCreated = new Date()
    this.isVerified = false
  }
}
