import * as graphql from "@nestjs/graphql";
import { BidResolverBase } from "./base/bid.resolver.base";
import { Bid } from "./base/Bid";
import { BidService } from "./bid.service";

@graphql.Resolver(() => Bid)
export class BidResolver extends BidResolverBase {
  constructor(protected readonly service: BidService) {
    super(service);
  }
}
