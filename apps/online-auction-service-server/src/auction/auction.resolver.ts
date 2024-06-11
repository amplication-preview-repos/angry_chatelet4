import * as graphql from "@nestjs/graphql";
import { AuctionResolverBase } from "./base/auction.resolver.base";
import { Auction } from "./base/Auction";
import { AuctionService } from "./auction.service";

@graphql.Resolver(() => Auction)
export class AuctionResolver extends AuctionResolverBase {
  constructor(protected readonly service: AuctionService) {
    super(service);
  }
}
