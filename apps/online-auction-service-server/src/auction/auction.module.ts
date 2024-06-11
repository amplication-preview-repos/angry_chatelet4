import { Module } from "@nestjs/common";
import { AuctionModuleBase } from "./base/auction.module.base";
import { AuctionService } from "./auction.service";
import { AuctionController } from "./auction.controller";
import { AuctionResolver } from "./auction.resolver";

@Module({
  imports: [AuctionModuleBase],
  controllers: [AuctionController],
  providers: [AuctionService, AuctionResolver],
  exports: [AuctionService],
})
export class AuctionModule {}
