import { Entity, ObjectIdColumn, ManyToOne } from 'typeorm'
import { User } from '../../user/schema/user.entity'
import { Rooms } from '../../rooms/entities/room.entity'
import { v4 as uuidv4 } from 'uuid'

@Entity()
export class Bookings {
  @ObjectIdColumn()
  _id: string

  @ManyToOne(() => User, (customer) => customer.bookings)
  customer: User

  @ManyToOne(() => Rooms, (room) => room.bookings)
  room: Rooms

  constructor(partial: Partial<Bookings>) {
    Object.assign(this, partial)
    if (!this._id) {
      this._id = uuidv4()
    }
  }
}
