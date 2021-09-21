import { Resolver, Query } from '@nestjs/graphql';
import { CarsService } from './cars.services';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => String)
  public async cars() {
    return 'Hello and Welcome to Yourcar Shop';
  }
}
