import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BidService } from "./bid.service";
import { BidControllerBase } from "./base/bid.controller.base";

@swagger.ApiTags("bids")
@common.Controller("bids")
export class BidController extends BidControllerBase {
  constructor(protected readonly service: BidService) {
    super(service);
  }
}
