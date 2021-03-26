import { Expose } from 'class-transformer';
import { User } from './../auth/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from './event.entity';

export enum AttendeeAnswerEnum {
  Accepted = 1,
  Maybe,
  Rejected,
}

@Entity()
export class Attendee {
  @Expose()
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event, (event) => event.attendees, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  event: Event;

  @Column()
  eventId: number;

  @Column('enum', {
    enum: AttendeeAnswerEnum,
    default: AttendeeAnswerEnum.Accepted,
  })
  @Expose()
  answer: AttendeeAnswerEnum;

  @ManyToOne(() => User, (user) => user.attended)
  @Expose()
  user: User;

  @Column()
  userId: number;
}
