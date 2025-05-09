import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('restaurant')
export class RestaurantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isVegan: boolean;

  @Column()
  address: string;

  @Column()
  ownersName: string;
}
