import { Exclude } from 'class-transformer';

export abstract class AbstractEntity {
  public id: number;

  public uuid: string;

  @Exclude()
  public createdAt: Date;

  @Exclude()
  public updatedAt: Date;
}
