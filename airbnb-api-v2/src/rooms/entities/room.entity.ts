import { Entity, Column, ObjectIdColumn, ManyToOne, OneToMany } from 'typeorm'
import { User } from '../../user/schema/user.entity'
// import { Like } from 'src/likes/entities/like.entity'
// import { Review } from 'src/reviews/entities/review.entity'
import { Bookings } from 'src/bookings/entities/booking.entity'
import { v4 as uuidv4 } from 'uuid'

@Entity()
export class Rooms {
  @ObjectIdColumn()
  _id: string

  @Column()
  title: string

  @Column()
  place: string

  @Column()
  position: {
    lat: number
    lng: number
  }

  @Column()
  price: number

  @Column()
  images: string[]

  @Column()
  rating: {
    average: number
    count: number
  }

  @Column()
  type: string

  @ManyToOne(() => User, (user) => user.rooms)
  host: User

  @Column()
  limit: number

  @Column()
  pet: boolean

  @Column()
  country: string

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @OneToMany((type) => Bookings, (booking) => booking.room)
  bookings: Bookings[]

  constructor(partial: Partial<Rooms>, host: User) {
    Object.assign(this, partial)
    if (!this._id) {
      this._id = uuidv4()
    }
    this.rating = {
      average: 0,
      count: 0
    }
    if (!this.pet) {
      this.pet = false
    }

    this.host = host
  }
}
