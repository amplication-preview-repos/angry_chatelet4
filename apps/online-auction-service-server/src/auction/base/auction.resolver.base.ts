/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Auction } from "./Auction";
import { AuctionCountArgs } from "./AuctionCountArgs";
import { AuctionFindManyArgs } from "./AuctionFindManyArgs";
import { AuctionFindUniqueArgs } from "./AuctionFindUniqueArgs";
import { DeleteAuctionArgs } from "./DeleteAuctionArgs";
import { AuctionService } from "../auction.service";
@graphql.Resolver(() => Auction)
export class AuctionResolverBase {
  constructor(protected readonly service: AuctionService) {}

  async _auctionsMeta(
    @graphql.Args() args: AuctionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Auction])
  async auctions(
    @graphql.Args() args: AuctionFindManyArgs
  ): Promise<Auction[]> {
    return this.service.auctions(args);
  }

  @graphql.Query(() => Auction, { nullable: true })
  async auction(
    @graphql.Args() args: AuctionFindUniqueArgs
  ): Promise<Auction | null> {
    const result = await this.service.auction(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Auction)
  async deleteAuction(
    @graphql.Args() args: DeleteAuctionArgs
  ): Promise<Auction | null> {
    try {
      return await this.service.deleteAuction(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}