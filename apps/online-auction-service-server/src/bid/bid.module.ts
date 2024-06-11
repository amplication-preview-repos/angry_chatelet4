import { Module } from "@nestjs/common";
import { BidModuleBase } from "./base/bid.module.base";
import { BidService } from "./bid.service";
import { BidController } from "./bid.controller";
import { BidResolver } from "./bid.resolver";

@Module({
  imports: [BidModuleBase],
  controllers: [BidController],
  providers: [BidService, BidResolver],
  exports: [BidService],
})
export class BidModule {}
