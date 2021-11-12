import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Restaurant } from './entities/restaurants.entity';

@Resolver(() => Restaurant) // 괄호는 없어도 되지만 of => Restaurant는 직관적
export class RestaurantsResolver {

  @Query(returns => [Restaurant])
  async restaurants(@Args('veganOnly') veganOnly: boolean): Promise<Restaurant[]> {
    console.log(veganOnly);
    return null;
  }

  @Mutation(returns => Boolean)
  async createRestaurant(
    @Args('name') name: string,
    @Args('isVegan') isVegan: boolean,
    @Args('address') address: string,
    @Args('ownersName') ownersName: string
  ): Promise<boolean> {
    return true;
  }
}