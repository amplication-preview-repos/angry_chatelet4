/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Bid as PrismaBid } from "@prisma/client";

export class BidServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BidCountArgs, "select">): Promise<number> {
    return this.prisma.bid.count(args);
  }

  async bids<T extends Prisma.BidFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BidFindManyArgs>
  ): Promise<PrismaBid[]> {
    return this.prisma.bid.findMany<Prisma.BidFindManyArgs>(args);
  }
  async bid<T extends Prisma.BidFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BidFindUniqueArgs>
  ): Promise<PrismaBid | null> {
    return this.prisma.bid.findUnique(args);
  }
  async createBid<T extends Prisma.BidCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BidCreateArgs>
  ): Promise<PrismaBid> {
    return this.prisma.bid.create<T>(args);
  }
  async updateBid<T extends Prisma.BidUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BidUpdateArgs>
  ): Promise<PrismaBid> {
    return this.prisma.bid.update<T>(args);
  }
  async deleteBid<T extends Prisma.BidDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BidDeleteArgs>
  ): Promise<PrismaBid> {
    return this.prisma.bid.delete(args);
  }
}
