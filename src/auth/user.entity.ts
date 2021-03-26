import { Expose } from 'class-transformer';
import { Attendee } from 'src/events/attendee.entity';
import { Event } from 'src/events/event.entity';
import { OneToMany } from 'typeorm';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Expose()
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Expose()
  @Column({ unique: true })
  email: string;

  @Expose()
  @Column()
  firstName: string;

  @Column()
  @Expose()
  lastName: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  @Expose()
  profile: Profile;

  @OneToMany(() => Event, (event) => event.organizer)
  @Expose()
  organized: Event[];

  @OneToMany(() => Attendee, (attendee) => attendee.user)
  attended: Attendee[];
}
